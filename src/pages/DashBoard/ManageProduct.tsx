import { useState, useEffect } from 'react'
import PaginationBtn from '@/component/PaginationBtn'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'
import {
  useGetAllBikesQuery,
  useDeleteBikeMutation,
} from '@/Redux/featured/bikes/bikesApi'
import { toast } from 'react-toastify'

interface Bike {
  _id: string
  name: string
  price: number
  brand: string
  category: string
  quantity: number
}

const ManageProduct = () => {
  const [products, setProducts] = useState<Bike[]>([])
  const [search, setSearch] = useState('')
  const [filteredProducts, setFilteredProducts] = useState<Bike[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const { data: bikes, isLoading } = useGetAllBikesQuery(undefined)
  const [deleteBike, { isLoading: isDeleting }] = useDeleteBikeMutation()

  // Update products when bikes data is available
  useEffect(() => {
    if (bikes?.data) {
      setProducts(bikes.data)
      setFilteredProducts(bikes.data)
    }
  }, [bikes])

  // Filter products based on search
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredProducts(filtered)
  }, [search, products])

  const handleDelete = async (id: string) => {
    try {
      await deleteBike(id).unwrap()
      toast.success('Bike deleted successfully')
      // Redux query will automatically refetch due to invalidation
    } catch (error) {
      toast.error('Failed to delete bike')
      console.error('Delete error:', error)
    }
  }

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>Manage Products</h2>

      {/* Search Bar & Add Button */}
      <div className='flex justify-between mb-4'>
        <input
          type='text'
          placeholder='Search by name...'
          className='p-2 border rounded w-1/2'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to='/dashBoard/addProduct'>
          <button className='bg-primary text-white px-4 py-2 rounded flex items-center'>
            <IoMdAdd size={20} /> Add Product
          </button>
        </Link>
      </div>

      {/* Product Table */}
      <div className='overflow-x-auto'>
        <table className='w-full border-collapse border border-gray-200'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='p-2 border'>Name</th>
              <th className='p-2 border'>Brand</th>
              <th className='p-2 border'>Price</th>
              <th className='p-2 border'>Category</th>
              <th className='p-2 border'>Quantity</th>
              <th className='p-2 border'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((product) => (
              <tr key={product._id} className='text-center'>
                <td className='p-2 border'>{product.name}</td>
                <td className='p-2 border'>{product.brand}</td>
                <td className='p-2 border'>{product.price}TK</td>
                <td className='p-2 border'>{product.category}</td>
                <td className='p-2 border'>{product.quantity}</td>
                <td className='p-2 border flex justify-center gap-8'>
                  <Link to={`/dashBoard/updateProduct/${product._id}`}>
                    <button className='text-green-600 hover:text-green-800'>
                      <FaEdit size={18} />
                    </button>
                  </Link>
                  <button
                    className='text-red-600 hover:text-red-800'
                    onClick={() => handleDelete(product._id)}
                    disabled={isDeleting}
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <PaginationBtn
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProducts.length / itemsPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}

export default ManageProduct

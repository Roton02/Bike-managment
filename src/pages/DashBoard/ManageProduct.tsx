import { useState, useEffect } from 'react'
import PaginationBtn from '@/component/PaginationBtn'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useGetAllBikesQuery } from '@/Redux/featured/bikes/bikesApi'

interface Product {
  id: number
  name: string
  price: number
  brand: string
  category: string
  maxSpeed: string
  travelDistance: string
  trunkWidth: string
  waterproof: string
  seatHeight: string
  groundClearance: string
  chargingTime: string
  vehicleWeight: string
  permissibleWeight: string
  ratedPower: string
  dimensions: string
  screen: string
  colorOptions: string[]
  images: string[]
  quantity: number
}

const ManageProduct = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState('')
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const { data: bikes, isLoading } = useGetAllBikesQuery(undefined)

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

  const handleDelete = (id: number) => {
    setProducts(products.filter((product) => product.id !== id))
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
        <Link to={'/dashBoard/addProduct'}>
          {' '}
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
              <th className='p-2 border'>brand</th>
              <th className='p-2 border'>price</th>
              <th className='p-2 border'>category</th>
              <th className='p-2 border'>quantity</th>
              <th className='p-2 border'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((product) => (
              <tr key={product.id} className='text-center'>
                <td className='p-2 border'>{product.name}</td>
                <td className='p-2 border'>{product.brand}</td>
                <td className='p-2 border'>{product.price}TK</td>
                <td className='p-2 border'>{product.category}</td>
                <td className='p-2 border'>{product.quantity}</td>
                <td className='p-2 border flex justify-center gap-8'>
                  <Link to={`/dashBoard/updateProduct/${product?.id}`}>
                    {' '}
                    <button className='text-green-600 hover:text-green-800'>
                      <FaEdit size={18} />
                    </button>
                  </Link>
                  <button
                    className='text-red-600 hover:text-red-800'
                    onClick={() => handleDelete(product.id)}
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

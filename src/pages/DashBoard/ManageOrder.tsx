/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react'
import PaginationBtn from '@/component/PaginationBtn'
import { useGetAllOrderQuery } from '@/Redux/featured/order/orderApi'

export interface IOrder {
  _id: string
  customerName: string
  customerEmail: string
  customerAddress: string
  customerPhoneNumber: string
  productName: string
  productPrice: number
  user: string
  product: string
  quantity: number
  totalPrice?: number
  isAproved?: 'Pending' | 'Processing' | 'Shipped' | 'Delivered'
  status?: 'Paid' | 'Failed' | 'Cancelled'
}

const ManageOrders = () => {
  const [orders, setOrders] = useState<IOrder[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')
  const itemsPerPage = 5

  const { data, isLoading } = useGetAllOrderQuery(undefined)

  useEffect(() => {
    if (data?.data) {
      setOrders(data.data)
    }
  }, [data])

  const handleStatusChange = (id: number, newStatus: string) => {
    console.log(id)
  }

  const handleDelete = (id: number) => {
    console.log(id)
  }

  const filteredOrders = orders?.filter((order) => {
    console.log('Checking Order:', order.customerName) // Debugging customer names
    return order.customerName
      ?.toLowerCase()
      .includes(search?.toLowerCase() || '')
  })

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredOrders?.slice(indexOfFirstItem, indexOfLastItem)
  console.log(filteredOrders)

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>Manage Orders</h2>?
      {/* Search Bar */}
      <input
        type='text'
        placeholder='Search by customer name...'
        className='p-2 border rounded w-full mb-4'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* Orders Table */}
      <div className='overflow-x-auto'>
        <table className='w-full border-collapse border border-gray-200'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='p-2 border'>Name</th>
              <th className='p-2 border'>Email</th>
              <th className='p-2 border'>Total</th>
              <th className='p-2 border'>Delivery status</th>
              <th className='p-2 border'>Edit Status</th>
              <th className='p-2 border'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((order) => (
              <tr key={order._id} className='text-center'>
                <td className='p-2 border'>{order.customerName}</td>
                <td className='p-2 border'>{order.customerEmail}</td>
                <td className='p-2 border'>${order.totalPrice}</td>
                <td className='p-2 border'>{order.isAproved}</td>
                <td className='p-2 border'>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order._id, e.target.value)
                    }
                    className='border p-1 rounded'
                  >
                    <option value='Pending'>Pending</option>
                    <option value='Processing'>Processing</option>
                    <option value='Shipped'>Shipped</option>
                    <option value='Delivered'>Delivered</option>
                  </select>
                </td>
                <td className='p-2 border'>
                  <button
                    className='text-red-600 hover:text-red-800'
                    onClick={() => handleDelete(order._id)}
                  >
                    Delete
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
        totalPages={Math.ceil(filteredOrders.length / itemsPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}

export default ManageOrders

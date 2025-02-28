/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react'
import PaginationBtn from '@/component/PaginationBtn'
import {
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
  useDeleteOrderMutation,
} from '@/Redux/featured/order/orderApi'
import { toast } from 'react-toastify'
import { IOrder } from '@/interface/orderData'

const ManageOrders = () => {
  const [orders, setOrders] = useState<IOrder[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')
  const itemsPerPage = 5

  const { data, isLoading } = useGetAllOrdersQuery(undefined)
  const [updateOrderStatus] = useUpdateOrderStatusMutation()
  const [deleteOrder, { isLoading: isDeleting }] = useDeleteOrderMutation()

  useEffect(() => {
    if (data?.data) {
      setOrders(data.data)
    }
  }, [data])

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    try {
      await updateOrderStatus({
        orderId,
        updateStatus: newStatus,
      }).unwrap()
      toast.success('Order status updated successfully')
    } catch (error) {
      toast.error('Failed to update order status')
      console.error('Update error:', error)
    }
  }

  const handleDelete = async (orderId: string) => {
    try {
      await deleteOrder(orderId).unwrap()
      toast.success('Order deleted successfully')
    } catch (error) {
      toast.error('Failed to delete order')
      console.error('Delete error:', error)
    }
  }

  const filteredOrders = orders?.filter((order) =>
    order.customerName?.toLowerCase().includes(search.toLowerCase())
  )

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredOrders?.slice(indexOfFirstItem, indexOfLastItem)

  if (isLoading) {
    return <div className='text-center py-4'>Loading...</div>
  }

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>Manage Orders</h2>

      <input
        type='text'
        placeholder='Search by customer name...'
        className='p-2 border rounded w-full mb-4'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className='overflow-x-auto'>
        <table className='w-full border-collapse border border-gray-200'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='p-2 border'>Name</th>
              <th className='p-2 border'>Email</th>
              <th className='p-2 border'>Total</th>
              <th className='p-2 border'>Delivery Status</th>
              <th className='p-2 border'>Payment Status</th>
              <th className='p-2 border'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((order) => (
              <tr key={order._id} className='text-center'>
                <td className='p-2 border'>{order.customerName}</td>
                <td className='p-2 border'>{order.customerEmail}</td>
                <td className='p-2 border'>${order.totalPrice}</td>
                <td className='p-2 border'>
                  <select
                    value={order.isAproved}
                    onChange={(e) =>
                      handleStatusChange(order._id!, e.target.value)
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
                  <span
                    className={`px-2 py-1 rounded ${
                      order.status === 'Paid'
                        ? 'bg-green-200 text-green-800'
                        : order.status === 'Failed'
                        ? 'bg-red-200 text-red-800'
                        : 'bg-yellow-200 text-yellow-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className='p-2 border'>
                  <button
                    className='text-red-600 hover:text-red-800 disabled:opacity-50'
                    onClick={() => handleDelete(order._id!)}
                    disabled={isDeleting}
                  >
                    {isDeleting ? 'Deleting...' : 'Delete'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredOrders.length > itemsPerPage && (
        <div className='mt-4'>
          <PaginationBtn
            currentPage={currentPage}
            totalPages={Math.ceil(filteredOrders.length / itemsPerPage)}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      )}
    </div>
  )
}

export default ManageOrders

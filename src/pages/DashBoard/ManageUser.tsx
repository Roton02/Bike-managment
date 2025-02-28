/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import PaginationBtn from '@/component/PaginationBtn'
import {
  useBlockUserMutation,
  useDeleteCustomerMutation,
  useGetAllCustomersQuery,
  useUnBlockUserMutation,
} from '@/Redux/featured/auth/authApi'
import { TUser } from '@/interface/userData'
import { Button } from '@/components/ui/button'

const ManageUser = () => {
  const [blockUser] = useBlockUserMutation()
  const [unblockUser] = useUnBlockUserMutation()
  const [deleteUser] = useDeleteCustomerMutation()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5 // Number of items to show per page

  const { data,  isLoading } = useGetAllCustomersQuery(undefined)

  const customers = data?.data || [] // ✅ Extract only the `data` array

  // Pagination calculations
  const totalItems = customers.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // Get current items for the page
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = customers.slice(indexOfFirstItem, indexOfLastItem)

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  // Toggle user active status
  const handleBlockUser = async (id: string) => {
    try {
      await blockUser(id).unwrap()
    } catch (error) {
      console.error('Failed to block user:', error)
    }
  }
  const handleUnBlockUser = async (id: string) => {
    try {
      await unblockUser(id).unwrap()
    } catch (error) {
      console.error('Failed to unblock user:', error)
    }
  }

  // Update user role
  const handleDeleteuser = async (id: string) => {
    try {
      await deleteUser(id).unwrap()
    } catch (error) {
      console.error('Failed to delete user:', error)
    }
  }

  if (isLoading) {
    return <div className='text-center py-4'>Loading...</div>
  }

  if (!customers.length) {
    return <div className='text-center py-4'>No users found</div>
  }

  return (
    <div className='p-4 bg-gray-100 min-h-screen '>
      <h2 className='text-2xl font-bold mb-4'>Manage Users</h2>

      <div className='overflow-x-auto'>
        <table className='w-full  bg-white shadow-md rounded-lg overflow-hidden'>
          <thead>
            <tr className='bg-gray-200 text-gray-700'>
              <th className='p-3 text-left'>Name</th>
              <th className='p-3 text-left'>Email</th>
              <th className='p-3 text-left'>Role</th>
              <th className='p-3 text-left'>Block-User</th>
              <th className='p-1 text-left'>DeleteUser</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((user: TUser) => (
              <tr key={user._id} className='border-b hover:bg-gray-100'>
                <td className='p-3'>{user.name}</td>
                <td className='p-3'>{user.email}</td>
                <td className='p-3'>{user.role}</td>
                <td className='p-3'>
                  {user.isBlocked ? (
                    <Button
                      className=''
                      onClick={() => handleUnBlockUser(user._id)}
                    >
                      Unblock
                    </Button>
                  ) : (
                    <Button
                      className='bg-red-500 px-6'
                      onClick={() => handleBlockUser(user._id)}
                    >
                      Block
                    </Button>
                  )}
                </td>
                <td className='p-3'>
                  <Button
                    className={`px-4 py-2 text-white rounded `}
                    onClick={() => handleDeleteuser(user?._id)}
                  >
                    {' '}
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination - Only show if there are items */}
      {totalItems > itemsPerPage && (
        <div className='mt-4'>
          <PaginationBtn
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  )
}

export default ManageUser

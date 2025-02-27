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
import { useAppDispatch } from '@/Redux/hooks'

const ManageUser = () => {
  const disPacth = useAppDispatch()
  const [blockUser] = useBlockUserMutation()
  const [unblockUser] = useUnBlockUserMutation()
  const [deleteUser] = useDeleteCustomerMutation()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const { data, error, isLoading } = useGetAllCustomersQuery(undefined)

  const customers = data?.data || [] // ✅ Extract only the `data` array

  console.log(customers) //

  // Toggle user active status
  const handleBlockUser = async (id: string) => {
    const res = await blockUser(id)
    console.log('Toggled status for user ID:', res)
    // Update user status in the backend
  }
  const handleUnBlockUser = async (id: string) => {
    const res = await unblockUser(id)
    console.log('Toggled status for user ID:', res)
    // Update user status in the backend
  }

  // Update user role
  const handleDeleteuser = async (id: string) => {
    const res = await deleteUser(id)
    console.log('Updated role for user ID:', res)
    // Update role in the backend
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
            {customers?.map((user: TUser) => (
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

      {/* Pagination */}
      <div className='mt-4'>
        <PaginationBtn
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  )
}

export default ManageUser

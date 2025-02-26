import { useState } from 'react'
import { Edit } from 'lucide-react'
import { useAppSelector } from '@/Redux/hooks'
import { UseCurrentUser } from '@/Redux/featured/auth/authSlice'

const UserProfile = () => {
  const user = useAppSelector(UseCurrentUser)
  console.log(user)
  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState(user?.name)
  const [showTooltip, setShowTooltip] = useState(false)

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    console.log('Updated Name:', editedName)
    setIsEditing(false)
  }

  const handleMouseEnter = () => {
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
  }

  return (
    <div className='max-w h-screen flex items-center justify-center'>
      <div className='lg:w-8/12 md:w-8/12 w-full text-center h-4/6 m-auto shadow-2xl flex justify-center flex-col items-center p-5 gap-4'>
        <img
          className='w-20 h-20 rounded-full border-4 border-primary'
          src='https://randomuser.me/api/portraits/men/45.jpg'
          alt='Profile'
        />
        <h1 className='text-2xl flex items-center gap-2'>
          {user?.name}
          <div
            className='cursor-pointer hover:text-blue-500'
            onClick={handleEditClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Edit />
          </div>
          {showTooltip && (
            <div className='absolute bg-gray-700 text-white p-2 rounded-md text-xs'>
              Edit Name
            </div>
          )}
        </h1>
        <h1 className='text-xl'>{user?.email}</h1>

        {/* Modal */}
        {isEditing && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white p-5 rounded-md shadow-lg w-1/3'>
              <h2 className='text-xl mb-4'>Edit Name</h2>
              <input
                className='text-center text-2xl border p-2 w-full'
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
              <div className='flex justify-end mt-4'>
                <button
                  className='bg-blue-500 text-white px-4 py-2 rounded'
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserProfile

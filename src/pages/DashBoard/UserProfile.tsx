/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef } from 'react'
import { Edit, Camera } from 'lucide-react'
import { useAppSelector } from '@/Redux/hooks'
import { UseCurrentUser } from '@/Redux/featured/auth/authSlice'
import { imageUpload } from '@/utils/imageUpload'
import { toast } from 'react-toastify'
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from '@/Redux/featured/auth/authApi'

const UserProfile = () => {
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation()
  const AuthUser = useAppSelector(UseCurrentUser)
  const { data } = useGetSingleUserQuery(AuthUser?._id)
  const user = data?.data
  console.log(user)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // State for modals and editing
  const [isEditingName, setIsEditingName] = useState(false)
  const [isEditingPassword, setIsEditingPassword] = useState(false)
  const [editedName, setEditedName] = useState(user?.name)
  const [showTooltip, setShowTooltip] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  // Password update state
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  // Handle image click
  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  // Handle image change
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      try {
        setPreviewImage(URL.createObjectURL(file))
        const imageUrl = await imageUpload(file)

        const response = await updateUser({
          userId: user?._id,
          data: { image: imageUrl },
        }).unwrap()

        if (response.success) {
          toast.success('Profile image updated successfully')
        }
      } catch (error: any) {
        toast.error(error?.data?.message || 'Failed to update image')
        setPreviewImage(null) // Reset preview on error
      }
    }
  }

  // Handle name update
  const handleNameSave = async () => {
    try {
      const response = await updateUser({
        userId: user?._id,
        data: { name: editedName },
      }).unwrap()

      if (response.success) {
        toast.success('Name updated successfully')
        setIsEditingName(false)
      }
    } catch (error: any) {
      toast.error(error?.data?.message || 'Failed to update name')
      console.log(error)
    }
  }

  // Handle password update
  const handlePasswordUpdate = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('New passwords do not match!')
      return
    }

    try {
      const response = await updateUser({
        userId: user?._id,
        data: {
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        },
      }).unwrap()

      if (response.success) {
        toast.success('Password updated successfully')
        setIsEditingPassword(false)
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        })
      }
    } catch (error: any) {
      toast.error(error?.data?.message || 'Failed to update password')
    }
  }

  return (
    <div className='max-w h-screen flex items-center justify-center'>
      <div className='lg:w-8/12 md:w-8/12 w-full text-center h-4/6 m-auto shadow-2xl flex justify-center flex-col items-center p-5 gap-4'>
        {/* Hidden file input */}
        <input
          type='file'
          ref={fileInputRef}
          className='hidden'
          accept='image/*'
          onChange={handleImageChange}
        />

        {/* Profile Image */}
        <div
          className='relative group cursor-pointer'
          onClick={handleImageClick}
        >
          <img
            className='w-32 h-32 rounded-full border-4 border-primary object-cover'
            src={
              previewImage ||
              user?.image ||
              'https://randomuser.me/api/portraits/men/45.jpg'
            }
            alt='Profile'
          />
          <div className='absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity'>
            <Camera className='text-white' size={24} />
          </div>
        </div>

        {/* Name with Edit Button */}
        <h1 className='text-2xl flex items-center gap-2'>
          {user?.name}
          <div
            className='cursor-pointer hover:text-blue-500'
            onClick={() => setIsEditingName(true)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <Edit />
          </div>
        </h1>

        <h1 className='text-xl'>{user?.email}</h1>

        {/* Change Password Button */}
        <button
          onClick={() => setIsEditingPassword(true)}
          className='mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90'
        >
          Change Password
        </button>

        {/* Name Edit Modal */}
        {isEditingName && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
            <div className='bg-white p-5 rounded-md shadow-lg w-96'>
              <h2 className='text-xl mb-4'>Edit Name</h2>
              <input
                className='w-full p-2 border rounded mb-4'
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
              <div className='flex justify-end gap-2'>
                <button
                  className='px-4 py-2 bg-gray-200 rounded'
                  onClick={() => setIsEditingName(false)}
                >
                  Cancel
                </button>
                <button
                  className='px-4 py-2 bg-primary text-white rounded'
                  onClick={handleNameSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Password Change Modal */}
        {isEditingPassword && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
            <div className='bg-white p-5 rounded-md shadow-lg w-96'>
              <h2 className='text-xl mb-4'>Change Password</h2>
              <div className='space-y-4'>
                <input
                  type='password'
                  placeholder='Current Password'
                  className='w-full p-2 border rounded'
                  value={passwordData.currentPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      currentPassword: e.target.value,
                    })
                  }
                />
                <input
                  type='password'
                  placeholder='New Password'
                  className='w-full p-2 border rounded'
                  value={passwordData.newPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      newPassword: e.target.value,
                    })
                  }
                />
                <input
                  type='password'
                  placeholder='Confirm New Password'
                  className='w-full p-2 border rounded'
                  value={passwordData.confirmPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
              <div className='flex justify-end gap-2 mt-4'>
                <button
                  className='px-4 py-2 bg-gray-200 rounded'
                  onClick={() => setIsEditingPassword(false)}
                >
                  Cancel
                </button>
                <button
                  className='px-4 py-2 bg-primary text-white rounded'
                  onClick={handlePasswordUpdate}
                >
                  Update Password
                </button>
              </div>
            </div>
          </div>
        )}
        <button
          className='mt-4 bg-primary text-white p-2 w-full'
          disabled={true}
        >
          {isUpdating ? 'Updating...' : 'Update Profile'}
        </button>
      </div>
    </div>
  )
}

export default UserProfile

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useRegisterMutation } from '@/Redux/featured/auth/authApi'
import { imageUpload } from '@/utils/imageUpload'
import { toast } from 'react-toastify'
import bg from '../assets/bikeBike.png'
import img from '../assets/login-img-2.png'

const Register = () => {
  const navigate = useNavigate()
  const [register] = useRegisterMutation()
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: null as File | null,
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'file' && e.target.files?.[0]) {
      setFormData({ ...formData, image: e.target.files[0] })
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (formData.password !== formData.confirmPassword) {
        toast.error('Passwords do not match!')
        return
      }

      if (!formData.image) {
        toast.error('Please select a profile image!')
        return
      }

      // Upload image first
      const imageUrl = await imageUpload(formData.image)

      // Prepare registration data with image URL
      const registerData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        image: imageUrl,
      }

      const result = await register(registerData).unwrap()

      if (result?.success) {
        toast.success('Registration successful!')
        navigate('/login')
      }
    } catch (error: any) {
      toast.error(error?.data?.error[0].message || 'Registration failed!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='h-screen bg-[#2C293A] flex items-center justify-center'>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className='w-full h-full flex flex-col md:flex-row-reverse bg-cover bg-center overflow-hidden shadow-lg'
      >
        {/* Left Side Image */}
        <div className='flex-1 h-64 md:h-auto hidden md:block'>
          <img
            src={img}
            alt='Bike'
            className='h-full w-full object-cover object-left'
          />
        </div>

        {/* Right Side Register Form */}
        <div className='w-full md:w-5/12 flex flex-col justify-center p-8 bg-[#111] bg-opacity-60 rounded-r-xl  my-auto overflow-y-auto'>
          <h2 className='text-2xl text-nowrap font-bold text-center text-white'>
            Hello ! Register Now
          </h2>

          <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
            {/* Image Upload */}
            <div>
              <label className='block text-white mb-1'>Profile Image:</label>
              <input
                type='file'
                name='image'
                accept='image/*'
                onChange={handleChange}
                className='w-full px-3 py-2 bg-[#e4e4e4] text-black focus:outline-none focus:ring-2 focus:ring-primary'
                required
              />
            </div>

            <div>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full px-3 py-2 mt-2 border bg-[#e4e4e4] text-black focus:outline-none focus:ring-2 focus:ring-primary'
                placeholder='Full Name'
                required
              />
            </div>

            <div className='mt-4'>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full px-3 py-2 mt-2 border bg-[#e4e4e4] text-black focus:outline-none focus:ring-2 focus:ring-primary'
                placeholder='Email Address'
                required
              />
            </div>

            <div className='mt-4 relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                value={formData.password}
                onChange={handleChange}
                className='w-full px-3 py-2 mt-2 border bg-[#e4e4e4] text-black focus:outline-none focus:ring-2 focus:ring-primary'
                placeholder='Password'
                required
              />
              <span
                className='absolute right-4 top-5 text-gray-400 cursor-pointer'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className='mt-4 relative'>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
                className='w-full px-3 py-2 mt-2 border bg-[#e4e4e4] text-black focus:outline-none focus:ring-2 focus:ring-primary'
                placeholder='Confirm Password'
                required
              />
              <span
                className='absolute right-4 top-5 text-gray-400 cursor-pointer'
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button
              type='submit'
              disabled={isLoading}
              className='w-full mt-6 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-[#1f7b64] flex items-center justify-center'
            >
              {isLoading ? 'Creating Account...' : 'SIGN UP →'}
            </button>
          </form>

          <p className='mt-6 text-center text-gray-400'>
            Already have an account?{' '}
            <Link to={'/login'} className='text-red-500 hover:underline'>
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register

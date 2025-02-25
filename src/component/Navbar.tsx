import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, LogIn, ShoppingCart, } from 'lucide-react'
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

export const user = {
  name: 'Mohammed Sanaullah Roton',
  email: 'roton@example.com',
  image: 'https://i.pravatar.cc/40',
  isLoggedIn: true, // Change to false to test logout state
  role: 'admin'
  // role: 'user'
}
import logo from '../assets/Logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const toggleDrawer = () => {
    setIsOpenDrawer((prevState) => !prevState)
  }

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/products', name: 'Products' },
    { path: '/about', name: 'About' },
    { path: '/news', name: 'News' },
    { path: '/contact', name: 'Contact' },
  ]

  return (
    <nav className=''>
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Logo */}
        <NavLink to='/' className='flex items-center'>
          <img className='w-auto h-8' src={logo} alt='BikeXpress' />
        </NavLink>

        {/* Nav Links (Centered) */}
        <div className='hidden lg:flex gap-6 mx-auto'>
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium px-3 py-2 rounded-md transition duration-300 ${isActive
                  ? 'text-primary dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Login/Profile Section */}
        <div className='relative '>
          {user.isLoggedIn ? (
            <div className=" flex gap-2 items-center">


              {/* cart  */}
              <button onClick={toggleDrawer} className=' hover:bg-primary bg-opacity-30 p-1 rounded-full hover:text-white '> <ShoppingCart size={30} strokeWidth={0.95} /> </button>

              {/* Drawer */}

              <Drawer
                open={isOpenDrawer}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
              >
                <div>Hello World</div>
              </Drawer>

              <div
                className='relative group cursor-pointer '
                onClick={() => setShowProfile(!showProfile)}
              >
                <img
                  className='w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500'
                  src={user.image}
                  alt='Profile'
                />
                <span className='absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition'>
                  {user.name}
                </span>

              </div>

            </div>
          ) : (
            <NavLink
              to='/login'
              className='flex items-center gap-2  dark:text-gray-200 px-2 py-1 bg-primary text-white rounded-sm hover:bg-blue-700'
            >
              <LogIn size={20} /> Login
            </NavLink>
          )}

          {/* Profile Modal */}
          {showProfile && user.isLoggedIn && (
            <div className='absolute right-0 mt-3 w-60 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-3 z-40  top-10'>
              <div className='flex items-center gap-3 px-4 py-2 border-b dark:border-gray-700'>
                <img
                  className='w-12 h-12 rounded-full'
                  src={user.image}
                  alt='User'
                />
                <div>
                  <p className='text-sm font-semibold text-gray-900 dark:text-white'>
                    {user.name}
                  </p>
                  <p className='text-xs text-gray-500 dark:text-gray-300'>
                    {user.email}
                  </p>
                </div>
              </div>
              <ul className='py-2 '>
                {/* <li className='px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer'>
                  Profile
                </li>
                <li className='px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer'>
                  Settings
                </li> */}
                <Link to={user?.role === 'admin' ? '/dashBoard/overView' : '/dashBoard/myOrder'}>
                  <li className='px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer'>
                    Dashboard
                  </li>
                </Link>
                <li className='px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer'>
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='lg:hidden text-gray-500 dark:text-gray-200 focus:outline-none'
          aria-label='toggle menu'
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='lg:hidden bg-gray-200 text-gray-500 dark:bg-gray-800 shadow-lg py-4'>
          <ul className='flex flex-col items-center gap-4'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className='text-gray-700 dark:text-gray-200 hover:text-blue-600 px-4 py-2 block'
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar

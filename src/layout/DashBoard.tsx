import logo from '../assets/logo-white.png'
import DashNav from '@/component/DashNav'
import { TableOfContents } from 'lucide-react'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

const DashBoard = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div>
      <div className='grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 gap-2 min-h-screen'>
        <div className='lg:border-r-4 md:border-r-4 border-primary lg:col-span-2 md:col-span-3 lg:flex  md:flex hidden flex-col justify-between '>
          <DashNav></DashNav>
        </div>
        <div className='lg:hidden md:hidden flex justify-between items-center bg-primary p-2 px-4 text-white '>
          <Link to='/' className='flex items-center justify-center'>
            <img className='w-auto h-8' src={logo} alt='BikeXpress' />
          </Link>
          <button onClick={toggleDrawer}>
            {' '}
            <TableOfContents />{' '}
          </button>
        </div>

        {/* Main Content */}
        <div className='lg:col-span-10 md:col-span-9 '>
          <Outlet></Outlet>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='bla bla bla'
      >
        <DashNav></DashNav>
      </Drawer>
    </div>
  )
}

export default DashBoard

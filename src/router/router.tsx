import App from '@/App'
import Layout from '@/layout/Layout'
import AboutPage from '@/pages/about'
import Login from '@/pages/Login'
import { News } from '@/pages/news'
import Register from '@/pages/Register'
import { createBrowserRouter } from 'react-router-dom'
import BikeDetails from "../pages/BikeDetails"
import DashBoard from '@/layout/DashBoard'
import OverView from '@/pages/DashBoard/OverView'
import MyOrder from '@/pages/DashBoard/MyOrder'
import ManageUser from '@/pages/DashBoard/ManageUser'
import ManageProduct from '@/pages/DashBoard/ManageProduct'
import ManageOrders from '@/pages/DashBoard/ManageOrder'
import ManagePayments from '@/pages/DashBoard/ManagePayments'
import SupportHelp from '@/pages/DashBoard/SupportHelp'
import UserProfile from '@/pages/DashBoard/UserProfile'
import AddProduct from '@/pages/DashBoard/AddProduct'
import UpdateProduct from '@/pages/DashBoard/UpdateProduct'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      {
        path: '/products',
        element: <Bikes></Bikes>,
      },
      {
        path: '/product/:id',
        element: <BikeDetails></BikeDetails>,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
     {
      path: 'news',
      element: <News></News>
     },
      {
        path: 'contact',
        element: <h2>Contact</h2>,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
])

export default router

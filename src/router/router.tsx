import App from '@/App'
import Layout from '@/layout/Layout'
import AboutPage from '@/pages/about'
import Bikes from '@/pages/Bikes'
import Login from '@/pages/Login'
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
        path: '/contact',
        element: <h2>Contact</h2>,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/dashBoard',
    element: <DashBoard />,
    children: [
      
      {
        path: '/dashBoard/overView',
        element: <OverView></OverView>,
      },
      {
        path: '/dashBoard/userManagement',
        element: <ManageUser></ManageUser>,
      },
      {
        path: '/dashBoard/product-management',
        element: <ManageProduct></ManageProduct>,
      },
      {
        path: '/dashBoard/order-management',
        element: <ManageOrders></ManageOrders>,
      },
      {
        path: '/dashBoard/payment-management',
        element: <ManagePayments></ManagePayments>,
      },


      // user 
      {
        path: '/dashBoard/myOrder',
        element: <MyOrder></MyOrder>,
      },
      {
        path: '/dashBoard/support',
        element: <SupportHelp></SupportHelp>,
      },
    ]
  }

])

export default router

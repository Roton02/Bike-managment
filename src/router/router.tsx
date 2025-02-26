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
import UserProfile from '@/pages/DashBoard/UserProfile'
import AddProduct from '@/pages/DashBoard/AddProduct'
import UpdateProduct from '@/pages/DashBoard/UpdateProduct'
import { News } from '@/pages/News'
import Contract from '@/pages/Contract'

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
          element: <Contract></Contract>
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
      {
        path: '/dashBoard/addProduct',
        element: <AddProduct></AddProduct>,
      },
      {
        path: '/dashBoard/updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
      },


      // user 
      {
        path: '/dashBoard/myProfile',
        element: <UserProfile></UserProfile>,
      },
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
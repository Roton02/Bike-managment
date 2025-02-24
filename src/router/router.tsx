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
        path: '/dashBoard/myOrder',
        element: <MyOrder></MyOrder>,
      },
    ]
  }

])

export default router

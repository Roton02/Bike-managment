import App from '@/App'
import Layout from '@/layout/Layout'
import AboutPage from '@/pages/about'
import Bikes from '@/pages/Bikes'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import { createBrowserRouter } from 'react-router-dom'
import BikeDetails from "../pages/BikeDetails"

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

])

export default router

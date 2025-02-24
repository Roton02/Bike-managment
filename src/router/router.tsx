import App from '@/App'
import Layout from '@/layout/Layout'
import AboutPage from '@/pages/about'
import Contract from '@/pages/contract'
import Login from '@/pages/Login'
import { News } from '@/pages/news'
import Register from '@/pages/Register'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      {
        path: 'bikes',
        element: <h2>Products</h2>,
      },
      {
        path: 'about',
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

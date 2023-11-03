import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <h1>home page</h1>,
      },
      {
        path: '/about',
        element: <h1>about page</h1>,
      },
      {
        path: '/contact',
        element: <h1>contact page</h1>,
      },
      {
        path: '/kitchen',
        element: <h1>kitchen page</h1>,
      },
      {
        path: '/bedroom',
        element: <h1>bed page</h1>,
      },
      {
        path: '/livingroom',
        element: <h1>living page</h1>,
      },
    ],
  },
])

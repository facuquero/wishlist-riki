import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home'
import ValidatingFiumbiUser from './routes/ValidatingFiumbiUser'
import './main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FiumbiList, { getFiumbiList } from './routes/FiumbiList'

import { AuthProvider } from './context/AuntProvider'
import Layout from './layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/validatingFiumbiUser',
    element: <ValidatingFiumbiUser />,
  },
  {
    path: '/:fiumbiListUsername',
    element: <FiumbiList />,
    loader: getFiumbiList,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </AuthProvider>
  </React.StrictMode>
)

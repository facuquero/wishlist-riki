import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home'
import ValidatingFiumbiUser from './routes/ValidatingFiumbiUser'
import './main.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/validatingFiumbiUser',
    element: <ValidatingFiumbiUser />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

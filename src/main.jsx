import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home'
import ValidatingFiumbiUser from './routes/ValidatingFiumbiUser'
import './main.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from 'react-router-dom'
import FiumbiList, { getFiumbiList } from './routes/FiumbiList'

import { AuthProvider } from './context/AuntProvider'
import Layout from './layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/:fiumbiListUsername"
          element={<FiumbiList />}
          loader={getFiumbiList}
        />
      </Route>
      <Route path="/validatingFiumbiUser" element={<ValidatingFiumbiUser />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)

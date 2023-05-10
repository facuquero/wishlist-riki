import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { AuthProvider } from './context/AuntProvider'
import { theme } from './theme'
import ProtectedRoute from './layout/ProtectedRoute'
import Layout from './layout'
import Home from './routes/Home'
import ValidatingFiumbiUser from './routes/ValidatingFiumbiUser'
import FiumbiList, { getFiumbiList } from './routes/FiumbiList'
import UserConfig from './routes/UserConfig'

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
        <Route path="/" element={<ProtectedRoute />}>
          <Route
            path="/:fiumbiListUsername/userConfig"
            element={<UserConfig />}
          />
        </Route>
      </Route>
      <Route path="/validatingFiumbiUser" element={<ValidatingFiumbiUser />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
)

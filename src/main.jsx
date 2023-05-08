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
import { ThemeProvider } from '@mui/material/styles'
import { AuthProvider } from './context/AuntProvider'
import Layout from './layout'
import { theme } from './theme'

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
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
)

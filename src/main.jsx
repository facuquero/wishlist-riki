import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
/* import {
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
import { getFiumbiList } from './routes/FiumbiList' */
//import ProtectedRoute from './layout/ProtectedRoute'
//import Layout from './layout'
//import Home from './routes/Home'
//import ValidatingFiumbiUser from './routes/ValidatingFiumbiUser'
//import FiumbiList from './routes/FiumbiList'
//import UserConfig from './routes/UserConfig'

import App from './app'

/* const Layout = lazy(() => import('./layout'))
const Home = lazy(() => import('./routes/Home'))
const FiumbiList = lazy(() => import('./routes/FiumbiList'))
const ProtectedRoute = lazy(() => import('./layout/ProtectedRoute'))
const UserConfig = lazy(() => import('./routes/UserConfig'))

const ValidatingFiumbiUser = lazy(() => import('./routes/ValidatingFiumbiUser')) */
//const App = lazy(() => import('./app'))

/* const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route
        path="/"
        element={
          <Suspense fallback={'Cargando'}>
            <Layout />
          </Suspense>
        }
      >
        <Route
          path="/"
          element={
            <Suspense fallback={'Cargando'}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/:fiumbiListUsername"
          element={
            <Suspense fallback={'Cargando'}>
              <FiumbiList />
            </Suspense>
          }
          loader={getFiumbiList}
        />
        <Route
          path="/"
          element={
            <Suspense fallback={'Cargando'}>
              <ProtectedRoute />
            </Suspense>
          }
        >
          <Route
            path="/:fiumbiListUsername/userConfig"
            element={
              <Suspense fallback={'Cargando'}>
                <UserConfig />
              </Suspense>
            }
          />
        </Route>
      </Route>
      <Route
        path="/validatingFiumbiUser"
        element={
          <Suspense fallback={'Cargando'}>
            <ValidatingFiumbiUser />
          </Suspense>
        }
      />
      <Route path="/*" element={<Navigate to="/" />} />
    </Route>
  )
) */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

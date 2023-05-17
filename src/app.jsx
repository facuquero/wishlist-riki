import React, { lazy, Suspense } from 'react'
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
import { getFiumbiList } from './routes/FiumbiList'
import ProtectedRoute from './layout/ProtectedRoute'
import Layout from './layout'
import Home from './routes/Home'
import ValidatingFiumbiUser from './routes/ValidatingFiumbiUser'
import FiumbiList from './routes/FiumbiList'
import UserConfig from './routes/UserConfig'
import NewShippingAddress from './routes/UserConfig/NewShippingAddress'
import PasswordChange from './routes/UserConfig/PasswordChange'

//const Layout = lazy(() => import('./layout'))
/* const Home = lazy(() => import('./routes/Home'))
const FiumbiList = lazy(() => import('./routes/FiumbiList'))
const ProtectedRoute = lazy(() => import('./layout/ProtectedRoute'))
const UserConfig = lazy(() => import('./routes/UserConfig'))

const ValidatingFiumbiUser = lazy(() => import('./routes/ValidatingFiumbiUser')) */

/* const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route path="/" element={<Layout />}>
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
        <Route
          path="/:fiumbiListUsername"
          element={<ProtectedRoute />}
          loader={getFiumbiList}
        >
          <Route
            path="/:fiumbiListUsername/userConfig"
            element={<UserConfig />}
          />
          <Route
            path="/:fiumbiListUsername/userConfig/editShippingAddress"
            element={<NewShippingAddress />}
          />
          <Route
            path="/:fiumbiListUsername/userConfig/passwordChange"
            element={<PasswordChange />}
          />
        </Route>
      </Route>
      <Route path="/validatingFiumbiUser" element={<ValidatingFiumbiUser />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Route>
  )
)

const App = () => (
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </AuthProvider>
)

export default App

import { Navigate, Outlet, useLoaderData } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
const ProtectedRoute = () => {
  const loaderData = useLoaderData()
  const { auth } = useAuth()
  const isSameUserAsFiumbiUser =
    auth?.username == loaderData?.params?.fiumbiListUsername

  if (!isSameUserAsFiumbiUser) {
    return <Navigate to="/" />
  }

  return <Outlet />
}

export default ProtectedRoute

import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
const ProtectedRoute = () => {
  const { auth } = useAuth()

  if (!auth.token) {
    return <Navigate to="/" />
  }

  return <Outlet />
}

export default ProtectedRoute

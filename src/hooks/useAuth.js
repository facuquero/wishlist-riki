import { useContext } from 'react'
import AuthContext from '../context/AuntProvider'

const useAuth = () => useContext(AuthContext)

export default useAuth

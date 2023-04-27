import { createContext, useEffect, useState } from 'react'
import {
  getUserToken,
  getUsername,
  localStorageLogOut,
  setNewFiumbiUserToCreate,
} from '../utils/localStorageManagment'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const getUserLoged = () => {
    const username = getUsername()
    const token = getUserToken()
    if (username && token) return { username, token }
    return {}
  }

  const [auth, setAuth] = useState(getUserLoged())

  const logOut = () => {
    localStorageLogOut()
    setAuth({})
  }

  const logIn = ({ newUsername, newUserToken, userdata = '' }) => {
    localStorageLogOut()
    setNewFiumbiUserToCreate({ username: newUsername, token: newUserToken })
    setAuth({ username: newUsername, token: newUserToken, userdata })
  }

  const setMLToken = ({ newTokenML }) => {
    setAuth((pre) => {
      return { ...pre, tokenML: newTokenML }
    })
  }

  useEffect(() => {
    console.log('auth', auth)
  }, [auth])

  return (
    <AuthContext.Provider value={{ auth, logIn, logOut, setMLToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext

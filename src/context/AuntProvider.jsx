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
    const userToken = getUserToken()
    if (username && userToken) return { username, userToken }
    return {}
  }

  const [auth, setAuth] = useState(getUserLoged())

  const logOut = () => {
    localStorageLogOut()
    setAuth({})
  }

  const logIn = ({ newUsername, newUserToken, userdata = '' }) => {
    localStorageLogOut()
    setNewFiumbiUserToCreate({ username: newUsername, userToken: newUserToken })
    setAuth({ username: newUsername, userToken: newUserToken, userdata })
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

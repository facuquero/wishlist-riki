import { createContext, useState } from 'react'
import {
  getTokenML,
  getUserToken,
  getUsername,
  localStorageLogOut,
  setNewFiumbiUserToCreate,
  setTokenML,
} from '../utils/localStorageManagment'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const getUserLoged = () => {
    const username = getUsername()
    const token = getUserToken()
    const tokenML = getTokenML()
    if (username && token) return { username, token, tokenML }
    localStorageLogOut()
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
    setTokenML({ tokenML: newTokenML })
    setAuth((pre) => {
      return { ...pre, tokenML: newTokenML }
    })
  }

  console.log("auth",auth)
  return (
    <AuthContext.Provider value={{ auth, logIn, logOut, setMLToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext

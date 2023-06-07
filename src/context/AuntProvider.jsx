import { createContext, useState } from 'react'
import {
  getTokenML,
  getUserToken,
  getUsername,
  localStorageLogOut,
  setNewFiumbiUserToCreate,
  setShadowLogInFiumbiUser,
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
  const logIn = ({
    newUsername,
    newUserToken,
    userdata = '',
    //dios perdoname lo q voy a hacer
    bypassRedirectForced,
  }) => {
    localStorageLogOut()
    setNewFiumbiUserToCreate({ username: newUsername, token: newUserToken })
    setAuth({ username: newUsername, token: newUserToken, userdata })
    bypassRedirectForced(`/${newUsername}`) //mas duro q la realidad
  }

  const shadowLogIn = ({ newUsername, newUserToken, userdata = '' }) => {
    localStorageLogOut()
    setShadowLogInFiumbiUser({ username: newUsername, token: newUserToken })
  }

  const setMLToken = ({ newTokenML }) => {
    setTokenML({ tokenML: newTokenML })
    setAuth((pre) => {
      return { ...pre, tokenML: newTokenML }
    })
  }

  return (
    <AuthContext.Provider
      value={{ auth, logIn, shadowLogIn, logOut, setMLToken }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext

export const setNewFiumbiUserToCreate = ({ username, token, active }) => {
  localStorageLogOut()
  window.localStorage.setItem('username', username)
  window.localStorage.setItem('token', token)
  window.localStorage.setItem('active', active)
  return { username, token, active }
}

export const setTokenML = ({ tokenML }) =>
  window.localStorage.setItem('tokenML', tokenML)

export const getUserToken = () => window.localStorage.getItem('token') || null
export const getUsername = () => window.localStorage.getItem('username') || null
export const getTokenML = () => window.localStorage.getItem('tokenML') || null
export const getActive = () => window.localStorage.getItem('active') || null

export const localStorageLogOut = () => {
  window.localStorage.removeItem('username')
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('tokenML')
  window.localStorage.removeItem('active')
}

export const setShadowLogInFiumbiUser = ({ username, token }) => {
  localStorageLogOut()
  window.localStorage.setItem('username', username)
  window.localStorage.setItem('token', token)
}

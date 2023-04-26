export const setNewFiumbiUserToCreate = ({ username, token }) => {
  localStorageLogOut()
  window.localStorage.setItem('username', username)
  window.localStorage.setItem('token', token)
  return { username, token }
}

export const setTokenML = ({ tokenML }) =>
  window.localStorage.setItem('tokenML', tokenML)

export const getUserToken = () => window.localStorage.getItem('token') || null
export const getUsername = () => window.localStorage.getItem('username') || null
export const getTokenML = () => window.localStorage.getItem('tokenML') || null

export const localStorageLogOut = () => {
  window.localStorage.removeItem('username')
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('tokenML')
}

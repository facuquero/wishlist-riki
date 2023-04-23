export const setNewFiumbiUserToCreate = ({ username, token }) => {
  clearUserLogin()
  window.localStorage.setItem('username', username)
  window.localStorage.setItem('token', token)
  return { username, token }
}

export const setTokenML = ({ tokenML }) =>
  window.localStorage.setItem('tokenML', tokenML)

export const getUserToken = () => window.localStorage.getItem('token')
export const getUsername = () => window.localStorage.getItem('username')
export const getTokenML = () => window.localStorage.getItem('tokenML')

export const clearUserLogin = () => {
  window.localStorage.removeItem('username')
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('tokenML')
}

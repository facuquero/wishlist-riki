export const setNewFiumbiUserToCreate = ({ username, token }) => {
  window.localStorage.removeItem('username')
  window.localStorage.removeItem('token')
  window.localStorage.setItem('username', username)
  window.localStorage.setItem('token', token)
  return { username, token }
}

export const getUserToken = () => window.localStorage.getItem('token')
export const getUsername = () => window.localStorage.getItem('username')

import axios from 'axios'
import { getUsername, getUserToken } from '../src/utils/localStorageManagment'

const axiosInstance = axios.create({ baseURL: 'http://localhost:3000' })

axiosInstance.interceptors.request.use((defaultConfig) => {
  const isUserToken = getUserToken()
  const isUsername = getUsername()
  if (isUserToken) defaultConfig.headers.authorization = `${isUserToken}`
  if (isUsername) defaultConfig.headers.username = `${isUsername}`
  
  return defaultConfig
})
export { axiosInstance }

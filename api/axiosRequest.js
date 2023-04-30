import axios from 'axios'
import {
  getTokenML,
  getUsername,
  getUserToken,
} from '../src/utils/localStorageManagment'

const axiosInstance = axios.create({ baseURL: 'http://localhost:3000' })

axiosInstance.interceptors.request.use((defaultConfig) => {
  const isUserToken = getUserToken()
  const isUsername = getUsername()
  const tokenML = getTokenML()
  if (isUserToken) defaultConfig.headers.authorization = `${isUserToken}`
  if (isUsername) defaultConfig.headers.username = `${isUsername}`
  if (tokenML) defaultConfig.headers.meli = `${tokenML}`

  return defaultConfig
})
export { axiosInstance }

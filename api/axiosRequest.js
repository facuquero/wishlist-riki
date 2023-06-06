import axios from 'axios'
import {
  getTokenML,
  getUsername,
  getUserToken,
} from '../src/utils/localStorageManagment'
import { baseUrlBackAPI } from '../src/utils/globalConst'

const axiosInstance = axios.create({ baseURL: baseUrlBackAPI })

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

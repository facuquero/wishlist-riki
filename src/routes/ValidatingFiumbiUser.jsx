import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { exchangeCodeForToken } from '../../api/useUsersAPI'
import { setTokenML } from '../utils/localStorageManagment'

const ValidatingFiumbiUser = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)

  const { execute, data } = exchangeCodeForToken()

  useEffect(() => {
    if (!data) {
      const paramsObject = {}
      params.forEach((value, key) => {
        paramsObject[key] = value
      })
      const data = {
        code: paramsObject.code,
      }
      execute({
        data,
      })
    }
  }, [])

  useEffect(() => {
    if (data?.status == 201) {
      const tokenML = data.data.accessToken
      setTokenML({ tokenML: tokenML })
    }
  }, [data])

  return <div>validando informacion</div>
}

export default ValidatingFiumbiUser

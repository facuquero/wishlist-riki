import React, { useEffect } from 'react'
import { Navigate, redirect, useLocation, useNavigate } from 'react-router-dom'
import { exchangeCodeForToken } from '../../api/useUsersAPI'
import useAuth from '../hooks/useAuth'

const ValidatingFiumbiUser = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const { auth, setMLToken } = useAuth()
  const { execute, data } = exchangeCodeForToken()
  const navigate = useNavigate()

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
      const newTokenML = data.data.accessToken
      setMLToken({ newTokenML })
      navigate(`/${auth.username}`)
    }
  }, [data])

  if (!auth.username) {
    return <Navigate to="/" />
  }

  return <div>validando informacion</div>
}

export default ValidatingFiumbiUser

import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { exchangeCodeForToken } from '../../../api/useUsersAPI'
import useAuth from '../../hooks/useAuth'
import Typography from '../commons/Typography'

const ValidatingML = ({ nextStep }) => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const { auth, setMLToken } = useAuth()
  const { execute, data, error } = exchangeCodeForToken()
  const navigate = useNavigate()
  let initialized = false

  useEffect(() => {
    if (!initialized) {
      if (!data) {
        const paramsObject = {}
        params.forEach((value, key) => {
          paramsObject[key] = value
        })
        const data = {
          code: paramsObject.code,
        }

        initialized = true
        execute({
          data,
        })
      }
    }
  }, [])

  useEffect(() => {
    if (data?.status == 201) {
      const newTokenML = data.data.accessToken
      setMLToken({ newTokenML })
      nextStep()
    }
    if (error) {
      navigate(`/${auth.username}`)
    }
  }, [data, error])

  return <Typography>Validando usuario</Typography>
}

export default ValidatingML

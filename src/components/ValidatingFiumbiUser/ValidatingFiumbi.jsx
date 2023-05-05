import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { SincFavMLProduct } from '../../../api/fiumbiProducts'
import Typography from '../commons/Typography'

const ValidatingFiumbi = () => {
  const { auth } = useAuth()
  const { execute, data, error } = SincFavMLProduct()
  const navigate = useNavigate()
  let initialized = false

  useEffect(() => {
    if (!initialized) {
      initialized = true
      if (!data) {
        execute({
          data: {
            username: auth.username,
          },
        })
      }
    }
  }, [])

  useEffect(() => {
    if (data || error) {
      navigate(`/${auth.username}`)
    }
  }, [data, error])

  return <Typography>Validando Fiumbi</Typography>
}

export default ValidatingFiumbi

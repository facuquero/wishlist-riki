import React, { useEffect, useState } from 'react'
import { Box, Button, CircularProgress, TextField } from '@mui/material'
import { useValidateCode } from '../../../api/useUsersAPI'
import {
  newFiumbiFormClientid,
  newFiumbiFormRedirect_uri,
  newFiumbiFormScope,
} from '../../utils/globalConst'
import Typography from '../commons/Typography'

const ValidateEmail = ({ wishlistName }) => {
  const [emailInput, setEmailInput] = useState('')
  const { execute, data, isLoading, isError, error } = useValidateCode()

  const onChangeEmailInputtName = (e) => {
    setEmailInput(e.target.value)
  }

  const handleClickValidateEmail = () => {
    execute({
      data: {
        username: wishlistName,
        code: emailInput,
      },
    })
  }

  console.log('error', error)
  useEffect(() => {
    if (data?.status === 200) {
      const to = `https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=${newFiumbiFormClientid}&redirect_uri=${newFiumbiFormRedirect_uri}&scope=${newFiumbiFormScope}`
      window.location.href = to
    }
  }, [data, isLoading, isError, error])

  return (
    <Box>
      {!data && (
        <Box sx={{ width: '100%' }}>
          <Typography
            sx={{
              color: '#4f5bd5',
              textAlign: 'center',
              fontWeight: 700,
              fontSize: { xs: '1.25rem', md: '1.75rem' },
              mb: 2,
            }}
          >
            Para finalizar ingresa el codigo que te enviamos al correo
          </Typography>
          <TextField
            placeholder="Aqui"
            fullWidth
            onChange={onChangeEmailInputtName}
            disabled={isLoading}
            sx={{
              fieldset: {
                borderWidth: 2,
                borderRadius: 10,
              },
            }}
          />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ paddingTop: 2 }}
          >
            {!isLoading && (
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: 10 }}
                size="large"
                onClick={handleClickValidateEmail}
              >
                <Typography>Validar</Typography>{' '}
              </Button>
            )}

            {isLoading && <CircularProgress sx={{ color: 'white' }} />}
          </Box>
        </Box>
      )}
      {data && (
        <Typography
          sx={{
            color: '#4f5bd5',
            textAlign: 'center',
            fontWeight: 700,
            fontSize: { xs: '1.25rem', md: '1.75rem' },
            mb: 2,
          }}
        >
          Redirigiendo
        </Typography>
      )}
      {isError && (
        <Box mt={2} sx={{ textAlign: 'center' }}>
          <Typography>A ocurrido un error:</Typography>
          <Typography>{error?.response?.data?.message}</Typography>
        </Box>
      )}
    </Box>
  )
}

export default ValidateEmail

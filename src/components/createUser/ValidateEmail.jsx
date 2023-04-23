import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from '@mui/material'
import { useValidateCode } from '../../../api/useUsersAPI'
import {
  newFiumbiFormClientid,
  newFiumbiFormRedirect_uri,
  newFiumbiFormScope,
} from '../../utils/globalConst'

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
    // ahora poner modal mandar a mercado libre, vamos usar el registro de mercado pago para traer la listas de favoritos y armar de
  }

  useEffect(() => {
    if (data?.status === 200) {
      const to = `https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=${newFiumbiFormClientid}&redirect_uri=${newFiumbiFormRedirect_uri}&scope=${newFiumbiFormScope}`

      window.location.href = to

      return
    }
  }, [data, isLoading, isError, error])

  return (
    <Box>
      <Typography
        sx={{
          color: '#4f5bd5',
          fontFamily: 'Poppins',
          textAlign: 'center',
          fontWeight: 700,
          fontSize: { xs: '1.25rem', md: '1.75rem' },
          mb: 2,
        }}
      >
        Necesitamos validat tu email
      </Typography>
      <Box sx={{ width: '100%' }}>
        <TextField
          placeholder="Ingresa aqui el codigo"
          fullWidth
          onChange={onChangeEmailInputtName}
          sx={{
            fieldset: {
              borderWidth: 2,
              fontFamily: 'Poppins',
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
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: 10 }}
            size="large"
            onClick={handleClickValidateEmail}
          >
            {!isLoading && <Typography>Validar</Typography>}

            {isLoading && <CircularProgress sx={{ color: 'white' }} />}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ValidateEmail

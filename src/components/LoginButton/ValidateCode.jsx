import React, { useEffect, useRef, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '../commons/Typography'
import { validateCodeForgot } from '../../../api/useUsersAPI'
import { SpecialCommonButton } from '../commons/SpecialButtons'
import TextField from '../commons/TextField'
import { Box, Grid } from '@mui/material'
import useAuth from '../../hooks/useAuth'

const ValidateCode = ({ user, email, onClickValidate }) => {
  const { execute, data, isLoading, isError, error } = validateCodeForgot()
  const { shadowLogIn } = useAuth()
  const handleClickValidateEmail = () => {
    execute({
      data: {
        username: user,
        code: emailCode.join(''),
      },
    })
  }

  const [emailCode, setEmailCode] = useState(['', '', '', '', '', ''])
  const inputRefs = useRef([])

  const handleInputChange = (event, index) => {
    const value = event.target.value
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newPin = [...emailCode]
      newPin[index] = value
      if (!value && newPin[index + 1] !== '') {
        setEmailCode(shiftPinValues(newPin, index))
      } else {
        setEmailCode(newPin)
      }
      if (value && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus()
      }
      if (!value && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus()
      }
    }
  }

  function shiftPinValues(emailCode, index) {
    const newPin = [...emailCode]
    for (let i = index; i < newPin.length - 1; i++) {
      if (newPin[i + 1] !== '') {
        newPin[i] = newPin[i + 1]
        newPin[i + 1] = ''
      } else {
        break
      }
    }
    return newPin
  }

  const handlePaste = (event) => {
    event.preventDefault()
    const pasteData = event.clipboardData.getData('text/plain')
    const digits = pasteData.match(/\d/g) || []
    const newPin = [...emailCode]
    digits.forEach((digit, i) => {
      if (newPin[i] === '') {
        newPin[i] = digit
        inputRefs.current[i].value = digit
        if (i === digits.length - 1) {
          inputRefs.current[i].focus()
        }
      }
    })
    setEmailCode(newPin)
  }
  useEffect(() => {
    if (data?.status === 200) {
      shadowLogIn({ newUsername: user, newUserToken: data.data.data.token })
      onClickValidate({ newToken: data.data.data.token })
    }
  }, [isLoading, data])

  return (
    <Box>
      {!data && (
        <Box sx={{ width: '100%' }}>
          <Typography
            sx={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 700,
              mb: 2,
            }}
          >
            Pega aquí el código que te enviamos para poder modificar la
            contraseña
          </Typography>
          <Grid container justifyContent="center">
            {emailCode.map((value, index) => (
              <Grid item mx={1} key={`textField-validate-code-${index}`}>
                <TextField
                  key={index}
                  type="text"
                  inputMode="numeric"
                  variant="outlined"
                  margin="dense"
                  size="small"
                  value={value}
                  inputRef={(el) => (inputRefs.current[index] = el)}
                  onChange={(event) => handleInputChange(event, index)}
                  onPaste={handlePaste}
                  style={{ width: '2.5rem' }}
                />
              </Grid>
            ))}
          </Grid>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ paddingTop: 2 }}
          >
            {!isLoading && (
              <SpecialCommonButton
                variant="contained"
                color="primary"
                sx={{ borderRadius: 10 }}
                size="large"
                onClick={handleClickValidateEmail}
              >
                <Typography>Validar</Typography>
              </SpecialCommonButton>
            )}

            {isLoading && <CircularProgress sx={{ color: 'white' }} />}
          </Box>
        </Box>
      )}
      {data && (
        <Typography
          sx={{
            color: 'white',
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
        <Box mt={2} sx={{ textAlign: 'center', color: 'white' }}>
          <Typography>Ha ocurrido un error:</Typography>
          <Typography>{error?.response?.data?.message}</Typography>
        </Box>
      )}
    </Box>
  )
}

export default ValidateCode

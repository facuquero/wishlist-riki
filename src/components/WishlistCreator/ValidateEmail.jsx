import React, { useEffect, useRef, useState } from 'react'
import { Box, CircularProgress, Grid, TextField } from '@mui/material'
import { useValidateCode } from '../../../api/useUsersAPI'

import Typography from '../commons/Typography'
import { SpecialCommonButton } from '../commons/SpecialButtons'
import RedirectML from './RedirectML'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const ValidateEmail = ({ wishlistName }) => {
  const { execute, data, isLoading, isError, error } = useValidateCode()
  const { logIn } = useAuth()
  const navigate = useNavigate()
  const handleClickValidateEmail = () => {
    execute({
      data: {
        username: wishlistName,
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
    if (data?.status === 201) {
      logIn({
        newUsername: wishlistName,
        newUserToken: data.data.token,
        active: true,
        bypassRedirectForced: navigate,
      })
    }
  }, [data, isLoading])

  return (
    <Box>
      <Box sx={{ width: '100%' }}>
        <Typography
          sx={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 700,
            fontSize: { xs: '1.25rem', md: '1.75rem' },
            mb: 2,
            textShadow: '3px 5px 8px rgba(0, 0, 0, 0.45)',
          }}
        >
          Pega aquí el código que te enviamos para verificar tu cuenta
        </Typography>
        <Grid container justifyContent="center">
          {emailCode.map((value, index) => (
            <Grid
              item
              mx={{ xs: 0.5, sm: 1 }}
              key={`texfield-item-validateEmail-${index}`}
            >
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
                sx={{
                  width: '2.5rem',
                  height: '2.5rem',
                }}
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
              size="large"
              disabled={!!data}
              onClick={handleClickValidateEmail}
            >
              <Typography>Validar</Typography>
            </SpecialCommonButton>
          )}
          {isLoading && <CircularProgress sx={{ color: 'white' }} />}
        </Box>
      </Box>

      {data?.status === 201 && <RedirectML />}
      {isError && (
        <Box mt={2} sx={{ textAlign: 'center' }}>
          <Typography color="customText.textWhiteLight">
            A ocurrido un error:
          </Typography>
          <Typography color="customText.textWhiteLight">
            {error?.response?.data?.message}
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default ValidateEmail

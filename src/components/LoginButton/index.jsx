import { Box } from '@mui/material'
import React, { useState } from 'react'
import LoginModal from './LoginModal'
import { SpecialLoginButton } from '../commons/SpecialButtons'

const LoginButton = ({}) => {
  const [showModalLogin, setShowModalML] = useState(false)

  const handleClickOpen = () => {
    setShowModalML(true)
  }

  const handleClose = () => {
    setShowModalML(false)
  }

  return (
    <Box>
      <SpecialLoginButton onClick={handleClickOpen}>
        Ingresar
      </SpecialLoginButton>
      {showModalLogin && (
        <LoginModal showModalLogin={showModalLogin} handleClose={handleClose} />
      )}
    </Box>
  )
}

export default LoginButton

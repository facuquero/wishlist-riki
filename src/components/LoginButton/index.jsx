import { Box } from '@mui/material'
import React, { useState } from 'react'
import LoginModal from './LoginModal'
import useAuth from '../../hooks/useAuth'
import { SpecialLoginButton } from '../commons/SpecialButtons'

const LoginButton = ({}) => {
  const { auth, logOut } = useAuth()

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
        Iniciar sesion
      </SpecialLoginButton>
      {showModalLogin && (
        <LoginModal showModalLogin={showModalLogin} handleClose={handleClose} />
      )}
    </Box>
  )
}

export default LoginButton

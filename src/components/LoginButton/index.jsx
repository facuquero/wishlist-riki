import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import LoginModal from './LoginModal'
import useAuth from '../../hooks/useAuth'
import Typography from '../commons/Typography'

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
      <Button onClick={handleClickOpen}>Iniciar sesion</Button>
      {showModalLogin && (
        <LoginModal showModalLogin={showModalLogin} handleClose={handleClose} />
      )}
    </Box>
  )
}

export default LoginButton

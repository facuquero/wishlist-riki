import React, { useState } from 'react'
import { Box, Button, Grid, useTheme } from '@mui/material'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { SlideTransition } from '../SlideTransition'
import Typography from '../commons/Typography'
import StyledDialog from '../commons/Dialog'
import LogIn from './LogIn'
import PasswordLost from './PasswordLost'
import Fade from '@mui/material/Fade'
import ValidateCode from './ValidateCode'
import ChangePassword from './ChangePassword'
import useAuth from '../../hooks/useAuth'

const LoginModal = ({ showModalLogin, handleClose }) => {
  const { logOut } = useAuth()
  const posibleViews = {
    login: 'login',
    passwordLost: 'passwordLost',
    validateCode: 'validateCode',
    changePassword: 'changePassword',
  }
  const [renderView, setRenderView] = useState(posibleViews.login)
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const theme = useTheme()

  const handleChangeView = ({ newView }) => {
    setRenderView(newView)
  }

  const onClickForgot = ({ userData, emailData }) => {
    setUser(userData)
    setEmail(emailData)
    handleChangeView({ newView: posibleViews.validateCode })
  }
  const onClickValidate = ({ newToken }) => {
    setToken(newToken)
    handleChangeView({ newView: posibleViews.changePassword })
  }

  const goBack = () => {
    setUser()
    setEmail()
    setToken()
    handleChangeView({ newView: posibleViews.login })
  }

  const handleInternalCloseModal = () => {
    if (
      renderView == posibleViews.validateCode ||
      renderView == posibleViews.validateCode
    ) {
      logOut()
    }
    handleClose()
  }

  return (
    <StyledDialog
      open={showModalLogin}
      TransitionComponent={SlideTransition}
      keepMounted
      onClose={handleInternalCloseModal}
      aria-describedby="alert-dialog-slide-description"
    >
      <Box p={{ xs: 2, md: 4 }}>
        <DialogTitle>
          {renderView === posibleViews.login && (
            <Fade in>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sx={{ color: theme.palette.customText.textWhiteLight }}
                >
                  Iniciar sesion
                </Grid>
              </Grid>
            </Fade>
          )}
          {renderView !== posibleViews.login && (
            <Fade in>
              <Grid container>
                {renderView !== posibleViews.changePassword && (
                  <Grid
                    item
                    xs={12}
                    sx={{ color: theme.palette.customText.textWhiteLight }}
                  >
                    <Button onClick={goBack}>
                      <Typography color="customText.textWhiteLight">
                        Volver
                      </Typography>
                    </Button>
                  </Grid>
                )}
                <Grid
                  item
                  xs={12}
                  sx={{ color: theme.palette.customText.textWhiteLight }}
                >
                  Recuperar contraseña
                </Grid>
              </Grid>
            </Fade>
          )}
        </DialogTitle>
        <DialogContent>
          {renderView === posibleViews.login && (
            <Fade in>
              <Grid container sx={{ display: 'flex' }}>
                <LogIn
                  handleChangeView={() => {
                    handleChangeView({ newView: posibleViews.passwordLost })
                  }}
                />
              </Grid>
            </Fade>
          )}
          {renderView === posibleViews.passwordLost && (
            <Fade in>
              <Grid container>
                <PasswordLost onClickForgot={onClickForgot} />
              </Grid>
            </Fade>
          )}
          {renderView === posibleViews.validateCode && (
            <Fade in>
              <Grid container>
                <ValidateCode
                  onClickValidate={onClickValidate}
                  user={user}
                  email={email}
                />
              </Grid>
            </Fade>
          )}
          {renderView === posibleViews.changePassword && (
            <Fade in>
              <Grid container>
                <ChangePassword user={user} email={email} token={token} />
              </Grid>
            </Fade>
          )}
        </DialogContent>
      </Box>
    </StyledDialog>
  )
}

export default LoginModal

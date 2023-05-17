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

const LoginModal = ({ showModalLogin, handleClose }) => {
  const posibleViews = {
    login: 'login',
    passwordLost: 'passwordLost',
  }
  const [renderView, setRenderView] = useState(posibleViews.login)
  const theme = useTheme()

  const handleChangeView = ({ newView }) => {
    setRenderView(newView)
  }

  return (
    <StyledDialog
      open={showModalLogin}
      TransitionComponent={SlideTransition}
      keepMounted
      onClose={handleClose}
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
          {renderView === posibleViews.passwordLost && (
            <Fade in>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sx={{ color: theme.palette.customText.textWhiteLight }}
                >
                  <Button
                    onClick={() => {
                      handleChangeView({ newView: posibleViews.login })
                    }}
                  >
                    <Typography color="customText.textWhiteLight">
                      Volver
                    </Typography>
                  </Button>
                </Grid>
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
                <PasswordLost />
              </Grid>
            </Fade>
          )}
        </DialogContent>
      </Box>
    </StyledDialog>
  )
}

export default LoginModal

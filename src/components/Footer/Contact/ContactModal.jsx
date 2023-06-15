import React, { useRef } from 'react'
import { Box, CircularProgress, Grid } from '@mui/material'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { SlideTransition } from '../../SlideTransition'
import Typography from '../../commons/Typography'
import StyledDialog from '../../commons/Dialog'
import Fade from '@mui/material/Fade'
import TextField from '../../commons/TextField'
import { useContactUs } from '../../../../api/useUsersAPI'
import { SpecialCommonButton } from '../../commons/SpecialButtons'

const ContactModal = ({ showModalContact, handleClose }) => {
  const { execute, data, isLoading, isError } = useContactUs()

  const emailRef = useRef(null)
  const messageRef = useRef(null)

  const handleInternalCloseModal = () => {
    handleClose()
  }

  const handleClickSendEmail = () => {
    if (isLoading) return
    execute({
      data: {
        email: emailRef.current.value,
        message: messageRef.current.value,
      },
    })
    if (data?.status == 200) {
      handleClose()
    }
  }

  return (
    <StyledDialog
      open={showModalContact}
      TransitionComponent={SlideTransition}
      keepMounted
      onClose={handleInternalCloseModal}
      aria-describedby="alert-dialog-slide-description"
    >
      <Box p={{ xs: 2, md: 4 }}>
        <DialogTitle>
          <Fade in>
            <Grid container>
              <Grid item xs={12} sx={{ color: 'customText.textWhiteLight' }}>
                Contacto
              </Grid>
            </Grid>
          </Fade>
        </DialogTitle>
        <DialogContent>
          <Fade in>
            <Grid container>
              <Grid item xs={12} mb={1}>
                <Typography color="customText.textWhiteLight">
                  Deja tu mensaje
                </Typography>
              </Grid>
              <Grid item xs={12} mb={1}>
                <Typography color="customText.textWhiteLight">
                  Email :
                </Typography>
              </Grid>
              <Grid item xs={12} mb={1}>
                <TextField type="email" fullWidth inputRef={emailRef} />
              </Grid>
              <Grid item xs={12} mb={1}>
                <Typography color="customText.textWhiteLight">
                  Mensaje :
                </Typography>
              </Grid>
              <Grid item xs={12} mb={2}>
                <TextField multiline rows={4} fullWidth inputRef={messageRef} />
              </Grid>
              {data?.status != 200 && (
                <Grid item xs={12}>
                  <SpecialCommonButton onClick={handleClickSendEmail} fullWidth>
                    {!isLoading && (
                      <Typography color="customText.textWhiteLight">
                        Enviar
                      </Typography>
                    )}
                    {isLoading && <CircularProgress sx={{ color: 'white' }} />}
                  </SpecialCommonButton>
                </Grid>
              )}
              {data?.status === 200 && !isLoading && (
                <Grid item xs={12} mt={2}>
                  <Typography
                    color="customText.textWhiteLight"
                    sx={{ textAlign: 'center' }}
                  >
                    Enviado
                  </Typography>
                </Grid>
              )}
              {isError && (
                <Grid item xs={12} mt={2}>
                  <Typography
                    color="customText.textWhiteLight"
                    sx={{ textAlign: 'center' }}
                  >
                    Ha ocurrido un error
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Fade>
        </DialogContent>
      </Box>
    </StyledDialog>
  )
}

export default ContactModal

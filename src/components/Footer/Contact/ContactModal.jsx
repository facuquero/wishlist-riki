import React, { useRef } from 'react'
import { Box, Grid } from '@mui/material'
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
  const { execute, data, isLoading } = useContactUs()

  const emailRef = useRef(null)
  const messageRef = useRef(null)

  const handleInternalCloseModal = () => {
    handleClose()
  }

  const handleClickSendEmail = () => {
    return
    execute({
      data: {
        email: emailRef.current.value,
        message: emailRef.current.value,
      },
    })
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

              <Grid item xs={12}>
                <SpecialCommonButton onClick={handleClickSendEmail} fullWidth>
                  Mandar
                </SpecialCommonButton>
              </Grid>
            </Grid>
          </Fade>
        </DialogContent>
      </Box>
    </StyledDialog>
  )
}

export default ContactModal

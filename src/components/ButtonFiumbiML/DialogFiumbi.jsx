import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { generateLinkML } from '../../../api/fiumbiProducts'
import CircularProgress from '@mui/material/CircularProgress'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import styles from '../../assets/styles/DialogFiumbi.module.scss'
import { SlideTransition } from '../SlideTransition'
import Typography from '../commons/Typography'

const DialogFiumbi = ({
  productID,
  fiumbiUsername,
  fiumbiTitle,
  imgThumbnail,
  showModalML,
  handleClose,
}) => {
  const { execute, data, isLoading, isError } = generateLinkML()
  const handleClickFiumbiML = (e) => {
    const message = messageTextRef?.current?.value || ''
    execute({
      data: { username: fiumbiUsername, product_id: productID, message },
    })
  }

  const messageTextRef = useRef(null)

  useEffect(() => {
    if (data?.status === 200) {
      window.location.href = data.data.redirectURL
    }
  }, [isLoading, data])

  return (
    <Dialog
      open={showModalML}
      TransitionComponent={SlideTransition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>
        <Grid container>
          <Grid container justifyContent="center">
            <img
              src={imgThumbnail}
              loading="lazy"
              alt="meliThumbnail"
              className={styles.imageFavList}
            />
          </Grid>
          <Grid item xs={12}>
            {fiumbiTitle}
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={12} mb={2}>
            <Typography> Agregar una nota para {fiumbiUsername} </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={messageTextRef}
              id="outlined-multiline-static"
              multiline
              rows={4}
              sx={{
                width: '100%',
                display: data ? 'none' : 'flex',
              }}
            />
          </Grid>
          {isError && (
            <Grid item xs={12}>
              <Typography>
                Algo ocurrio al intentar crear el Fiumbi, intente nuevamente
              </Typography>
            </Grid>
          )}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container justifyContent="center" mb={1}>
          {!data && (
            <Button onClick={handleClickFiumbiML}>
              {!isLoading && 'Generar Fiumbi'}
              {isLoading && <CircularProgress />}
            </Button>
          )}
          {data && 'Preparando tu Fiumbi'}
        </Grid>
      </DialogActions>
    </Dialog>
  )
}

export default DialogFiumbi

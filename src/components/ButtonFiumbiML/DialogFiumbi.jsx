import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import { generateLinkML } from '../../../api/fiumbiProducts'
import CircularProgress from '@mui/material/CircularProgress'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { redirect } from 'react-router-dom'
import styles from '../../assets/styles/fiumbiList.module.scss'

export const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const ButtonFiumbiML = ({
  productID,
  fiumbiUsername,
  fiumbiTitle,
  imgThumbnail,
  showModalML,
  handleClose,
}) => {
  const { execute, data, isLoading, isError, error } = generateLinkML()
  const handleClickFiumbiML = (e) => {
    execute({ data: { username: fiumbiUsername, product_id: productID } })
  }

  const messageTextRef = useRef(null)

  useEffect(() => {
    if (data?.status === 200) {
      console.log('messageTextRef.current', messageTextRef.current.value)
      window.location.href = data.data.redirectURL
    }
  }, [isLoading, data])

  return (
    <Dialog
      open={showModalML}
      TransitionComponent={Transition}
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
        <DialogContentText id={`alert-dialog-slide-description-${productID}`}>
          <Grid container>
            <Grid item xs={12} mb={2}>
              Ingrese un mensaje en el Fiumbi
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={messageTextRef}
                id="outlined-multiline-static"
                multiline
                rows={4}
                label="Aqui podes escribir un mensaje para para agregarle al Fiumbi"
                defaultValue="Default Value"
                sx={{
                  width: '100%',
                }}
              />
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Grid container justifyContent="center">
          <Button onClick={handleClickFiumbiML}>
            {!isLoading && 'Generar Fiumbi'}
            {isLoading && <CircularProgress />}
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  )
}

export default ButtonFiumbiML

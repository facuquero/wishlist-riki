import { Grid, useTheme } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { generateLinkML } from '../../../api/fiumbiProducts'
import CircularProgress from '@mui/material/CircularProgress'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import styles from '../../assets/styles/DialogFiumbi.module.scss'
import { SlideTransition } from '../SlideTransition'
import Typography from '../commons/Typography'
import TextField from '../commons/TextField'
import { SpecialCommonButton } from '../commons/SpecialButtons'
import StyledDialog from '../commons/Dialog'

const DialogFiumbi = ({
  productID,
  fiumbiUsername,
  fiumbiTitle,
  imgThumbnail,
  showModalML,
  handleClose,
}) => {
  const { execute, data, isLoading, isError } = generateLinkML()
  const theme = useTheme()
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
    <StyledDialog
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
          <Grid
            item
            xs={12}
            m={2}
            display="flex"
            justifyContent="center"
            color="white"
            sx={{ textAlign: 'center' }}
          >
            {fiumbiTitle}
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={12} mb={2} display="flex" justifyContent="center">
            <Typography color="white">
              Agregar una nota para {fiumbiUsername}
            </Typography>
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
                color: 'white',
              }}
            />
          </Grid>
          {isError && (
            <Grid item xs={12}>
              <Typography color="white" mt={1} sx={{ textAlign: 'center' }}>
                Algo ocurrio al intentar crear el Fiumbi, intente nuevamente
              </Typography>
            </Grid>
          )}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container justifyContent="center" mb={1}>
          {!data && (
            <SpecialCommonButton onClick={handleClickFiumbiML}>
              {!isLoading && 'Generar Fiumbi'}
              {isLoading && (
                <CircularProgress
                  sx={{ color: theme.palette.customGold.at254a1 }}
                />
              )}
            </SpecialCommonButton>
          )}
          {data && <Typography color="white">Preparando tu Fiumbi</Typography>}
        </Grid>
      </DialogActions>
    </StyledDialog>
  )
}

export default DialogFiumbi

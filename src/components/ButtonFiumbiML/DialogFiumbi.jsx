import { Checkbox, Grid, useTheme } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { generateLinkML } from '../../../api/fiumbiProducts'
import CircularProgress from '@mui/material/CircularProgress'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import styles from '../../assets/styles/DialogFiumbi.module.scss'
import { SlideTransition } from '../SlideTransition'
import Typography from '../commons/Typography'
import TextField from '../commons/TextField'
import StyledDialog from '../commons/Dialog'
import ShippingPrice from './ShippingPrice'
import { NavLink } from 'react-router-dom'
import { SpecialCommonButton } from '../commons/SpecialButtons'

const DialogFiumbi = ({
  productID,
  fiumbiUsername,
  fiumbiTitle,
  imgThumbnail,
  showModalML,
  handleClose,
  fiumbiPrice,
  fiumbiPriceOriginal,
}) => {
  const { execute, data, isLoading, isError } = generateLinkML()
  const theme = useTheme()
  const [checked, setChecked] = useState(false)

  const handleChange = (event) => {
    setChecked(event.target.checked)
  }

  const handleClickFiumbiML = (e) => {
    const message = messageTextRef?.current?.value || ''
    if (!checked) return
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
              style={{
                padding: '10px',
                borderRadius: '16px',
                border: 'solid 1px',
                background: `linear-gradient(315deg, ${theme.palette.customGold.at254a04} 0%,${theme.palette.customGold.at254a1} 50%, ${theme.palette.customGold.at254a04} 100%)`,
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            m={2}
            mb={0}
            display="flex"
            justifyContent="center"
            color="white"
            sx={{ textAlign: 'center' }}
          >
            {fiumbiTitle}
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Typography color="white">
              Producto: $ {fiumbiPriceOriginal + fiumbiPrice}
            </Typography>
          </Grid>

          <Grid item xs={12} mb={2} display="flex" justifyContent="center">
            <Typography color="white">
              <ShippingPrice productID={productID} />
            </Typography>
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
          <Grid
            item
            xs={12}
            mb={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Checkbox
              checked={checked}
              onChange={handleChange}
              sx={{
                color: theme.palette.customText.textWhiteLight,
                '&.Mui-checked': {
                  color: theme.palette.customGold.lightHover,
                },
              }}
            />
            <Typography color="white" sx={{ textAlign: 'center' }}>
              Acepto los&nbsp;
              <NavLink
                target="_blank"
                to="/terminos-y-condiciones"
                sx={{ color: 'white' }}
              >
                <Typography
                  component="span"
                  color="white"
                  sx={{ textAlign: 'center', textDecoration: 'none' }}
                >
                  terminos y condiciones
                </Typography>
              </NavLink>
            </Typography>
          </Grid>

          {!data && (
            <SpecialCommonButton
              disabled={!checked}
              onClick={handleClickFiumbiML}
            >
              {!isLoading && <Typography color="black">Ir a pagar</Typography>}
              {isLoading && <CircularProgress sx={{ color: 'black' }} />}
            </SpecialCommonButton>
          )}
          {data && (
            <Typography color="white">Redirigiendo a Mercado Pago</Typography>
          )}
        </Grid>
      </DialogActions>
    </StyledDialog>
  )
}

export default DialogFiumbi

import { Box, Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import DialogFiumbi from './DialogFiumbi'
import OpenGiftSVG from '../../assets/iconcs/gift-1-svgrepo-com4.svg'
import Logo from '../../assets/logoblack.svg'
import OpenGiftSVG3 from '../../assets/iconcs/gift-1-svgrepo-com3estesi.svg'
import OpenGiftSVG1 from '../../assets/iconcs/1234.svg'
import OpenGiftSVG2 from '../../assets/iconcs/gift-sale-shop-svgrepo-com.svg'
import styles from '../../assets/styles/ButtonFiumbi.module.scss'
import { useTheme } from '@emotion/react'
const ButtonFiumbiML = ({
  productID,
  fiumbiUsername,
  fiumbiTitle,
  imgThumbnail,
}) => {
  const [showModalML, setShowModalML] = useState(false)
  const theme = useTheme()

  const handleClickOpen = () => {
    setShowModalML(true)
  }

  const handleClose = () => {
    setShowModalML(false)
  }

  return (
    <Box display="flex" justifyContent="center" ml={3}>
      <Button
        onClick={handleClickOpen}
        variant="outlined"
        sx={{
          width: 'min(100%,250px)',
          padding: 2,
          display: 'flex',
          alignItems: 'center',
          border: 'none',
          background: `linear-gradient(${theme.palette.customGold.light}, ${theme.palette.customGold.dark});`,
        }}
      >
        <Grid container wrap="nowrap" alignItems="center">
          <Grid item display="flex" alignItems="center">
            <img src={Logo} className={styles.imageButtonFiumbiList} />
          </Grid>
          <Grid item ml={2}>
            <Box
              color="black"
              sx={{ fontSize: '1.25rem', textTransform: 'capitalize' }}
            >
              Regalar ahora
            </Box>
          </Grid>
        </Grid>
      </Button>
      {showModalML && (
        <DialogFiumbi
          productID={productID}
          fiumbiUsername={fiumbiUsername}
          imgThumbnail={imgThumbnail}
          fiumbiTitle={fiumbiTitle}
          showModalML={showModalML}
          handleClose={handleClose}
        />
      )}
    </Box>
  )
}

export default ButtonFiumbiML

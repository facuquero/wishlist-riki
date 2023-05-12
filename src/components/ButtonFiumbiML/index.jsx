import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import DialogFiumbi from './DialogFiumbi'
import OpenGiftSVG from '../../assets/iconcs/gift-1-svgrepo-com4.svg'
import OpenGiftSVG3 from '../../assets/iconcs/gift-1-svgrepo-com3estesi.svg'
import OpenGiftSVG1 from '../../assets/iconcs/1234.svg'
import OpenGiftSVG2 from '../../assets/iconcs/gift-sale-shop-svgrepo-com.svg'
import styles from '../../assets/styles/ButtonFiumbi.module.scss'
const ButtonFiumbiML = ({
  productID,
  fiumbiUsername,
  fiumbiTitle,
  imgThumbnail,
}) => {
  const [showModalML, setShowModalML] = useState(false)

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
          width: 'min(100%,200px)',
          display: 'flex',
          //flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box color="black">Regalar</Box>
        <img src={OpenGiftSVG} className={styles.imageButtonFiumbiList} />
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

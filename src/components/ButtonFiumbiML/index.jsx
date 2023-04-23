import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import DialogFiumbi from './DialogFiumbi'

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
    <Box>
      <Button onClick={handleClickOpen}>
        <CardGiftcardIcon />
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

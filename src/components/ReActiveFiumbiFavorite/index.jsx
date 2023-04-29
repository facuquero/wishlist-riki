import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import DeleteFiumbiFavoriteModal from './ReActiveFiumbiFavoriteModal'
import FavoriteIcon from '@mui/icons-material/Favorite'

const ReActiveFiumbiFavorite = ({ id, fiumbiTitle, reloadSearch }) => {
  const [showModalReActiveFiumbiFavorite, setShowModalReActiveFiumbiFavorite] =
    useState(false)

  const handleClickOpen = () => {
    setShowModalReActiveFiumbiFavorite(true)
  }

  const handleClose = ({ isFiumbiActiveChange }) => {
    setShowModalReActiveFiumbiFavorite(false)
    if (isFiumbiActiveChange) {
      reloadSearch()
    }
  }

  return (
    <Box>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          alignItems: 'center',
          display: 'flex',
        }}
      >
        Agregar a favoritos <FavoriteIcon sx={{ ml: 1 }} />
      </Button>
      {showModalReActiveFiumbiFavorite && (
        <DeleteFiumbiFavoriteModal
          showModal={showModalReActiveFiumbiFavorite}
          handleClose={handleClose}
          id={id}
          fiumbiTitle={fiumbiTitle}
        />
      )}
    </Box>
  )
}

export default ReActiveFiumbiFavorite

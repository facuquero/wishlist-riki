import { Box, Button, ButtonBase, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import DeleteFiumbiFavoriteModal from './DeleteFiumbiFavoriteModal'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken'
import { SpecialCommonButton } from '../commons/SpecialButtons'

const DeleteFiumbiFavorite = ({ id, fiumbiTitle, reloadSearch }) => {
  const [showModalDeleteFiumbiFavorite, setShowModalDeleteFiumbiFavorite] =
    useState(false)
  const theme = useTheme()

  const handleClickOpen = () => {
    setShowModalDeleteFiumbiFavorite(true)
  }

  const handleClose = ({ isFiumbiActiveChange }) => {
    setShowModalDeleteFiumbiFavorite(false)
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
          background: `linear-gradient(315deg, white 0%, gray 50%, white 100%)`,
          color: 'black',
          display: 'block',
          width: 'min-content',
        }}
      >
        <HeartBrokenIcon
          sx={{ width: 'min(100%, 50px)', height: 'min(100%, 50px)' }}
        />
        <Typography>Sacar de favoritos </Typography>
      </Button>
      {showModalDeleteFiumbiFavorite && (
        <DeleteFiumbiFavoriteModal
          showModal={showModalDeleteFiumbiFavorite}
          handleClose={handleClose}
          id={id}
          fiumbiTitle={fiumbiTitle}
        />
      )}
    </Box>
  )
}

export default DeleteFiumbiFavorite

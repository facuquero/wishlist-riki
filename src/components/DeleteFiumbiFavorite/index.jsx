import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import DeleteFiumbiFavoriteModal from './DeleteFiumbiFavoriteModal'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken'
import { SpecialCommonButton } from '../commons/SpecialButtons'

const DeleteFiumbiFavorite = ({ id, fiumbiTitle, reloadSearch }) => {
  const [showModalDeleteFiumbiFavorite, setShowModalDeleteFiumbiFavorite] =
    useState(false)

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
      <SpecialCommonButton
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          alignItems: 'center',
          display: 'flex',
        }}
      >
        Sacar de favoritos <HeartBrokenIcon sx={{ ml: 1 }} />
      </SpecialCommonButton>
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

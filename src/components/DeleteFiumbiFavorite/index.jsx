import { Box, Button, ButtonBase, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import DeleteFiumbiFavoriteModal from './DeleteFiumbiFavoriteModal'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken'
import {
  SpecialCommonButton,
  SpecialCommonButtonOutlined,
} from '../commons/SpecialButtons'

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
      <SpecialCommonButton
        onClick={handleClickOpen}
        sx={{
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Typography>Desactivar</Typography>
        <HeartBrokenIcon sx={{ ml: 1 }} />
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

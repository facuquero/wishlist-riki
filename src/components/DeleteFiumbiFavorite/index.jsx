import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import DeleteFiumbiFavoriteModal from './DeleteFiumbiFavoriteModal'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken'

const DeleteFiumbiFavorite = ({}) => {
  const [showModalLogin, setShowModalML] = useState(false)

  const handleClickOpen = () => {
    setShowModalML(true)
  }

  const handleClose = () => {
    setShowModalML(false)
  }

  return (
    <Box>
      <Button variant="contained" onClick={handleClickOpen}>
        Sacar de favoritos <HeartBrokenIcon />
      </Button>
      {showModalLogin && (
        <DeleteFiumbiFavoriteModal
          showModalLogin={showModalLogin}
          handleClose={handleClose}
        />
      )}
    </Box>
  )
}

export default DeleteFiumbiFavorite

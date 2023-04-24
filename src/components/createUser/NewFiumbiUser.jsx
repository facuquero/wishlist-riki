import React, { useEffect, useState } from 'react'
import { Box, Button, InputAdornment, TextField } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Typography from '../commons/Typography'

const NewFiumbiUser = ({ handleClickCreateWishlist }) => {
  const [wishlist, setWishlist] = useState('')
  const [isFiumbiFree, setIsFiumbiFree] = useState(false)

  const onChangeWishlistName = (e) => {
    setWishlist(e.target.value)
  }

  const handleClickCreate = () => {
    if (isDisabledSend) return
    handleClickCreateWishlist({ wishlist })
  }

  const isDisabledSend = !wishlist || wishlist.length < 3

  useEffect(() => {
    setIsFiumbiFree(false)
    const checking = setTimeout(async () => {
      //const response = await get()
      //setIsFiumbiFree(true)
    }, 500)
    return () => clearTimeout(checking)
  }, [wishlist])

  return (
    <Box>
      <Typography
        sx={{
          color: '#4f5bd5',
          fontFamily: 'Poppins',
          textAlign: 'center',
          fontWeight: 700,
          fontSize: { xs: '1.5rem', md: '2.125rem' },
          mb: 2,
        }}
      >
        CREÁ UNA FIUMBI Y COMPARTILA
      </Typography>
      <Box sx={{ width: '100%' }}>
        <TextField
          placeholder="Nombre de tu wishlist"
          fullWidth
          onChange={onChangeWishlistName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FavoriteIcon sx={{ color: '#4f5bd5' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            fieldset: {
              borderWidth: 2,
              fontFamily: 'Poppins',
              borderRadius: 10,
            },
          }}
        />
        <Box
          flexDirection="column"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ paddingTop: 2 }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: 10 }}
            size="large"
            onClick={handleClickCreate}
            disabled={isDisabledSend}
          >
            <Typography sx={{ fontWeight: 700 }} variant="h5">
              CREAR WISHLIST
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default NewFiumbiUser

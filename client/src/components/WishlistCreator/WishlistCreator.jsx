import React, { useState } from 'react'
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

const WishlistCreator = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const navigate = useNavigate()
  const [wishlistName, setWishlistName] = useState('')
  const handleClickCreateWishlist = () => {
    navigate({ pathname: '/register', search: `?wishlist=${wishlistName}` })
  }
  return (
    <Box
      flexDirection="column"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: '#4f5bd5',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          maxWidth: isMobile ? '80%' : 800,
          backgroundColor: '#ffff',
          padding: isMobile ? 2 : 10,
          borderRadius: 5,
          boxShadow: '0 1px 5px black',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#4f5bd5',
            fontFamily: 'Poppins',
            justifyContent: 'center',
            textAlign: 'center',
            fontWeight: 700,
            my: 2,
          }}
        >
          CREÁ UNA WISHLIST Y COMPARTILA
        </Typography>
        <Box sx={{ width: '100%' }}>
          <TextField
            placeholder="Nombre de tu wishlist"
            fullWidth
            onChange={(e) => setWishlistName(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FavoriteIcon sx={{ color: '#4f5bd5' }} />
                </InputAdornment>
              ),
              style: {
                fontFamily: 'Poppins',
              },
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
              onClick={() => handleClickCreateWishlist()}
            >
              <Typography sx={{ fontWeight: 700 }} variant="h5">
                CREAR WISHLIST
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default WishlistCreator

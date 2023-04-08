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

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import NewFiumbiUser from './createUser/NewFiumbiUser'
import RegisterFiumbi from './createUser/RegisterFiumbi'

const posibleViews = {
  createFiumbiName: 'createFiumbiName',
  createFiumbiUser: 'createFiumbiUser',
  createFiumbiSuccess: 'createFiumbiSuccess',
}

const WishlistCreator = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(posibleViews.createFiumbiName)
  const [wishlistName, setWishlistName] = useState('')
  const [wishlistUser, setWishlisUser] = useState({})

  const handleClickCreateWishlist = ({ wishlist }) => {
    setWishlistName(wishlist)
    setActiveStep(posibleViews.createFiumbiUser)
  }

  const handleClickCreatUser = () => {
    setActiveStep(posibleViews.createFiumbiSuccess)
  }

  return (
    <Box
      flexDirection="column"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: '#4f5bd5',
        minHeight: '100dvh',
      }}
    >
      <Box
        sx={{
          maxWidth: {
            xs: '80%',
            sm: 400,
          },
          backgroundColor: '#ffff',
          px: {
            xs: 4,
            sm: 10,
          },
          py: {
            xs: 4,
            sm: 6,
          },
          m: { xs: 4, sm: 8 },
          borderRadius: 5,
          boxShadow: '0 1px 5px black',
        }}
      >
        {activeStep == posibleViews.createFiumbiName && (
          <NewFiumbiUser
            handleClickCreateWishlist={handleClickCreateWishlist}
          />
        )}
        {activeStep == posibleViews.createFiumbiUser && (
          <RegisterFiumbi
            wishlistName={wishlistName}
            handleClickCreatUser={handleClickCreatUser}
            setWishlisUser={setWishlisUser}
          />
        )}
        {activeStep == posibleViews.createFiumbiSuccess && <div>se creo</div>}
      </Box>
    </Box>
  )
}

export default WishlistCreator

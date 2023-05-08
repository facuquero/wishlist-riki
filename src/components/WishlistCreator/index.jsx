import React, { useState } from 'react'
import { Box } from '@mui/material'
import NewFiumbiUser from './NewFiumbiUser'
import RegisterFiumbi from './RegisterFiumbi'
import ValidateEmail from './ValidateEmail'

const posibleViews = {
  createFiumbiName: 'createFiumbiName',
  createFiumbiUser: 'createFiumbiUser',
  createFiumbiSuccess: 'createFiumbiSuccess',
}

const WishlistCreator = () => {
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
    >
      <Box
        sx={{
          maxWidth: {
            xs: '80%',
            sm: 400,
          },
          background: 'rgba(27,27,27,0.9)',
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
        {activeStep == posibleViews.createFiumbiSuccess && (
          <ValidateEmail
            wishlistName={wishlistName}
            wishlistUser={wishlistUser}
          />
        )}
      </Box>
    </Box>
  )
}

export default WishlistCreator

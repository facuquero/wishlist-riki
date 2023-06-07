import React, { useState } from 'react'
import { Box, useTheme } from '@mui/material'
import NewFiumbiUser from './NewFiumbiUser'
import RegisterFiumbi from './RegisterFiumbi'
import ValidateEmail from './ValidateEmail'
import Typography from '../commons/Typography'
import StepTitles from './StepTitles'

const posibleViews = {
  createFiumbiName: 'createFiumbiName',
  createFiumbiUser: 'createFiumbiUser',
  createFiumbiSuccess: 'createFiumbiSuccess',
}

const WishlistCreator = () => {
  const [activeStep, setActiveStep] = useState(posibleViews.createFiumbiName)
  const [wishlistName, setWishlistName] = useState('')
  const [wishlistUser, setWishlisUser] = useState({})
  const theme = useTheme()

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
      <Box mt={{ xs: 4, sm: 6 }}>
        <StepTitles
          activeStep={activeStep}
          wishlistEmail={wishlistUser.email}
        />
      </Box>
      <Box
        sx={{
          maxWidth: {
            xs: '80%',
            sm: 400,
          },
          width: 'min(100%, 560px)',
          background: `linear-gradient(120deg, ${theme.palette.customGold.at254a1}, ${theme.palette.customGold.at254a04} 25%)`,
          px: {
            xs: 2,
            sm: 10,
          },
          py: {
            xs: 4,
            sm: 6,
          },
          my: { xs: 2, sm: 6 },
          mx: { xs: 1, sm: 6 },
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

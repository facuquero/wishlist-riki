import React from 'react'
import WishlistCreator from '../components/WishlistCreator'
import HowItWork from '../components/HowItWork.jsx'
import { Grid } from '@mui/material'

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <WishlistCreator />
      </Grid>
      <Grid item xs={12} mt={4}>
        <HowItWork />
      </Grid>
    </Grid>
  )
}

export default Home

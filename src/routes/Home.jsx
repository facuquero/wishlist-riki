import React from 'react'
import WishlistCreator from '../components/WishlistCreator'
import HowItWork from '../components/HowItWork.jsx'
import { Grid } from '@mui/material'
import Benefits from '../components/Benefits'
import FreqQuestion from '../components/FreqQuestion'

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <WishlistCreator />
      </Grid>
      <Grid item xs={12} my={4}>
        <HowItWork />
      </Grid>
      <Grid item xs={12} my={4}>
        <Benefits />
      </Grid>
      <Grid item xs={12} my={4}>
        <FreqQuestion />
      </Grid>
    </Grid>
  )
}

export default Home

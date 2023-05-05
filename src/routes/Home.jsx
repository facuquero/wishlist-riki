import React from 'react'
import WishlistCreator from '../components/WishlistCreator'
import { Grid } from '@mui/material'

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <WishlistCreator />
      </Grid>
    </Grid>
  )
}

export default Home

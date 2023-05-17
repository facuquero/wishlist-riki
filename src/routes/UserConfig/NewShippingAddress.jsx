import React from 'react'
import { Grid, Typography, useTheme } from '@mui/material'
import NewShippingAddressComponente from '@@/components/UserConfig/newShippingAddress'

const NewShippingAddress = () => {
  const theme = useTheme()

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        minHeight: '80dvh',
        background: theme.palette.customBlack.at90,
      }}
      justifyContent="center"
    >
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          borderRight: `1px solid`,
          borderLeft: `1px solid`,
          borderColor: theme.palette.customGold.at254a04,
          background: `linear-gradient(to right bottom, ${theme.palette.customBlack.black99a1}, ${theme.palette.customBlack.black43a1} 30%)`,
        }}
      >
        <Grid item xs={12}>
          <NewShippingAddressComponente />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default NewShippingAddress

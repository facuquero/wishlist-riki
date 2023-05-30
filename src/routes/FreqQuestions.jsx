import React from 'react'
import { Grid } from '@mui/material'
import Typography from '../components/commons/Typography'

const FreqQuestions = () => {
  return (
    <Grid
      container
      justifyContent="center"
      my={{ xs: 2, sm: 4 }}
      color="customText.textWhiteLight"
    >
      <Grid item xs={11} sm={8}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          titulo FreqQuestions
        </Typography>
      </Grid>
      <Grid item xs={11} sm={8} my={2} pl={2}>
        <Typography>descripcion FreqQuestions</Typography>
      </Grid>
    </Grid>
  )
}

export default FreqQuestions
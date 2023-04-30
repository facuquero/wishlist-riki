import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { Box, Grid } from '@mui/material'
import ValidatingML from '../components/ValidatingFiumbiUser/ValidatingML'
import ValidatingFiumbi from '../components/ValidatingFiumbiUser/ValidatingFiumbi'
import CircularProgress from '@mui/material/CircularProgress'

const ValidatingFiumbiUser = () => {
  const renderSteps = {
    validateML: 'validateML',
    validateFiumbi: 'validaFiumbi',
  }

  const [renderView, setRenderView] = useState(renderSteps.validateML)

  const { auth } = useAuth()

  const nextStep = () => {
    setRenderView(renderSteps.validateFiumbi)
  }

  if (!auth.username) {
    return <Navigate to="/" />
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="100dvh"
      sx={{
        backgroundColor: '#4f5bd5',
      }}
    >
      <Grid item p={3}>
        {renderView === renderSteps.validateML && (
          <ValidatingML nextStep={nextStep} />
        )}
        {renderView === renderSteps.validateFiumbi && <ValidatingFiumbi />}
        <Box mx="auto" width="min-content" mt={2}>
          <CircularProgress />
        </Box>
      </Grid>
    </Grid>
  )
}

export default ValidatingFiumbiUser

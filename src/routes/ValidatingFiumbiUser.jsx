import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { Box, Grid, useTheme } from '@mui/material'
import ValidatingML from '../components/ValidatingFiumbiUser/ValidatingML'
import ValidatingFiumbi from '../components/ValidatingFiumbiUser/ValidatingFiumbi'
import CircularProgress from '@mui/material/CircularProgress'

const ValidatingFiumbiUser = () => {
  const renderSteps = {
    validateML: 'validateML',
    validateFiumbi: 'validaFiumbi',
  }
  const theme = useTheme()
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
        background: `linear-gradient(to right bottom, ${theme.palette.customBlack.black99a1}, ${theme.palette.customBlack.black43a1} 30%)`,
      }}
    >
      <Grid item p={3} sx={{ color: theme.palette.customText.textWhiteLight }}>
        {renderView === renderSteps.validateML && (
          <ValidatingML nextStep={nextStep} />
        )}
        {renderView === renderSteps.validateFiumbi && <ValidatingFiumbi />}
        <Box mx="auto" width="min-content" mt={2}>
          <CircularProgress sx={{ color: theme.palette.customGold.at254a1 }} />
        </Box>
      </Grid>
    </Grid>
  )
}

export default ValidatingFiumbiUser

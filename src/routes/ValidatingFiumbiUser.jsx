import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { Grid } from '@mui/material'
import ValidatingML from '../components/ValidatingFiumbiUser/ValidatingML'
import ValidatingFiumbi from '../components/ValidatingFiumbiUser/ValidatingFiumbi'

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
    <Grid container>
      <Grid item>
        {renderView === renderSteps.validateML && (
          <ValidatingML nextStep={nextStep} />
        )}
        {renderView === renderSteps.validateFiumbi && <ValidatingFiumbi />}
      </Grid>
    </Grid>
  )
}

export default ValidatingFiumbiUser

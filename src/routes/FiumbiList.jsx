import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Typography from '../components/commons/Typography'
import FiumbiListActive from '../components/FiumbiList.jsx/FiumbiListActive'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useLoaderData } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import FiumbiListInactive from '../components/FiumbiList.jsx/FiumbiListInactive'

const FiumbiList = () => {
  const loaderData = useLoaderData()
  const { auth } = useAuth()

  const isSameUserAsFiumbiUser =
    auth?.username == loaderData?.params?.fiumbiListUsername

  const viewsTypes = {
    active: 'Activos',
    inactive: 'Inactivos',
  }

  const [viewRender, setViewRender] = useState(viewsTypes.active)

  const handleChange = (event) => {
    if (!isSameUserAsFiumbiUser) return
    setViewRender(event.target.value)
  }

  useEffect(() => {
    if (!isSameUserAsFiumbiUser) {
      setViewRender(viewsTypes.active)
    }
  }, [auth])

  return (
    <Grid
      sx={{
        backgroundColor: '#4f5bd5',
        p: 4,
      }}
      container
    >
      <Grid item xs={12} sx={{ py: 2 }} flex>
        <Grid container alignItems="center">
          <Grid item>
            <Typography sx={{ color: 'white' }}>Fiumbi favoritos</Typography>
          </Grid>
          {isSameUserAsFiumbiUser && (
            <Grid item>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="fiumbiLabilListaActive">
                  Fiumbi lista
                </InputLabel>
                <Select
                  labelId="fiumbiLabilListaActive"
                  value={viewRender}
                  label="Fiumbi lista"
                  onChange={handleChange}
                >
                  <MenuItem value={viewsTypes.active}>
                    {viewsTypes.active}
                  </MenuItem>
                  <MenuItem value={viewsTypes.inactive}>
                    {viewsTypes.inactive}
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ py: 2 }}
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
      >
        {viewRender === viewsTypes.active && <FiumbiListActive />}
        {viewRender === viewsTypes.inactive && <FiumbiListInactive />}
      </Grid>
    </Grid>
  )
}

export default FiumbiList

export const getFiumbiList = (loaderData) => {
  return loaderData
}

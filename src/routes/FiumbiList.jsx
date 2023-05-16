import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Typography from '../components/commons/Typography'
import FiumbiListActive from '../components/FiumbiList.jsx/FiumbiListActive'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useLoaderData } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import FiumbiListInactive from '../components/FiumbiList.jsx/FiumbiListInactive'
import SincFav from '../components/SincFav'
import { styled } from '@mui/material/styles'

const StyledSelect = styled(Select)(({ theme }) => ({
  '& .MuiSelect-select': {
    background: theme.palette.customText.textWhiteLight,
  },
}))

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
        p: 4,
      }}
      container
    >
      {isSameUserAsFiumbiUser && (
        <Grid
          container
          justifyContent={{ xs: 'center', sm: 'space-between' }}
          alignItems="center"
          sx={{ borderRadius: 2, p: 1 }}
        >
          <Grid item xs={12} sm="auto">
            <FormControl sx={{ width: { xs: '100%', sm: 'auto' } }}>
              <Typography color="customText.textWhiteLight">
                Fiumbi lista
              </Typography>
              <StyledSelect
                labelId="fiumbiLabilListaActive"
                value={viewRender}
                onChange={handleChange}
              >
                <MenuItem value={viewsTypes.active}>
                  {viewsTypes.active}
                </MenuItem>
                <MenuItem value={viewsTypes.inactive}>
                  {viewsTypes.inactive}
                </MenuItem>
              </StyledSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm="auto" pt={{ xs: 3, sm: 0 }}>
            <SincFav />
          </Grid>
        </Grid>
      )}
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

import React, { useEffect } from 'react'
import { Grid, Typography, useTheme } from '@mui/material'
import { findMe } from '../../../api/useUsersAPI'
import useAuth from '../../hooks/useAuth'

const UserConfig = () => {
  const theme = useTheme()
  const { data, isError, isLoadint, execute } = findMe()
  let initialized = false

  const { auth } = useAuth()
  console.log('auth', auth)
  useEffect(() => {
    if (!initialized) {
      initialized = true
      execute({ data: { username: auth.username } })
    }
  }, [])
  const userData = [
    {
      title: 'Nombre',
      field: 'name',
    },
    {
      title: 'Apellido',
      field: 'lastname',
    },
    {
      title: 'Documento',
      field: 'DNI',
    },
    {
      title: 'Email',
      field: 'email',
    },
    {
      title: 'Direccion',
      field: 'shipping_address',
    },
    {
      title: 'Codigo postal',
      field: 'zip_code',
    },
  ]
  console.log('data', data)
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        minHeight: '80dvh',
        background: theme.palette.customBlack.at90,
        color: theme.palette.customText.textWhiteLight,
      }}
      justifyContent="center"
    >
      <Grid
        item
        xs={12}
        sm={8}
        p={2}
        sx={{
          borderRight: `1px solid`,
          borderLeft: `1px solid`,
          borderColor: theme.palette.customGold.at254a04,
          background: `linear-gradient(to right bottom, ${theme.palette.customBlack.black99a1}, ${theme.palette.customBlack.black43a1} 30%)`,
        }}
      >
        <Grid item xs={12} mb={2}>
          <Typography variant="h4">Mis datos</Typography>
        </Grid>
        {data &&
          userData.map((itemUser, index) => (
            <Grid container key={`userconfig-typography-title-${index}`}>
              <Grid item xs={12} pl={2}>
                <Typography variant="h5">{itemUser.title} :</Typography>
              </Grid>
              <Grid item xs={12} pl={4}>
                <Typography
                  variant="h6"
                  component="li"
                  sx={{ listStyle: 'inside' }}
                >
                  {data.data.user[itemUser.field] || ''}
                </Typography>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Grid>
  )
}

export default UserConfig

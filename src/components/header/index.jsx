import { Button, Grid, useTheme } from '@mui/material'
import LoginButton from '../LoginButton'
import Typography from '../commons/Typography'
import useAuth from '../../hooks/useAuth'
import { NavLink } from 'react-router-dom'
import { SpecialLoginButton } from '../commons/SpecialButtons'

const Header = () => {
  const { auth, logOut } = useAuth()
  const theme = useTheme()
  return (
    <Grid
      container
      justifyContent="space-between"
      p={2}
      alignItems="center"
      sx={{ background: theme.palette.customBlack.at90 }}
    >
      <Grid item xs={4}>
        <NavLink to="/">logo</NavLink>
      </Grid>
      {auth?.token && (
        <Grid item xs={4} display="flex" justifyContent="center">
          <Typography sx={{ color: theme.palette.customText.textWhiteLight }}>
            Bienvenido {auth.username}
          </Typography>
        </Grid>
      )}
      <Grid item xs={4} display="flex" justifyContent="flex-end">
        {!auth?.token && <LoginButton />}
        {auth?.token && (
          <SpecialLoginButton onClick={logOut}>
            Cerrar sesion
          </SpecialLoginButton>
        )}
      </Grid>
    </Grid>
  )
}

export default Header

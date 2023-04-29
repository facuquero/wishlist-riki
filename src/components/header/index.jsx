import { Button, Grid } from '@mui/material'
import LoginButton from '../LoginButton'
import Typography from '../commons/Typography'
import useAuth from '../../hooks/useAuth'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const { auth, logOut } = useAuth()

  return (
    <Grid container justifyContent="space-between" p={2} alignItems="center">
      <Grid item xs={4}>
        <NavLink to="/">logo</NavLink>
      </Grid>
      {auth?.token && (
        <Grid item xs={4} display="flex" justifyContent="center">
          <Typography>Bienvenido {auth.username}</Typography>
        </Grid>
      )}
      <Grid item xs={4} display="flex" justifyContent="flex-end">
        {!auth?.token && <LoginButton />}
        {auth?.token && <Button onClick={logOut}>Cerrar sesion</Button>}
      </Grid>
    </Grid>
  )
}

export default Header

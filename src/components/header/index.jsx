import { Button, Grid } from '@mui/material'
import LoginButton from '../LoginButton'
import Typography from '../commons/Typography'
import useAuth from '../../hooks/useAuth'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const { auth, logOut } = useAuth()

  return (
    <Grid container justifyContent="space-between" p={2} alignItems="center">
      <Grid item>
        <NavLink to="/">logo</NavLink>
      </Grid>
      {auth?.token && (
        <Grid>
          <Typography>Bienvenido {auth.username}</Typography>
        </Grid>
      )}
      <Grid item>
        {!auth?.token && <LoginButton />}
        {auth?.token && <Button onClick={logOut}>Cerrar sesion</Button>}
      </Grid>
    </Grid>
  )
}

export default Header

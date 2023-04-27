import { Button, Grid } from '@mui/material'
import LoginButton from '../LoginButton'
import Typography from '../commons/Typography'
import useAuth from '../../hooks/useAuth'

const Header = () => {
  const { auth, logOut } = useAuth()

  return (
    <Grid container justifyContent="space-between" p={2}>
      <Grid item>logo</Grid>
      <Grid item>
        <Typography>opciones</Typography>
      </Grid>
      <Grid item>
        {!auth?.token && <LoginButton />}
        {auth?.token && (
          <Button onClick={logOut}>Bienvenido de nuevo {auth.username}</Button>
        )}
      </Grid>
    </Grid>
  )
}

export default Header

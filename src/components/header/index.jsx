import { Grid, useTheme } from '@mui/material'
import Typography from '../commons/Typography'
import useAuth from '../../hooks/useAuth'
import { NavLink } from 'react-router-dom'
import Menu from '../HamburgueMenu'

const Header = () => {
  const { auth } = useAuth()
  const theme = useTheme()
  return (
    <Grid
      container
      justifyContent="space-between"
      p={2}
      alignItems="center"
      sx={{
        background: theme.palette.customBlack.at90,
        borderBottom: `1px solid`,
        borderColor: theme.palette.customGold.at254a04,
      }}
    >
      <Grid item xs={4}>
        <NavLink to="/">logo</NavLink>
      </Grid>
      {auth?.token && (
        <Grid item xs={4} display="flex" justifyContent="center">
          <NavLink
            to={`/${auth.username}`}
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            <Typography sx={{ color: theme.palette.customText.textWhiteLight }}>
              Bienvenido {auth.username}
            </Typography>
          </NavLink>
        </Grid>
      )}
      <Grid item xs={4} display="flex" justifyContent="flex-end">
        <Menu />
      </Grid>
    </Grid>
  )
}

export default Header

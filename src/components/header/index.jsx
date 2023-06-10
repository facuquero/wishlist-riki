import { Grid, useTheme } from '@mui/material'
import Typography from '../commons/Typography'
import useAuth from '../../hooks/useAuth'
import { NavLink } from 'react-router-dom'
import Menu from '../HamburgueMenu'
import FiumbiLogo from '../../assets/logotext.svg'
import styles from '../../assets/styles/header.module.scss'
const Header = () => {
  const { auth } = useAuth()
  const theme = useTheme()
  return (
    <Grid
      container
      justifyContent="space-between"
      p={3}
      alignItems="center"
      sx={{
        background: theme.palette.customBlack.at90,
        borderBottom: `1px solid`,
        borderColor: theme.palette.customGold.at254a04,
      }}
    >
      <Grid item xs={4}>
        <NavLink to="/">
          <img
            alt="Fiumbi logo"
            loading="lazy"
            src={FiumbiLogo}
            className={styles.fiumbiLogo}
          />
        </NavLink>
      </Grid>
      {auth?.username && (
        <Grid item xs={4} display="flex" justifyContent="center">
          <NavLink to={`/${auth.username}`} style={{ textDecoration: 'none' }}>
            <Typography
              sx={{
                color: theme.palette.customText.textWhiteLight,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
              variant="h6"
            >
              Bienvenido&nbsp;
              <Typography
                sx={{
                  color: theme.palette.customGold.at254a1,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
                variant="span"
              >
                @{auth.username}
              </Typography>
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

import { useTheme } from '@emotion/react'
import { Grid, IconButton } from '@mui/material'
import Typography from '../commons/Typography'
import { NavLink } from 'react-router-dom'
import FiumbiLogo from '../../assets/logotext.svg'
import styles from '../../assets/styles/header.module.scss'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

const Footer = () => {
  const theme = useTheme()

  return (
    <Grid
      container
      sx={{
        background: theme.palette.customBlack.at90,
        borderTop: `1px solid`,
        borderColor: theme.palette.customGold.at254a04,
        p: { xs: 2, sm: 4 },
      }}
    >
      <Grid item xs={12} sm={6} sx={{ textAlign: 'center', color: 'white' }}>
        <Grid container>
          <Grid item xs={12} mb={2}>
            <NavLink to="/">
              <img
                alt="Fiumbi logo"
                loading="lazy"
                src={FiumbiLogo}
                className={styles.fiumbiLogo}
              />
            </NavLink>
          </Grid>
          <Grid item xs={12} mb={2}>
            <Typography>2023 fiumbi.</Typography>
            <Typography>Todo los derechos reservados.</Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item>
              <IconButton sx={{ display: 'flex', alignItems: 'center' }}>
                <NavLink to="/">
                  <TwitterIcon
                    sx={{ color: theme.palette.customGold.at254a04 }}
                  />
                </NavLink>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <NavLink to="/">
                  <InstagramIcon
                    sx={{ color: theme.palette.customGold.at254a04 }}
                  />
                </NavLink>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <NavLink to="/">
                  <FacebookIcon
                    sx={{ color: theme.palette.customGold.at254a04 }}
                  />
                </NavLink>{' '}
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} display="flex">
        <Grid
          container
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          flexGrow="1"
        >
          <Grid item mb={2}>
            <NavLink to="/terminos-y-condiciones">
              <Typography color="white" textDecoration="none">
                Términos y condiciones
              </Typography>
            </NavLink>
          </Grid>
          <Grid item mb={2}>
            <NavLink to="/politicas-de-privacidad">
              <Typography color="white" textDecoration="none">
                Politicas de privacidad
              </Typography>
            </NavLink>
          </Grid>
          <Grid item>
            <Typography color="white">Contácto</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer

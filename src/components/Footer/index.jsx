import { useTheme } from '@emotion/react'
import { Grid } from '@mui/material'
import Typography from '../commons/Typography'
import { NavLink } from 'react-router-dom'

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
            logo texto
          </Grid>
          <Grid item xs={12} mb={2}>
            <Typography>2023 fiumbi.</Typography>
            <Typography>Todo los derechos reservados.</Typography>
          </Grid>
          <Grid item xs={12}>
            iconos redes sociales
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container sx={{ color: 'white', textAlign: 'center' }}>
          <Grid item xs={12} mb={2}>
            <NavLink>
              <Typography>Términos y condiciones de uso</Typography>
            </NavLink>
          </Grid>
          <Grid item xs={12} mb={2}>
            <Typography>Preguntas Frecuentes</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Contácto</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer

import { Grid } from '@mui/material'
import Typography from './commons/Typography'
import howItWorkpng from '../assets/image/home/howItWork2.png'
import styles from '../assets/styles/howItWork.module.scss'

const HowItWork = () => {
  return (
    <Grid container justifyContent="center" sx={{ color: 'white' }}>
      <Grid item xs={12} display="flex" justifyContent="center">
        <Typography
          textAlign="center"
          variant="h4"
          sx={{
            fontWeight: 'bold',
            textShadow: '3px 5px 8px rgba(0, 0, 0, 0.45)',
            color: 'customGold.at254a1',
          }}
        >
          Como funciona Fiumbi
        </Typography>
      </Grid>
      <Grid container alignItems="center" justifyContent="center">
        <Grid
          item
          xs={6}
          justifyContent="flex-end"
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          <img
            loading="lazy"
            src={howItWorkpng}
            atl="howItWork"
            className={styles.hotItWork}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          justifyContent={{ xs: 'center', sm: 'flex-start' }}
          mt={2}
        >
          <Grid
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Grid item>
              <Typography
                mb={1}
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  textShadow: '3px 5px 8px rgba(0, 0, 0, 0.45)',
                  color: 'customGold.at254a1',
                }}
              >
                Creá tu cuenta
              </Typography>
            </Grid>
            <Grid item mb={3} sx={{ maxWidth: '300px', textAlign: 'center' }}>
              <Typography>
                Un proceso sencillo y facil que te llevara pocos segundos
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                mb={1}
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  textShadow: '3px 5px 8px rgba(0, 0, 0, 0.45)',
                  color: 'customGold.at254a1',
                }}
              >
                Vinculá con ML
              </Typography>
            </Grid>
            <Grid item mb={3} sx={{ maxWidth: '300px', textAlign: 'center' }}>
              <Typography>
                Vinculá tu cuenta con MercadoLibre* para crear tu lista regalos
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                mb={1}
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  textShadow: '3px 5px 8px rgba(0, 0, 0, 0.45)',
                  color: 'customGold.at254a1',
                }}
              >
                Compartí tu Fiumbi!
              </Typography>
            </Grid>
            <Grid item sx={{ maxWidth: '300px', textAlign: 'center' }}>
              <Typography>
                Compartí tu Fiumbi en redes sociales para comenzar a recibir
                regalos en tu domicilio!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HowItWork

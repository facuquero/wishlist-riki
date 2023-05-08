import { Grid } from '@mui/material'
import Typography from './commons/Typography'
import howItWorkpng from '../assets/image/home/howItWork.png'
import styles from '../assets/styles/howItWork.module.scss'

const HowItWork = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} display="flex" justifyContent="center">
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
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
            class={styles.hotItWork}
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
              <Typography mb={1} variant="h5" sx={{ fontWeight: 'bold' }}>
                Creá tu cuenta
              </Typography>
            </Grid>
            <Grid item mb={3} sx={{ maxWidth: '300px', textAlign: 'center' }}>
              <Typography variant="overline">
                Un proceso sencillo y facil que te llevara pocos segundos
              </Typography>
            </Grid>
            <Grid item>
              <Typography mb={1} variant="h5" sx={{ fontWeight: 'bold' }}>
                Vincula con ML
              </Typography>
            </Grid>
            <Grid item mb={3} sx={{ maxWidth: '300px', textAlign: 'center' }}>
              <Typography variant="overline">
                Vuncula tu cuenta con Mercado libre para poder crea tu lista
                regalos
              </Typography>
            </Grid>
            <Grid item>
              <Typography mb={1} variant="h5" sx={{ fontWeight: 'bold' }}>
                Disfrutar!!!
              </Typography>
            </Grid>
            <Grid item sx={{ maxWidth: '300px', textAlign: 'center' }}>
              <Typography variant="overline">
                Ahora solo comparte tu link de la cuenta para que se puedas
                recibir regalos
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HowItWork

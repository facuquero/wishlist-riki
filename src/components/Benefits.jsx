import { Grid, useTheme } from '@mui/material'
import Typography from './commons/Typography'
import benefitsKing from '../assets/image/home/benefits/king.png'
import benefitsHeart from '../assets/image/home/benefits/heart.png'
import benefitsGoodHand from '../assets/image/home/benefits/goodHand.png'
import styles from '../assets/styles/howItWork.module.scss'

const Benefits = () => {
  const theme = useTheme()
  const cardsItems = [
    {
      title: 'Recibe regalos de tu comunidad',
      icon: benefitsKing,
    },
    {
      title: 'Sin costos para el usuario',
      icon: benefitsHeart,
    },
    {
      title: 'Tus datos están protegidos',
      icon: benefitsGoodHand,
    },
  ]
  return (
    <Grid
      container
      justifyContent="center"
      sx={{ color: 'white', width: 'min(100%, 560px)', mx: 'auto' }}
    >
      <Grid item xs={12} display="flex" justifyContent="center">
        <Typography
          textAlign="center"
          variant="h4"
          sx={{
            fontWeight: 'bold',
            textShadow: '3px 5px 8px rgba(0, 0, 0, 0.45)',
          }}
        >
          Beneficios de usar&nbsp;
          <Typography
            component="span"
            variant="h4"
            color="customGold.at254a1"
            sx={{ fontWeight: 'bold' }}
          >
            Fiumbi
          </Typography>
          ?
        </Typography>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        mx={{ xs: 3, sm: 0 }}
      >
        {cardsItems.map((cardItem, index) => (
          <Grid
            key={`benefitsCards-container-${index}`}
            container
            justifyContent="center"
            my={{ xs: 2, sm: 4 }}
            p={{ xs: 2, sm: 4 }}
            borderRadius={4}
            sx={{
              background: `linear-gradient(120deg, ${theme.palette.customGold.at254a1}, ${theme.palette.customGold.at254a04} 50%)`,
              maxWidth: '600px',
            }}
          >
            <Grid item xs={6} justifyContent="flex-end" display="flex">
              <img
                loading="lazy"
                src={cardItem.icon}
                atl={`benefitsCards-${index}`}
                className={styles.hotItWork}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
              pb={{ xs: 2, sm: 0 }}
            >
              <Typography
                variant="h4"
                textAlign="center"
                color="customGold.at254a1"
                sx={{
                  fontWeight: 'bold',
                  textShadow: '3px 5px 8px rgba(0, 0, 0, 0.45)',
                }}
              >
                {cardItem.title}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Benefits

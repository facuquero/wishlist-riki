import { Box, useTheme } from '@mui/material'
import Typography from '../commons/Typography'

const StepTitles = ({ activeStep, wishlistEmail }) => {
  const theme = useTheme()
  const stepTitle = {
    createFiumbiName: (
      <Box sx={{ width: 'max(340px, 80%)', mx: 'auto' }}>
        <Typography
          paragraph
          width="auto"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '2.75rem' },
            textShadow: '3px 5px 8px rgba(0, 0, 0, 0.45)',
          }}
        >
          La forma&nbsp;
          <Typography
            component="span"
            color={theme.palette.customGold.at254a1}
            sx={{
              fontWeight: 'inherit',
              fontSize: 'inherit',
            }}
          >
            mas fácil
          </Typography>
          &nbsp;de recibir regalos
        </Typography>
      </Box>
    ),
    createFiumbiUser: (
      <Box display="flex">
        <Typography
          paragraph
          width="auto"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', sm: '2rem' },
            textShadow: '3px 5px 8px rgba(0, 0, 0, 0.45)',
          }}
        >
          <Typography
            component="span"
            color={theme.palette.customGold.at254a1}
            sx={{
              fontWeight: 'inherit',
              fontSize: 'inherit',
            }}
          >
            Rellena
          </Typography>
          &nbsp;el formulario de abajo para crear tu wishlist!
        </Typography>
      </Box>
    ),
    createFiumbiSuccess: (
      <Box
        sx={{
          width: '80%',
          mx: 'auto',
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1.25rem', sm: '2rem' },
            textShadow: '3px 5px 8px rgba(0, 0, 0, 0.45)',
          }}
        >
          Ya enviamos el código de validación al email:
        </Typography>
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1.25rem', sm: '2rem' },
            textShadow: '3px 5px 8px rgba(0, 0, 0, 0.45)',
          }}
          color={theme.palette.customGold.at254a1}
        >
          {wishlistEmail}
        </Typography>
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1.25rem', sm: '2rem' },
            textShadow: '3px 5px 8px rgba(0, 0, 0, 0.45)',
          }}
        >
          Revisa tu&nbsp;
          <Typography
            component="span"
            color={theme.palette.customGold.at254a1}
            sx={{
              fontWeight: 'inherit',
              fontSize: 'inherit',
            }}
          >
            bandeja de entrada
          </Typography>
          &nbsp;o la carpeta de spam para encontrar el código que te enviamos.
        </Typography>
      </Box>
    ),
  }
  return (
    <Box sx={{ color: 'white', textAlign: 'center', mx: 2 }}>
      {stepTitle[activeStep] || null}
    </Box>
  )
}

export default StepTitles

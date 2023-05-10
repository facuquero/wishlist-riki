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
          &nbsp;de recibir los regalos que te mereces
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
            fontSize: { xs: '2rem', sm: '3rem' },
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
            fontSize: { xs: '2rem', sm: '3rem' },
          }}
        >
          Ya enviamos el código de validación al email:
        </Typography>
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '3rem' },
          }}
          color={theme.palette.customGold.at254a1}
        >
          {wishlistEmail}
        </Typography>
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '3rem' },
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
    <Box sx={{ color: 'white', textAlign: 'center' }}>
      {stepTitle[activeStep] || null}
    </Box>
  )
}

export default StepTitles

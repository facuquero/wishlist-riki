import { Box } from '@mui/material'
import Typography from '../commons/Typography'

const StepTitles = ({ activeStep, wishlistUser }) => {
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
          <span>mas fácil</span>
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
          <span>Rellena</span>
          &nbsp;el formulario de abajo para crear tu wishlist!
        </Typography>
      </Box>
    ),
    createFiumbiSuccess: (
      <Box display="flex">
        <Typography variant="h4" paragraph width="auto">
          Ya enviamos el código de validación al email email23@gmail.com
        </Typography>
        <Typography variant="h4" paragraph>
          {wishlistUser?.email}
        </Typography>
        <Typography variant="h4" paragraph>
          Revisa tu&nbsp;<span>bandeja de entrada</span>&nbsp;o la carpeta de
          spam para encontrar el código que te enviamos.
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

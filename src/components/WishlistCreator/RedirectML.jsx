import StyledDialog from '../commons/Dialog'
import { SlideTransition } from '../SlideTransition'
import { DialogContent, DialogTitle, Grid } from '@mui/material'
import {
  newFiumbiFormClientid,
  newFiumbiFormRedirect_uri,
  newFiumbiFormScope,
} from '../../utils/globalConst'
import Typography from '../commons/Typography'
import { SpecialCommonButton } from '../commons/SpecialButtons'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken'

const RedirectML = () => {
  const goML = () => {
    const to = `https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=${newFiumbiFormClientid}&redirect_uri=${newFiumbiFormRedirect_uri}&scope=${newFiumbiFormScope}`
    window.location.href = to
  }
  return (
    <StyledDialog
      open={true}
      TransitionComponent={SlideTransition}
      keepMounted
      onClose={() => {}}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        color="customText.textWhiteLight"
      >
        Te vamos a redireccionar a Mercado Libre!
      </DialogTitle>
      <DialogContent>
        <Grid container justifyContent="center">
          <Grid item xs={12} color="customText.textWhiteLight" mb={2}>
            <Typography textAlign="center" variant="h5">
              <Typography
                component="span"
                color="customGold.at254a1"
                variant="h5"
              >
                Sincroniza&nbsp;
              </Typography>
              tu cuenta de mercado libre para terminar de crear tu wishlist!
            </Typography>
          </Grid>
          <Grid item xs={12} color="customText.textWhiteLight" mb={2} S>
            <Typography textAlign="center" sx={{ verticalAlign: 'middle' }}>
              Estamos a la espera de la certificación de la app
              <HeartBrokenIcon sx={{ mx: 1, verticalAlign: 'middle' }} />
            </Typography>
          </Grid>
          <Grid item>
            <SpecialCommonButton onClick={goML}>Continuar</SpecialCommonButton>
          </Grid>
        </Grid>
      </DialogContent>
    </StyledDialog>
  )
}

export default RedirectML

import { Box, Button } from '@mui/material'
import {
  newFiumbiFormClientid,
  newFiumbiFormRedirect_uri,
  newFiumbiFormScope,
} from '../../utils/globalConst'
import { SpecialCommonButton } from '../commons/SpecialButtons'

const SincFav = () => {
  const handliClickFavButton = () => {
    const to = `https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=${newFiumbiFormClientid}&redirect_uri=${newFiumbiFormRedirect_uri}&scope=${newFiumbiFormScope}`
    window.location.href = to
  }
  return (
    <Box sx={{ width: { xs: '100%', sm: 'auto' } }}>
      <SpecialCommonButton
        variant="contained"
        color="success"
        sx={{ width: { xs: '100%', sm: 'auto' } }}
        onClick={handliClickFavButton}
      >
        Sincronizar favoritos
      </SpecialCommonButton>
    </Box>
  )
}

export default SincFav

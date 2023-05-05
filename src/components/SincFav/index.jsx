import { Box, Button } from '@mui/material'
import { SincFavMLProduct } from '../../../api/fiumbiProducts'
import {
  newFiumbiFormClientid,
  newFiumbiFormRedirect_uri,
  newFiumbiFormScope,
} from '../../utils/globalConst'

const SincFav = () => {
  const handliClickFavButton = () => {
    const to = `https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=${newFiumbiFormClientid}&redirect_uri=${newFiumbiFormRedirect_uri}&scope=${newFiumbiFormScope}`
    window.location.href = to
  }
  return (
    <Box sx={{ width: { xs: '100%', sm: 'auto' } }}>
      <Button
        variant="outlined"
        sx={{ width: { xs: '100%', sm: 'auto' } }}
        onClick={handliClickFavButton}
      >
        Sincronizar favoritos
      </Button>
    </Box>
  )
}

export default SincFav

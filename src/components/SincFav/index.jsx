import { Box, Button } from '@mui/material'
import { SincFavMLProduct } from '../../../api/fiumbiProducts'

const SincFav = () => {
  const { data, execute } = SincFavMLProduct()
  return (
    <Box sx={{ width: { xs: '100%', sm: 'auto' } }}>
      <Button variant="outlined" sx={{ width: { xs: '100%', sm: 'auto' } }}>
        Sincronisar favoritos
      </Button>
    </Box>
  )
}

export default SincFav

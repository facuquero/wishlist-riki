import { useEffect } from 'react'
import { useCalculateShippingCost } from '../../../api/useUsersAPI'
import Typography from '../commons/Typography'
import { CircularProgress } from '@mui/material'

const ShippingPrice = ({ productID }) => {
  const { execute, data, isLoading, isError } = useCalculateShippingCost()
  let isRenderCompontent = false
  useEffect(() => {
    if (!isRenderCompontent) {
      isRenderCompontent = false
      execute({
        data: {
          product_id: productID,
        },
      })
    }
  }, [])
  console.log('isloading', isLoading)
  return (
    <Typography>
      Envio :
      {isLoading && (
        <CircularProgress
          sx={{ color: 'white' }}
          style={{ width: '16px', height: '16px' }}
        />
      )}
      {!isLoading && data && `$ ${data.data.shippingCost}`}
      {isError && 'Ocurrio un error al obtener el precio de envio'}
    </Typography>
  )
}

export default ShippingPrice

import { Grid, Pagination, useTheme } from '@mui/material'
import Typography from '../commons/Typography'
import { useEffect, useState } from 'react'
import styles from '../../assets/styles/fiumbiOrdersList.module.scss'
import { useGetClientOrders } from '../../../api/useOrders'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const FiumbiOrdersList = () => {
  const { execute, data, isLoading } = useGetClientOrders()
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(1)

  const isRenderFiumbiList =
    data && data?.data?.orders?.length > 0 && !isLoading

  let initialized = false
  useEffect(() => {
    if (!initialized) {
      initialized = true
      execute({
        data: {
          page: 0,
        },
      })
    }
  }, [])

  useEffect(() => {
    if (data?.data?.totalPages != count) {
      setCount(data?.data?.totalPages || 1)
    }
  }, [data])

  const handleChangePagination = () => {
    setPage
    setCount
  }

  return (
    <Grid
      container
      sx={{ py: 2, maxWidth: 1200, mx: 'auto' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
    >
      {isRenderFiumbiList && (
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Producto</TableCell>
                  <TableCell>Nota del comprador</TableCell>
                  <TableCell>Estado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  //data.data.orders.map((order, index) => (
                  data?.data?.orders.map((order, index) => (
                    <TableRow
                      key={`order-datatable-${index}`}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <img
                          src={order.product.thumbnail}
                          className={styles.imageFavList}
                          loading="lazy"
                          alt={`${index}-image-orders`}
                        />
                        {order.product.title}
                      </TableCell>
                      <TableCell>{order.note}</TableCell>
                      <TableCell>{order.observation}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
          <Grid container justifyContent="center" mt={3}>
            <Pagination
              color="primary"
              page={page}
              count={count}
              onPageChange={handleChangePagination}
            />
          </Grid>
        </Grid>
      )}

      {!isRenderFiumbiList && !isLoading && (
        <Grid container justifyContent="center">
          <Grid item>
            <Typography sx={{ color: 'white' }}>Sin ordenes</Typography>
          </Grid>
        </Grid>
      )}
      {isLoading && (
        <Grid container>
          <Grid item>
            <Typography sx={{ color: 'white' }}>Cargando...</Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

export default FiumbiOrdersList

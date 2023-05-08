import { Box, Grid } from '@mui/material'
import Typography from '../commons/Typography'
import { getListByUsernameInactive } from '../../../api/fiumbiProducts'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import styles from '../../assets/styles/fiumbiList.module.scss'
import ReActiveFiumbiFavorite from '../ReActiveFiumbiFavorite'
import { Virtuoso } from 'react-virtuoso'

const FiumbiListInactive = () => {
  const { execute, data, isLoading } = getListByUsernameInactive()
  const loaderData = useLoaderData()
  const isRenderFiumbiList =
    data && data?.data?.listFav?.length > 0 && !isLoading

  const reloadSearch = () => {
    execute({
      data: {
        userId: loaderData.params.fiumbiListUsername,
      },
    })
  }
  let initialized = false
  useEffect(() => {
    if (!initialized) {
      initialized = true
      execute({
        data: {
          userId: loaderData.params.fiumbiListUsername,
        },
      })
    }
  }, [])

  return (
    <Grid
      container
      sx={{ py: 2, maxWidth: 1200, mx: 'auto' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
    >
      {isRenderFiumbiList && (
        <Virtuoso
          style={{ height: 'max(60vh, 600px)', width: '100%' }}
          data={data.data.listFav}
          itemContent={(index, favItem) => (
            <Grid
              container
              key={index}
              className={styles.cardFavList}
              borderRadius={2}
              m={2}
              p={2}
              width="95%"
              mx="auto"
              alignItems="center"
            >
              <Grid
                container
                borderRadius={4}
                display={{ xs: 'flex', md: 'block' }}
                justifyContent="center"
                width={{ xs: '100%', md: '15%' }}
                maxWidth={{ xs: '100%', md: '200px' }}
              >
                <img
                  src={favItem.thumbnail}
                  loading="lazy"
                  alt="meliThumbnail"
                  className={styles.imageFavList}
                />
              </Grid>
              <Grid
                item
                borderRadius={4}
                xs={12}
                md={6}
                p={4}
                display={{ xs: 'flex', md: 'block' }}
                justifyContent="center"
                sx={{ overflowWrap: 'break-word', width: 'auto' }}
              >
                <Typography variant="h5">{favItem.title}</Typography>
                <Typography variant="h6">Precio: {favItem.price}</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md="auto"
                display={{ xs: 'flex', md: 'block' }}
                justifyContent="center"
                ml="auto"
                mr={{ xs: 'auto', md: 0 }}
              >
                <ReActiveFiumbiFavorite
                  id={favItem.id}
                  fiumbiTitle={favItem.title}
                  reloadSearch={reloadSearch}
                />
              </Grid>
            </Grid>
          )}
        />
      )}

      {!isRenderFiumbiList && !isLoading && (
        <Grid container justifyContent="center">
          <Grid item>
            <Typography sx={{ color: 'white' }}>Sin inactivos</Typography>
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

export default FiumbiListInactive

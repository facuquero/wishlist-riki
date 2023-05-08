import { useEffect } from 'react'
import { Grid } from '@mui/material'
import Typography from '../commons/Typography'
import ButtonFiumbiML from '../ButtonFiumbiML'
import { getListActiveByUsername } from '../../../api/fiumbiProducts'
import useAuth from '../../hooks/useAuth'
import { Navigate, useLoaderData } from 'react-router-dom'
import styles from '../../assets/styles/fiumbiList.module.scss'
import DeleteFiumbiFavorite from '../DeleteFiumbiFavorite'
import { Virtuoso } from 'react-virtuoso'

const FiumbiListActive = () => {
  const { execute, data, isLoading } = getListActiveByUsername()
  const loaderData = useLoaderData()
  const { auth } = useAuth()
  const isSameUserAsFiumbiUser =
    auth?.username == loaderData?.params?.fiumbiListUsername

  const isRenderFiumbiList =
    data && data?.data?.listFav?.length > 0 && !isLoading

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

  if (data && data?.data?.listFav === null && !isSameUserAsFiumbiUser) {
    return <Navigate to="/" />
  }

  const reloadSearch = () => {
    execute({
      data: {
        userId: loaderData.params.fiumbiListUsername,
      },
    })
  }

  return (
    <Grid
      container
      sx={{ py: 2, maxWidth: 1200, mx: 'auto' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} sx={{ pb: 2 }} flex>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item>
            <Typography sx={{ color: 'black' }} variant="h3">
              Fiumbi favoritos de {loaderData?.params?.fiumbiListUsername}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {isRenderFiumbiList && (
        <Grid item xs={12} border={1} borderColor="gray" borderRadius={1} flex>
          <Virtuoso
            style={{ height: 'max(60vh, 600px)', width: '100%' }}
            data={data.data.listFav}
            itemContent={(index, favItem) => (
              <Grid
                container
                className={styles.cardFavList}
                m={2}
                p={2}
                alignItems="center"
                width="95%"
                mx="auto"
                key={index}
              >
                <Grid
                  container
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
                  sx={{
                    overflowWrap: 'break-word',
                    width: 'auto',
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                  flexWrap="wrap"
                  justifyItems="center"
                  flexDirection={{ xs: 'column', md: 'row' }}
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
                  mr={{ xs: 'auto', md: 1 }}
                >
                  {!isSameUserAsFiumbiUser && (
                    <ButtonFiumbiML
                      fiumbiTitle={favItem.title}
                      productID={favItem.id}
                      fiumbiUsername={loaderData.params.fiumbiListUsername}
                      imgThumbnail={favItem.thumbnail}
                    />
                  )}
                  {isSameUserAsFiumbiUser && (
                    <DeleteFiumbiFavorite
                      id={favItem.id}
                      fiumbiTitle={favItem.title}
                      reloadSearch={reloadSearch}
                    />
                  )}
                </Grid>
              </Grid>
            )}
          />
        </Grid>
      )}
      {!isRenderFiumbiList && !isLoading && (
        <Grid container justifyContent="center">
          <Grid item>
            <Typography sx={{ color: 'white' }}>Sin favoritos</Typography>
          </Grid>
        </Grid>
      )}
      {isLoading && (
        <Grid item>
          <Typography sx={{ color: 'white' }}>Cargando...</Typography>
        </Grid>
      )}
    </Grid>
  )
}

export default FiumbiListActive

import { useEffect } from 'react'
import { Grid, useTheme } from '@mui/material'
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
  const theme = useTheme()
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
    <Grid container>
      <Grid item xs={12} sx={{ pb: 2 }} flex>
        <Grid container justifyContent="space-around">
          <Grid item>
            <Typography
              sx={{ color: theme.palette.customGold.at239a1 }}
              variant="h4"
            >
              @{loaderData?.params?.fiumbiListUsername}
            </Typography>
          </Grid>
          <Grid item> </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          py: 2,
          maxWidth: 1200,
          mx: 'auto',
          width: '100%',
        }}
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
      >
        {isRenderFiumbiList && (
          <Grid
            item
            xs={12}
            border={1}
            borderColor="gray"
            borderRadius={1}
            sx={{
              mx: {
                sx: 2,
                md: 4,
                background: `linear-gradient(to right bottom, ${theme.palette.customGold.at239a1}, ${theme.palette.customGold.at140a1} 90%)`,
              },
            }}
            flex
          >
            <Virtuoso
              style={{ height: 'max(60vh, 600px)', width: '100%' }}
              data={data.data.listFav}
              itemContent={(index, favItem) => (
                <Grid
                  container
                  className={styles.cardFavList}
                  m={2}
                  p={2}
                  width="95%"
                  mx="auto"
                  key={index}
                >
                  <Grid
                    item
                    display={{ xs: 'flex' }}
                    justifyContent="center"
                    xs={12}
                    md={4}
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
                    xs={12}
                    md={4}
                    sx={{ display: 'flex', flexGrow: 1 }}
                  >
                    <Grid
                      container
                      flexGrow={1}
                      flexDirection="column"
                      justifyContent="space-around"
                    >
                      <Grid item>
                        <Typography variant="h5">{favItem.title}</Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="h4"
                          sx={{
                            mt: 'auto',
                            mb: 0,
                            fontWeight: 'bold',
                          }}
                        >
                          ${favItem.price}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
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
    </Grid>
  )
}

export default FiumbiListActive

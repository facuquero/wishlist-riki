import { useEffect } from 'react'
import { Box, Grid, useTheme } from '@mui/material'
import Typography from '../commons/Typography'
import ButtonFiumbiML from '../ButtonFiumbiML'
import { getListActiveByUsername } from '../../../api/fiumbiProducts'
import useAuth from '../../hooks/useAuth'
import { Navigate, useLoaderData } from 'react-router-dom'
import styles from '../../assets/styles/fiumbiList.module.scss'
import DeleteFiumbiFavorite from '../DeleteFiumbiFavorite'
import { Virtuoso } from 'react-virtuoso'
import MyPhrase from '../MyPhrase'

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
        <Grid container>
          <Grid
            item
            sx={{
              maxWidth: 1200,
              mx: 'auto',
              width: '100%',
            }}
          >
            <Typography
              my={1}
              sx={{
                color: theme.palette.customGold.at239a1,
                textShadow: '3px 5px 8px rgba(0, 0, 0, 0.45)',
              }}
              variant="h4"
              fontWeight="bold"
            >
              @{loaderData?.params?.fiumbiListUsername}
            </Typography>
            {isRenderFiumbiList && (
              <MyPhrase actualPhrase={data?.data?.phrase?.phrase} />
            )}
          </Grid>
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
              mx: 'auto',
              width: '100%',
              background: 'transparent',
              py: 3,
            }}
          >
            <Virtuoso
              style={{ height: 'max(60vh, 600px)', width: '100%' }}
              data={data.data.listFav}
              itemContent={(index, favItem) => (
                <Grid
                  container
                  m={4}
                  mt={0}
                  py={3}
                  width="95%"
                  mx="auto"
                  borderRadius={2}
                  key={index}
                  sx={{
                    background: `white`,
                  }}
                >
                  <Grid
                    item
                    display={{ xs: 'flex' }}
                    justifyContent="center"
                    xs={12}
                    md={2}
                    width="100%"
                  >
                    <img
                      src={favItem.thumbnail}
                      loading="lazy"
                      alt={`meliThumbnail-${index}`}
                      className={styles.imageFavList}
                      style={{
                        padding: '10px',
                        borderRadius: '16px',
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={7}
                    sx={{ display: 'flex', flexGrow: 1 }}
                  >
                    <Grid
                      container
                      flexGrow={1}
                      flexDirection="column"
                      justifyContent="center"
                      sx={{ textAlign: { xs: 'center', md: 'start' } }}
                    >
                      <Grid item>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                          {favItem.title}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="h5"
                          sx={{
                            my: { xs: 2, md: 1 },
                            mb: 0,
                          }}
                        >
                          ${favItem.price} + Envío
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={3}
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
                        fiumbiPrice={favItem.price}
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

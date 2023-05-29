import { Box, Grid, useTheme } from '@mui/material'
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
  const theme = useTheme()

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
          }}
        >
          <Virtuoso
            style={{ height: 'max(60vh, 600px)', width: '100%' }}
            data={data.data.listFav}
            itemContent={(index, favItem) => (
              <Grid
                container
                key={index}
                className={styles.cardFavList}
                borderRadius={2}
                m={4}
                py={4}
                width="95%"
                mx="auto"
                alignItems="center"
                sx={{
                  background: `linear-gradient(120deg, ${theme.palette.customGold.at254a1}, ${theme.palette.customGold.at254a04} 25%)`,
                }}
              >
                <Grid
                  container
                  display={{ xs: 'flex' }}
                  justifyContent="center"
                  xs={12}
                  md={4}
                  width="100%"
                >
                  <img
                    src={favItem.thumbnail}
                    loading="lazy"
                    alt="meliThumbnail"
                    className={styles.imageFavList}
                    style={{
                      padding: '10px',
                      borderRadius: '16px',
                      border: 'solid 1px',
                      background: `linear-gradient(315deg, ${theme.palette.customGold.at254a04} 0%,${theme.palette.customGold.at254a1} 50%, ${theme.palette.customGold.at254a04} 100%)`,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4} sx={{ display: 'flex', flexGrow: 1 }}>
                  <Grid
                    container
                    flexGrow={1}
                    flexDirection="column"
                    justifyContent="space-around"
                    sx={{ textAlign: { xs: 'center', md: 'start' } }}
                  >
                    <Grid item>
                      <Typography variant="h5">{favItem.title}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h4"
                        sx={{
                          my: { xs: 2, md: 'auto' },
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
                  <ReActiveFiumbiFavorite
                    id={favItem.id}
                    fiumbiTitle={favItem.title}
                    reloadSearch={reloadSearch}
                  />
                </Grid>
              </Grid>
            )}
          />
        </Grid>
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

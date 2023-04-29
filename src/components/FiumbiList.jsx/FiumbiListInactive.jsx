import { Box, Grid } from '@mui/material'
import Typography from '../commons/Typography'
import { getListByUsernameInactive } from '../../../api/fiumbiProducts'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import styles from '../../assets/styles/fiumbiList.module.scss'
import ReActiveFiumbiFavorite from '../ReActiveFiumbiFavorite'

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

  useEffect(() => {
    execute({
      data: {
        userId: loaderData.params.fiumbiListUsername,
      },
    })
  }, [])

  return (
    <Grid
      container
      sx={{ py: 2 }}
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
    >
      {isRenderFiumbiList &&
        data.data.listFav.map((fav, index) => (
          <Grid
            container
            key={index}
            className={styles.cardFavList}
            borderRadius={4}
            m={2}
            p={2}
            alignItems="center"
            width={{ xs: 'fit-content', md: '100%' }}
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
                src={fav.thumbnail}
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
              <Typography>{fav.title}</Typography>
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
                id={fav.id}
                fiumbiTitle={fav.title}
                reloadSearch={reloadSearch}
              />
            </Grid>
          </Grid>
        ))}

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

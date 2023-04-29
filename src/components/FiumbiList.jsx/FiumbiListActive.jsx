import { useEffect } from 'react'
import { Grid } from '@mui/material'
import Typography from '../commons/Typography'
import ButtonFiumbiML from '../ButtonFiumbiML'
import { getListActiveByUsername } from '../../../api/fiumbiProducts'
import useAuth from '../../hooks/useAuth'
import { Navigate, useLoaderData } from 'react-router-dom'
import styles from '../../assets/styles/fiumbiList.module.scss'
import DeleteFiumbiFavorite from '../DeleteFiumbiFavorite'

const FiumbiListActive = () => {
  const { execute, data, isLoading } = getListActiveByUsername()
  const loaderData = useLoaderData()
  const { auth } = useAuth()
  const isSameUserAsFiumbiUser =
    auth?.username == loaderData?.params?.fiumbiListUsername

  const isRenderFiumbiList =
    data && data?.data?.listFav?.length > 0 && !isLoading

  useEffect(() => {
    execute({
      data: {
        userId: loaderData.params.fiumbiListUsername,
      },
    })
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
              mr={{ xs: 'auto', md: 1 }}
            >
              {!isSameUserAsFiumbiUser && (
                <ButtonFiumbiML
                  fiumbiTitle={fav.title}
                  productID={fav.id}
                  fiumbiUsername={loaderData.params.fiumbiListUsername}
                  imgThumbnail={fav.thumbnail}
                />
              )}
              {isSameUserAsFiumbiUser && (
                <DeleteFiumbiFavorite
                  id={fav.id}
                  fiumbiTitle={fav.title}
                  reloadSearch={reloadSearch}
                />
              )}
            </Grid>
          </Grid>
        ))}
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

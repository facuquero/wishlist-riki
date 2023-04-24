import React, { useEffect } from 'react'
import { useLoaderData, Navigate } from 'react-router-dom'
import { getListByUsername } from '../../api/fiumbiProducts'
import { Grid, useTheme } from '@mui/material'
import ButtonFiumbiML from '../components/ButtonFiumbiML'
import styles from '../assets/styles/fiumbiList.module.scss'
import Typography from '../components/commons/Typography'
const FiumbiList = () => {
  const loaderData = useLoaderData()
  const { execute, data, isLoading } = getListByUsername()
  const theme = useTheme()
  useEffect(() => {
    execute({
      data: {
        userId: loaderData.params.fiumbiListUsername,
      },
    })
  }, [])

  if (data && !data?.data.listFav) {
    return <Navigate to="/" />
  }

  return (
    <Grid
      sx={{
        backgroundColor: '#4f5bd5',
        p: 4,
      }}
      container
    >
      <Grid item xs={12} sx={{ py: 2 }}>
        <Typography sx={{ color: 'white' }}>Fiumbi favoritos</Typography>
      </Grid>
      <Grid
        container
        sx={{ py: 2 }}
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
      >
        {data &&
          data.data.listFav.length > 0 &&
          data.data.listFav.map((fav, index) => (
            <Grid
              container
              key={index}
              className={styles.cardFavList}
              borderRadius={4}
              m={2}
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
                md={2}
                display={{ xs: 'flex', md: 'block' }}
                justifyContent="center"
                ml="auto"
                mr={{ xs: 'auto', md: 0 }}
              >
                <ButtonFiumbiML
                  fiumbiTitle={fav.title}
                  productID={fav.id}
                  fiumbiUsername={loaderData.params.fiumbiListUsername}
                  imgThumbnail={fav.thumbnail}
                />
              </Grid>
            </Grid>
          ))}
        {isLoading && (
          <Grid container>
            <Grid item>
              <Typography sx={{ color: 'white' }}>Cargando...</Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  )
}

export default FiumbiList

export const getFiumbiList = (loaderData) => {
  return loaderData
}

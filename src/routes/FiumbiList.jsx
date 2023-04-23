import React, { useEffect } from 'react'
import { useLoaderData, Navigate } from 'react-router-dom'
import { getListByUsername } from '../../api/fiumbiProducts'
import { Grid } from '@mui/material'
import ButtonFiumbiML from '../components/ButtonFiumbiML'
import styles from '../assets/styles/fiumbiList.module.scss'

const FiumbiList = () => {
  const loaderData = useLoaderData()
  const { execute, data, isLoading } = getListByUsername()

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
        Fiumbi favoritos
      </Grid>
      <Grid container sx={{ py: 2 }}>
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
            >
              <Grid item xs="auto" borderRadius={4}>
                <img
                  src={fav.thumbnail}
                  loading="lazy"
                  alt="meliThumbnail"
                  className={styles.imageFavList}
                />
              </Grid>

              <Grid
                container
                p={4}
                sx={{ overflowWrap: 'break-word', width: 'auto' }}
              >
                {fav.title} aasd
              </Grid>
              <Grid item justifyContent="flex-end" ml="auto" mr={4}>
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
            <Grid item> Cargando</Grid>
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

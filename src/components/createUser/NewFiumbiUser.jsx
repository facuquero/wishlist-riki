import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  TextField,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Typography from '../commons/Typography'
import { validateUsername } from '../../../api/useUsersAPI'

const NewFiumbiUser = ({ handleClickCreateWishlist }) => {
  const [wishlist, setWishlist] = useState('')
  const [isFiumbiFree, setIsFiumbiFree] = useState(false)
  const { execute, data, isLoading, error, isError } = validateUsername()

  const onChangeWishlistName = (e) => {
    setWishlist(e.target.value)
  }

  const handleClickCreate = () => {
    if (!isFiumbiFree) return
    handleClickCreateWishlist({ wishlist })
  }

  const reayToChecKUsername = wishlist && wishlist.length > 2

  useEffect(() => {
    setIsFiumbiFree(false)
    if (!reayToChecKUsername) {
      setIsFiumbiFree(false)
    }
    if (reayToChecKUsername) {
      const checking = setTimeout(() => {
        execute({
          data: {
            username: wishlist,
          },
        })
      }, 750)
      return () => clearTimeout(checking)
    }
  }, [wishlist])

  useEffect(() => {
    if (data?.status == 200) {
      setIsFiumbiFree(true)
    }
    console.log('data', data)
    console.log('error', error)
  }, [data, error, isLoading])

  return (
    <Box>
      <Typography
        sx={{
          color: '#4f5bd5',
          textAlign: 'center',
          fontWeight: 700,
          fontSize: { xs: '1.5rem', md: '2.125rem' },
          mb: 2,
        }}
      >
        CREÁ UNA FIUMBI Y COMPARTILA
      </Typography>
      <Box sx={{ width: '100%' }}>
        <TextField
          placeholder="Nombre de tu wishlist"
          fullWidth
          onChange={onChangeWishlistName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FavoriteIcon sx={{ color: '#4f5bd5' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {isLoading && <CircularProgress />}
              </InputAdornment>
            ),
          }}
          sx={{
            fieldset: {
              borderWidth: 2,
              borderRadius: 10,
            },
          }}
        />
        <Box
          flexDirection="column"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ paddingTop: 2 }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: 10 }}
            size="large"
            onClick={handleClickCreate}
            disabled={!isFiumbiFree || !reayToChecKUsername}
          >
            <Typography sx={{ fontWeight: 700 }} variant="h5">
              CREAR WISHLIST
            </Typography>
          </Button>
        </Box>
        {isError && (
          <Box mt={2} sx={{ textAlign: 'center' }}>
            <Typography>A ocurrido un error:</Typography>
            <Typography>{error?.response?.data?.data}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default NewFiumbiUser

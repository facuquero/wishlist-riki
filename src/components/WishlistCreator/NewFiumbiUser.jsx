import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, InputAdornment, useTheme } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Typography from '../commons/Typography'
import { validateUsername } from '../../../api/useUsersAPI'
import { TextField } from '../commons/TextField'
import { SpecialCommonButton } from '../commons/SpecialButtons'

const NewFiumbiUser = ({ handleClickCreateWishlist }) => {
  const theme = useTheme()
  const [wishlist, setWishlist] = useState('')
  const [isFiumbiFree, setIsFiumbiFree] = useState(false)
  const { execute, data, isLoading, error, isError } = validateUsername()
  const [fakeIsLoading, setFaceIsLoading] = useState(false)

  const onChangeWishlistName = (e) => {
    setWishlist(e.target.value)
  }

  const handleClickCreate = () => {
    if (!isFiumbiFree) return
    handleClickCreateWishlist({ wishlist })
  }

  const reayToChecKUsername = wishlist && wishlist.length > 2
  let initialized = false
  useEffect(() => {
    setIsFiumbiFree(false)
    if (wishlist?.length > 2) {
      setFaceIsLoading(true)
    }
    if (!reayToChecKUsername) {
      setIsFiumbiFree(false)
    }
    if (reayToChecKUsername) {
      const checking = setTimeout(() => {
        if (!initialized) {
          initialized = true
          execute({
            data: {
              username: wishlist,
            },
          })
        }
      }, 750)
      return () => clearTimeout(checking)
    }
  }, [wishlist])

  useEffect(() => {
    setFaceIsLoading(false)
    if (data?.status == 200) {
      setIsFiumbiFree(true)
    }

    if (isError) {
      setIsFiumbiFree(false)
    }
  }, [data, error, isLoading])

  return (
    <Box>
      <Typography
        paragraph
        sx={{
          color: theme.palette.customText.textWhiteLight,
          textAlign: 'center',
          fontSize: { xs: '1.5rem', md: '2.125rem' },
          fontWeight: 'bold',
          color: 'black',
          mb: 2,
        }}
      >
        Has tu wishlist y compártela para&nbsp;
        <Typography
          component="span"
          color={theme.palette.customGold.at254a1}
          sx={{
            fontWeight: 'inherit',
            fontSize: 'inherit',
          }}
        >
          recibir regalos!
        </Typography>
      </Typography>
      <Box sx={{ width: '100%' }}>
        <TextField
          label={`www.fiumbi/${wishlist}`}
          placeholder="Nombre de tu wishlist"
          fullWidth
          onChange={onChangeWishlistName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FavoriteIcon sx={{ color: theme.palette.customGold.dark }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {(isLoading || fakeIsLoading) && <CircularProgress />}
              </InputAdornment>
            ),
          }}
        />
        <Box
          flexDirection="column"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ paddingTop: 3 }}
        >
          <SpecialCommonButton
            variant="contained"
            size="large"
            onClick={handleClickCreate}
            disabled={!isFiumbiFree || !reayToChecKUsername}
          >
            <Typography sx={{ fontWeight: 700 }} variant="h5">
              CREAR WISHLIST
            </Typography>
          </SpecialCommonButton>
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

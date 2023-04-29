import React, { useEffect, useContext, useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { SlideTransition } from '../SlideTransition'
import { useLogin } from '../../../api/useUsersAPI'
import useAuth from '../../hooks/useAuth'

const DeleteFiumbiFavoriteModal = ({ showModalLogin, handleClose }) => {
  const { logIn } = useAuth()
  const { execute, data, isLoading, isError } = useLogin()
  const [usernameLogin, setUsernameLogin] = useState()

  const handleClickLogin = ({ username, password }) => {
    if (isLoading) return
    setUsernameLogin(username)
    execute({
      data: {
        username,
        password,
      },
    })
  }

  useEffect(() => {
    console.log('data', data)
    if (data?.status === 200) {
      console.log('data', data.data.token)
      usernameLogin
      logIn({ newUsername: usernameLogin, newUserToken: data.data.token })
      console.log('data', logIn)
    }
  }, [isLoading, data])

  return (
    <Dialog
      open={showModalLogin}
      TransitionComponent={SlideTransition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>
        <Grid container>
          <Grid item xs={12}>
            Seguro que desea sacar este item de sus favoritos?
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>texto para borrar</DialogContent>
    </Dialog>
  )
}

export default DeleteFiumbiFavoriteModal

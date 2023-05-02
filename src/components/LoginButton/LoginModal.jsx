import React, { useEffect, useContext, useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { SlideTransition } from '../SlideTransition'
import Typography from '../commons/Typography'
import { useLogin } from '../../../api/useUsersAPI'
import { LoginUserSchema } from '../../utils/schemasForm'
import { Formik, Form, Field } from 'formik'
import useAuth from '../../hooks/useAuth'

const LoginModal = ({ showModalLogin, handleClose }) => {
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

  const fieldInputsItems = [
    {
      field: 'username',
      label: 'Usuario',
    },
    {
      field: 'password',
      label: 'Contraseña',
      type: 'password',
    },
  ]

  useEffect(() => {
    if (data?.status === 200) {
      logIn({ newUsername: usernameLogin, newUserToken: data.data.token })
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
            Iniciar sesion
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={LoginUserSchema}
          onSubmit={({ username, password }) => {
            handleClickLogin({
              username,
              password,
            })
          }}
        >
          {({ errors, touched }) => (
            <Grid container>
              <Form style={{ width: '100%' }}>
                {fieldInputsItems.map((fieldItem, index) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      my={2}
                      key={`${index}-loginmodal-${fieldItem.field}`}
                    >
                      <Field name={fieldItem.field}>
                        {({ field }) => (
                          <TextField
                            fullWidth
                            label={fieldItem.label}
                            variant="outlined"
                            type={fieldItem.type || 'text'}
                            {...field}
                            error={
                              errors[fieldItem.field] &&
                              touched[fieldItem.field]
                            }
                            sx={{
                              fieldset: {
                                borderWidth: 2,
                                borderRadius: 10,
                              },
                            }}
                          />
                        )}
                      </Field>
                      {errors[fieldItem.field] && touched[fieldItem.field] ? (
                        <Typography my={1} sx={{ color: 'red' }}>
                          {errors[fieldItem.field]}
                        </Typography>
                      ) : null}
                    </Grid>
                  )
                })}
                {isError && (
                  <Grid item xs={12}>
                    <Typography>
                      Algo ocurrio al intentar iniciar sesion, intente
                      nuevamente
                    </Typography>
                  </Grid>
                )}
                <Grid item xs={12} flex justifyContent="center" mb={1}>
                  {!data && (
                    <Button type="submit">
                      {!isLoading && 'Iniciar sesion'}
                      {isLoading && <CircularProgress />}
                    </Button>
                  )}
                  {data && 'Iniciando sesion'}
                </Grid>
              </Form>
            </Grid>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  )
}

export default LoginModal

import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '../commons/Typography'
import { useChangePassword } from '../../../api/useUsersAPI'
import { NewPasswordLostSchema } from '../../utils/schemasForm'
import { Formik, Form, Field } from 'formik'
import { SpecialLoginButton } from '../commons/SpecialButtons'
import TextField from '../commons/TextField'
import useAuth from '../../hooks/useAuth'

const ChangePassword = ({ user, token }) => {
  const { execute, data, isLoading, isError } = useChangePassword()
  const { logIn } = useAuth()

  const handleClickPasswordLost = ({ password }) => {
    if (isLoading) return
    execute({
      data: {
        username: user,
        password,
      },
    })
  }

  const fieldInputsItems = [
    {
      field: 'password',
      label: 'Nueva contraseña',
      type: 'password',
    },
    {
      field: 'confirmPassword',
      label: 'Repetir contraseña',
      type: 'password',
    },
  ]

  useEffect(() => {
    if (data?.status === 200) {
      logIn({ newUsername: user, newUserToken: token })
    }
  }, [isLoading, data])

  return (
    <Grid container>
      <Grid item xs={12}>
        {data?.status !== 200 && (
          <Typography color="white">
            Para finalizar ingrese la nueva contraseña
          </Typography>
        )}

        {data?.status == 200 && (
          <Typography color="white">
            Contraseña cambiada, ya podes continuar/
          </Typography>
        )}
      </Grid>
      {data?.status !== 200 && (
        <Grid item xs={12}>
          <Formik
            initialValues={{
              password: '',
              confirmPassword: '',
            }}
            validationSchema={NewPasswordLostSchema}
            onSubmit={({ password }) => {
              handleClickPasswordLost({
                password,
              })
            }}
          >
            {({ errors, touched }) => (
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
                  <Grid item xs={12} pb={1}>
                    <Typography color="white">
                      Algo ocurrio al intentar cambiar la contraseña, intente
                      nuevamente
                    </Typography>
                  </Grid>
                )}
                <Grid
                  item
                  xs={12}
                  flex
                  justifyContent="center"
                  mb={1}
                  display="flex"
                >
                  {!data && (
                    <SpecialLoginButton type="submit">
                      {!isLoading && 'Recuperar contraseña'}
                      {isLoading && <CircularProgress />}
                    </SpecialLoginButton>
                  )}
                  {data && (
                    <Grid item xs={12} pb={1}>
                      <Typography color="white">
                        Se envio un correo al email con los pasos a seguir
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              </Form>
            )}
          </Formik>{' '}
        </Grid>
      )}
    </Grid>
  )
}

export default ChangePassword

import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '../commons/Typography'
import { forgotPassword } from '../../../api/useUsersAPI'
import { PasswordLostSchema } from '../../utils/schemasForm'
import { Formik, Form, Field } from 'formik'
import { SpecialLoginButton } from '../commons/SpecialButtons'
import TextField from '../commons/TextField'

const PasswordLost = ({ onClickForgot }) => {
  const { execute, data, isLoading, isError } = forgotPassword()
  const [userData, setUserData] = useState()
  const handleClickPasswordLost = ({ username, email }) => {
    if (isLoading) return
    execute({
      data: {
        username,
        email,
      },
    })
  }

  const fieldInputsItems = [
    {
      field: 'username',
      label: 'Usuario',
    },
    {
      field: 'email',
      label: 'Email',
    },
  ]

  useEffect(() => {
    if (data?.status === 200) {
      onClickForgot({ userData: userData.username, emailData: userData.email })
    }
  }, [isLoading, data])

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
      }}
      validationSchema={PasswordLostSchema}
      onSubmit={({ username, email }) => {
        setUserData({ username, email })
        handleClickPasswordLost({
          username,
          email,
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
                        errors[fieldItem.field] && touched[fieldItem.field]
                      }
                    />
                  )}
                </Field>
                {errors[fieldItem.field] && touched[fieldItem.field] ? (
                  <Typography my={1} color="error.main">
                    {errors[fieldItem.field]}
                  </Typography>
                ) : null}
              </Grid>
            )
          })}
          {isError && (
            <Grid item xs={12} pb={1}>
              <Typography color="white">
                Algo ocurrio al intentar recuperar la contraseña, intente
                nuevamente
              </Typography>
            </Grid>
          )}
          <Grid item xs={12} flex justifyContent="center" mb={1} display="flex">
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
    </Formik>
  )
}

export default PasswordLost

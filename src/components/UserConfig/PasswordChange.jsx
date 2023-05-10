import { CircularProgress, Grid, useTheme } from '@mui/material'
import Typography from '../commons/Typography'
import { ChangePasswordSchema } from '../../utils/schemasForm'
import { Formik, Form, Field } from 'formik'
import TextField from '../commons/TextField'
import { SpecialCommonButton } from '../commons/SpecialButtons'
import { useChangePassword } from '../../../api/useUsersAPI'
import useAuth from '../../hooks/useAuth'

const PasswordChange = () => {
  const theme = useTheme()
  const { execute, data, isLoading, isError } = useChangePassword()
  const { auth } = useAuth()
  const fieldInputsItems = [
    {
      field: 'lastPassword',
      label: 'Ultima contraseña',
      type: 'password',
    },
    {
      field: 'password',
      label: 'Contraseña',
      type: 'password',
    },
    {
      field: 'confirmPassword',
      label: 'Repetir contraseña',
      type: 'password',
    },
  ]

  return (
    <Grid container p={4}>
      <Grid item xs={12}>
        <Typography color={theme.palette.customText.textWhiteLight}>
          Cambiar contraseña
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container>
          <Formik
            initialValues={{
              lastPassword: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={ChangePasswordSchema}
            onSubmit={({ lastPassword, password, confirmPassword }) => {
              execute({ data: lastPassword, password, username: auth.username })
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
                        Algo ocurrio al intentar cambiar contraseña, intente
                        nuevamente
                      </Typography>
                    </Grid>
                  )}
                  <Grid item xs={12} flex justifyContent="center" mb={1}>
                    {!data && (
                      <SpecialCommonButton type="submit">
                        {!isLoading && 'Cambiar contraseña'}
                        {isLoading && <CircularProgress />}
                      </SpecialCommonButton>
                    )}
                    {data && <Typography>Contraseña cambiada</Typography>}
                  </Grid>
                </Form>
              </Grid>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PasswordChange

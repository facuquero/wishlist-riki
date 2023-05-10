import { CircularProgress, Grid, useTheme } from '@mui/material'
import Typography from '../commons/Typography'
import { NewShippingAddressSchema } from '../../utils/schemasForm'
import { Formik, Form, Field } from 'formik'
import TextField from '../commons/TextField'
import { SpecialCommonButton } from '../commons/SpecialButtons'
import { useChangePassword } from '../../../api/useUsersAPI'
import useAuth from '../../hooks/useAuth'

const NewShippingAddress = () => {
  const theme = useTheme()
  const { execute, data, isLoading, isError } = useChangePassword()
  const { auth } = useAuth()
  const fieldInputsItems = [
    {
      field: 'newShippingAddress',
      label: 'Nuevo domicilio de entrega',
    },
  ]

  return (
    <Grid container p={4}>
      <Grid item xs={12}>
        <Typography color={theme.palette.customText.textWhiteLight}>
          Cambiar domicilio de entrega
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container>
          <Formik
            initialValues={{
              newShippingAddress: '',
            }}
            validationSchema={NewShippingAddressSchema}
            onSubmit={({ newShippingAddress }) => {
              execute({ data: newShippingAddress, username: auth.username })
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
                        key={`${index}-shippingAddress-${fieldItem.field}`}
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
                        Algo ocurrio al intentar cambiar el nuevo domicilio,
                        intente nuevamente
                      </Typography>
                    </Grid>
                  )}
                  <Grid item xs={12} flex justifyContent="center" mb={1}>
                    {!data && (
                      <SpecialCommonButton type="submit">
                        {!isLoading && 'Cambiar domicilio'}
                        {isLoading && <CircularProgress />}
                      </SpecialCommonButton>
                    )}
                    {data && <Typography>Domicilio cambiada</Typography>}
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

export default NewShippingAddress

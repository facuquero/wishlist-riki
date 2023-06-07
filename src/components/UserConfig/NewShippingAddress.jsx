import { CircularProgress, Grid, useTheme } from '@mui/material'
import Typography from '../commons/Typography'
import { NewShippingAddressSchema } from '../../utils/schemasForm'
import { Formik, Form, Field } from 'formik'
import TextField from '../commons/TextField'
import { SpecialCommonButton } from '../commons/SpecialButtons'
import { useChangeShippingAddress } from '../../../api/useUsersAPI'
import useAuth from '../../hooks/useAuth'

const NewShippingAddress = () => {
  const theme = useTheme()
  const { execute, data, isLoading, isError } = useChangeShippingAddress()
  const { auth } = useAuth()
  const fieldInputsItems = [
    {
      field: 'newShippingAddress',
      label: 'Nuevo domicilio de entrega',
    },
  ]

  const submitNewShippingAddres = ({ newShippingAddress }) => {
    execute({
      data: {
        newShippingAddress: newShippingAddress,
        username: auth.username,
      },
    })
  }

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
              submitNewShippingAddres({
                newShippingAddress,
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
                          <Typography my={1} color="error.main">
                            {errors[fieldItem.field]}
                          </Typography>
                        ) : null}
                      </Grid>
                    )
                  })}
                  {isError && (
                    <Grid item xs={12}>
                      <Typography
                        sx={{ color: theme.palette.customText.textWhiteLight }}
                      >
                        Algo ocurrio al intentar cambiar el nuevo domicilio,
                        intente nuevamente
                      </Typography>
                    </Grid>
                  )}
                  <Grid item xs={12} flex justifyContent="center" mb={1}>
                    {
                      <SpecialCommonButton type="submit" disabled={isLoading}>
                        {!isLoading && 'Cambiar domicilio'}
                        {isLoading && <CircularProgress />}
                      </SpecialCommonButton>
                    }
                    {data && (
                      <Typography
                        sx={{ color: theme.palette.customText.textWhiteLight }}
                      >
                        Domicilio cambiada
                      </Typography>
                    )}
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

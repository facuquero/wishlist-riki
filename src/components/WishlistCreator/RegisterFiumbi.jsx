import React, { useEffect } from 'react'
import { Formik, Form, Field, useFormikContext } from 'formik'
import {
  Checkbox,
  CircularProgress,
  Fade,
  FormControlLabel,
  useTheme,
} from '@mui/material'
import { Box } from '@mui/system'
import { useCreateUser } from '../../../api/useUsersAPI'
import { NewUserSchema } from '../../utils/schemasForm'
import Typography from '../commons/Typography'
import { TextField } from '../commons/TextField'
import { SpecialCommonButton } from '../commons/SpecialButtons'
import TextFieldZipCode from './TextFields/TextFieldZipCode'
const RegisterFiumbi = ({
  wishlistName,
  handleClickCreatUser,
  setWishlisUser,
}) => {
  const theme = useTheme()
  const { execute, data, isLoading, isError, error } = useCreateUser()

  const NewUserSchemaToUse = NewUserSchema()
  const fieldInputsItems = [
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
    {
      field: 'name',
      label: 'Nombre',
    },
    {
      field: 'lastname',
      label: 'Apellido',
    },
    {
      field: 'DNI',
      label: 'DNI',
    },
    {
      field: 'email',
      label: 'Email',
    },

    {
      field: 'phone_number',
      label: 'Teléfono',
    },
    {
      field: 'shipping_address',
      label: 'Dirección',
    },
    {
      field: 'zip_code',
      label: 'Código postal',
      custom: 'zip_code',
    },
  ]

  const handleSubmitNewUser = ({ newUser }) => {
    const data = {
      ...newUser,
      username: wishlistName,
      phrase: 'Gracias por comprarme regalos!',
    }
    setWishlisUser(data)
    execute({
      data,
    })
  }

  useEffect(() => {
    if (data?.status === 201) {
      handleClickCreatUser()
    }
  }, [data, isLoading, isError, error])

  return (
    <Box>
      <Fade in>
        <Box
          sx={{
            width: '100%',
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            paragraph
            sx={{
              color: theme.palette.customText.textWhiteLight,
              textAlign: 'center',
              fontSize: { xs: '1.5rem', md: '2.125rem' },
              fontWeight: 'bold',
              mb: 2,
              textShadow: '3px 5px 8px rgba(0, 0, 0, 0.45)',
            }}
          >
            <Typography
              component="span"
              color={theme.palette.customGold.at254a1}
              sx={{
                fontWeight: 'inherit',
                fontSize: 'inherit',
              }}
            >
              Completa
            </Typography>
            &nbsp; los datos de entrega para recibir tus regalos
          </Typography>

          <Box
            sx={{
              w: '100%',
            }}
          >
            <Typography
              sx={{
                width: '100%',
                textAlign: 'center',
                text: 'center',
                color: theme.palette.customText.textWhiteLight,
              }}
            >
              Recuerda que los datos deben ser de quien recibirá los regalos
            </Typography>
          </Box>
          <Formik
            initialValues={{
              name: '',
              DNI: '',
              email: '',
              phone_number: '',
              shipping_address: '',
              termsAndConditions: false,
              password: '',
              lastname: '',
              zip_code: '',
            }}
            validationSchema={NewUserSchemaToUse}
            onSubmit={(values) => {
              handleSubmitNewUser({
                newUser: values,
              })
            }}
          >
            {({ errors, touched }) => (
              <Form style={{ width: '100%' }}>
                {fieldInputsItems.map((fieldItem, index) => {
                  return (
                    <Box sx={{ my: 2 }} key={`fieldInputsItems-${index}`}>
                      {fieldItem.field === 'password' && (
                        <Typography
                          sx={{
                            width: '100%',
                            color: theme.palette.customText.textWhiteLight,
                          }}
                          mb={1}
                        >
                          Usuario: {wishlistName || ''}
                        </Typography>
                      )}
                      {!fieldItem.custom && (
                        <Field
                          name={fieldItem.field}
                          validate={fieldItem.validate || null}
                        >
                          {({ field }) => (
                            <Box sx={{ display: 'flex' }}>
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
                                autoComplete="off"
                                inputProps={{ autoComplete: 'off' }}
                                size="small"
                              />
                            </Box>
                          )}
                        </Field>
                      )}
                      {fieldItem.custom === 'zip_code' && (
                        <Field
                          name={fieldItem.field}
                          validate={fieldItem.validate || null}
                        >
                          {({ field }) => (
                            <Box sx={{ display: 'flex' }}>
                              <TextFieldZipCode
                                fullWidth
                                label={fieldItem.label}
                                variant="outlined"
                                type={fieldItem.type || 'text'}
                                {...field}
                                error={
                                  errors[fieldItem.field] &&
                                  touched[fieldItem.field]
                                }
                                autoComplete="off"
                                inputProps={{ autoComplete: 'off' }}
                                size="small"
                              />
                            </Box>
                          )}
                        </Field>
                      )}
                      {errors[fieldItem.field] && touched[fieldItem.field] ? (
                        <Typography
                          color={theme.palette.customRed.errorRed}
                          mt={1}
                        >
                          {errors[fieldItem.field]}
                        </Typography>
                      ) : null}
                    </Box>
                  )
                })}

                <Box>
                  <Field
                    type="checkbox"
                    name="termsAndConditions"
                    as={FormControlLabel}
                    sx={{ color: theme.palette.customText.textWhiteLight }}
                    control={
                      <Checkbox
                        sx={{
                          color: theme.palette.customText.textWhiteLight,
                          '&.Mui-checked': {
                            color: theme.palette.customGold.lightHover,
                          },
                        }}
                      />
                    }
                    label={
                      <Typography variant="body2">
                        Estoy de acuerdo con los términos y condiciones
                      </Typography>
                    }
                  />
                  {errors.termsAndConditions && touched.termsAndConditions ? (
                    <Typography color="error.main">
                      {errors.termsAndConditions}
                    </Typography>
                  ) : null}
                </Box>
                <SpecialCommonButton
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ width: '100%', textTransform: 'none', mt: 2 }}
                >
                  <Typography variant="subtitle1">
                    {!isLoading && 'Registrarse'}
                  </Typography>
                  {isLoading && <CircularProgress sx={{ color: 'white' }} />}
                </SpecialCommonButton>
              </Form>
            )}
          </Formik>
          {isError && (
            <Box my={2} sx={{ textAlign: 'center' }}>
              <Typography>Ha ocurrido un error:</Typography>
              <Typography>{error?.response?.data?.message}</Typography>
            </Box>
          )}
        </Box>
      </Fade>
    </Box>
  )
}

export default RegisterFiumbi

import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import {
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'

const FormularioSchema = Yup.object().shape({
  email: Yup.string()
    .email('El email no es válido')
    .required('El email es obligatorio'),
  contraseña: Yup.string()
    .required('La contraseña es obligatoria')
    .min(4, 'La contraseña debe tener más de 4 caracteres'),
})

const LoginForm = () => {
  const navigate = useNavigate()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box
      flexDirection="column"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: '#4f5bd5',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          maxWidth: isMobile ? '70%' : 800,
          boxShadow: isMobile
            ? 'none'
            : '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
          borderRadius: 5,
          backgroundColor: '#ffff',
          maxHeight: isMobile ? '100%' : 800,
        }}
      >
        <Box
          sx={{
            width: isMobile ? '100%' : 400,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
          }}
        >
          <img
            src={
              'https://instasorteos.com/assets/img/logo/instasorteos-login.svg'
            }
            alt=""
            style={{ cursor: 'pointer' }}
            onClick={() => navigate({ pathname: '/' })}
          />
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Poppins',
              color: '#4f5bd5',
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            Regístrate para poder crear tu lista de regalos
          </Typography>
        </Box>
        <Formik
          initialValues={{
            email: '',
            contraseña: '',
          }}
          validationSchema={FormularioSchema}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {({ errors, touched }) => (
            <Form style={{ width: '100%' }}>
              <Box sx={{ my: 2 }}>
                <Field name="email">
                  {({ field }) => (
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      {...field}
                      error={errors.email && touched.email}
                      InputProps={{
                        style: {
                          fontFamily: 'Poppins',
                        },
                      }}
                      sx={{
                        fieldset: {
                          borderWidth: 2,
                          fontFamily: 'Poppins',
                          borderRadius: 10,
                        },
                        '& .MuiFormLabel-root': {
                          fontFamily: 'Poppins',
                        },
                      }}
                    />
                  )}
                </Field>
                {errors.email && touched.email ? (
                  <div style={{ color: 'red', fontFamily: 'Poppins' }}>
                    {errors.email}
                  </div>
                ) : null}
              </Box>

              <Box sx={{ my: 2 }}>
                <Field name="contraseña">
                  {({ field }) => (
                    <TextField
                      type="password"
                      fullWidth
                      label="Contraseña"
                      variant="outlined"
                      {...field}
                      error={errors.contraseña && touched.contraseña}
                      InputProps={{
                        style: {
                          fontFamily: 'Poppins',
                        },
                      }}
                      sx={{
                        fieldset: {
                          borderWidth: 2,
                          fontFamily: 'Poppins',
                          borderRadius: 10,
                        },
                        '& .MuiFormLabel-root': {
                          fontFamily: 'Poppins',
                        },
                      }}
                    />
                  )}
                </Field>
                {errors.contraseña && touched.contraseña ? (
                  <div style={{ color: 'red', fontFamily: 'Poppins' }}>
                    {errors.contraseña}
                  </div>
                ) : null}
              </Box>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ width: '100%', textTransform: 'none' }}
              >
                <Typography variant="subtitle1" sx={{ fontFamily: 'Poppins' }}>
                  Ingresar
                </Typography>
              </Button>
            </Form>
          )}
        </Formik>
        <Box
          sx={{ py: 2, cursor: 'pointer' }}
          onClick={() => navigate({ pathname: '/register' })}
        >
          <Typography variant="span" sx={{ fontFamily: 'Poppins' }}>
            ¿No estás registrado?{' '}
          </Typography>
          <Typography
            variant="span"
            sx={{ fontFamily: 'Poppins', fontWeight: 700 }}
          >
            Registrate
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default LoginForm

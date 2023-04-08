import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import {
  Button,
  Checkbox,
  CircularProgress,
  ClickAwayListener,
  FormControlLabel,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { useNavigate } from 'react-router-dom'
import { useCreateUser } from '../../../api/useUsersAPI'
import { NewUserSchema } from '../../utils/schemasForm'

const RegisterFiumbi = ({
  wishlistName,
  handleClickCreatUser,
  setWishlisUser,
}) => {
  const [open, setOpen] = useState(false)

  const { data, execute, isLoading } = useCreateUser()

  console.log('data', data)

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(true)
  }
  const navigate = useNavigate()

  const fieldInputsItems = [
    {
      field: 'name',
      label: 'Nombre',
    },
    {
      field: 'lastname',
      label: 'Apellido',
    },
    {
      field: 'username',
      label: 'Nombre de usuario',
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
      field: 'password',
      label: 'Contraseña',
      type: 'password',
    },
    {
      field: 'phone_number',
      label: 'Teléfono',
    },
    {
      field: 'shipping_address',
      label: 'Dirección',
      infoIcon: (
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Box>
            <Tooltip
              title={
                <Typography variant="body2" sx={{ fontFamily: 'Poppins' }}>
                  Necesitamos una dirección donde enviar el regalo
                </Typography>
              }
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              sx={{ fontFamily: 'Poppins' }}
            >
              <HelpOutlineIcon
                sx={{
                  mt: 1,
                  ml: 1,
                  color: '#4f5bd5',
                  width: '100%',
                  cursor: 'pointer',
                }}
                onClick={handleTooltipOpen}
              />
            </Tooltip>
          </Box>
        </ClickAwayListener>
      ),
    },
    {
      field: 'zip_code',
      label: 'Código postal',
    },
  ]

  const handleSubmitNewUser = ({ setSubmitting, newUser }) => {
    setWishlisUser(newUser)
    execute({
      data: newUser,
    })
  }

  useEffect(() => {
    if (data?.status === 201) {
      handleClickCreatUser()
    }
  }, [data])

  return (
    <Box
      sx={{
        width: '100%',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Poppins',
      }}
    >
      <Typography
        sx={{
          width: '100%',
          fontFamily: 'Poppins',
          color: '#4f5bd5',
          fontWeight: 700,
          textAlign: 'center',
          text: 'center',
          fontSize: { xs: '1.75rem', sm: '2.125rem' },
        }}
      >
        Regístrata {wishlistName || ''} para poder crear tu lista de regalos
      </Typography>

      <Formik
        initialValues={{
          name: '',
          DNI: '',
          email: '',
          phone_number: '',
          shipping_address: '',
          termsAndConditions: false,
          password: '',
          username: '',
          lastname: '',
          zip_code: '',
        }}
        validationSchema={NewUserSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmitNewUser({
            newUser: values,
            setSubmitting,
          })
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form style={{ width: '100%', fontFamily: 'Poppins' }}>
            {fieldInputsItems.map((fieldItem, index) => {
              return (
                <Box sx={{ my: 2 }} key={`fieldInputsItems-${index}`}>
                  <Field name={fieldItem.field}>
                    {({ field }) => (
                      <Box sx={{ display: 'flex' }}>
                        <TextField
                          fullWidth
                          label={fieldItem.label}
                          variant="outlined"
                          type={fieldItem.type || 'text'}
                          {...field}
                          error={
                            errors[fieldItem.field] && touched[fieldItem.field]
                          }
                          sx={{
                            fieldset: {
                              borderWidth: 2,
                              borderRadius: 10,
                            },
                            '& .MuiFormLabel-root': {
                              fontFamily: 'Poppins',
                            },
                          }}
                          size="small"
                        />
                        {fieldItem.infoIcon || null}
                      </Box>
                    )}
                  </Field>
                  {errors[fieldItem.field] && touched[fieldItem.field] ? (
                    <div style={{ color: 'red' }}>
                      {errors[fieldItem.field]}
                    </div>
                  ) : null}
                </Box>
              )
            })}

            <Box>
              <Field
                type="checkbox"
                name="termsAndConditions"
                as={FormControlLabel}
                control={<Checkbox />}
                label={
                  <Typography variant="body2" sx={{ fontFamily: 'Poppins' }}>
                    Estoy de acuerdo con los términos y condiciones
                  </Typography>
                }
              />
              {errors.termsAndConditions && touched.termsAndConditions ? (
                <div style={{ color: 'red', fontFamily: 'Poppins' }}>
                  {errors.termsAndConditions}
                </div>
              ) : null}
            </Box>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ width: '100%', textTransform: 'none', mt: 2 }}
            >
              <Typography variant="subtitle1">
                {!isLoading && 'Registrarse'}
                {isLoading && <CircularProgress sx={{ color: 'white' }} />}
              </Typography>
            </Button>
          </Form>
        )}
      </Formik>

      <Box
        sx={{ py: 1, cursor: 'pointer' }}
        onClick={() => navigate({ pathname: '/login' })}
      >
        <Typography variant="span" sx={{ fontFamily: 'Poppins' }}>
          ¿Ya tienes una cuenta?
        </Typography>
        <Typography
          variant="span"
          sx={{ fontFamily: 'Poppins', fontWeight: 700 }}
        >
          Iniciar sesión
        </Typography>
      </Box>
    </Box>
  )
}

export default RegisterFiumbi

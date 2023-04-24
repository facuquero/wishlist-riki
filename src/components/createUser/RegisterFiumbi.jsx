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
} from '@mui/material'
import { Box } from '@mui/system'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { useNavigate } from 'react-router-dom'
import { useCreateUser } from '../../../api/useUsersAPI'
import { NewUserSchema } from '../../utils/schemasForm'
import { setNewFiumbiUserToCreate } from '../../utils/localStorageManagment'
import Typography from '../commons/Typography'

const RegisterFiumbi = ({
  wishlistName,
  handleClickCreatUser,
  setWishlisUser,
}) => {
  const [open, setOpen] = useState(false)

  const { execute, data, isLoading, isError, error } = useCreateUser()

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

  const handleSubmitNewUser = ({ newUser }) => {
    const data = { ...newUser, username: wishlistName }
    setWishlisUser(newUser)
    execute({
      data,
    })
  }

  useEffect(() => {
    if (data?.status === 201) {
      setNewFiumbiUserToCreate({
        username: wishlistName,
        token: data.data.token,
      })
      handleClickCreatUser()
      return
    }
    if (isError) {
      console.log('error', error)
    }
  }, [data, isLoading, isError, error])

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
        Regístra tu "{wishlistName || 'fuimbi'}" para poder crear tu lista de
        regalos
      </Typography>
      <Box
        sx={{
          w: '100%',
        }}
      >
        Recuerda de usuario sera "{wishlistName || ''}"*
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
        validationSchema={NewUserSchema}
        onSubmit={(values) => {
          handleSubmitNewUser({
            newUser: values,
          })
        }}
      >
        {({ errors, touched }) => (
          <Form style={{ width: '100%', fontFamily: 'Poppins' }}>
            {fieldInputsItems.map((fieldItem, index) => {
              return (
                <Box sx={{ my: 2 }} key={`fieldInputsItems-${index}`}>
                  {fieldItem.field === 'phone_number' && (
                    <Box>Estos datos son para poder hacer la entrega </Box>
                  )}

                  {fieldItem.field === 'name' && (
                    <Box>Estos datos son de quien recibira las entregas </Box>
                  )}
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
              </Typography>
              {isLoading && <CircularProgress sx={{ color: 'white' }} />}
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
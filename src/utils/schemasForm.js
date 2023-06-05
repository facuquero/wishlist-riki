import * as Yup from 'yup'

export const NewUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'El nombre debe tener al menos 4 caracteres')
    .matches(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
      'Solo se permiten letras'
    )
    .required('El nombre es obligatorio'),
  lastname: Yup.string()
    .min(4, 'El apellido debe tener al menos 4 caracteres')
    .matches(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
      'Solo se permiten letras'
    )
    .required('El nombre es obligatorio'),
  DNI: Yup.string()
    .matches(/^\d{7,9}$/, 'El DNI debe tener 7 u 9 números')
    .required('El DNI es obligatorio'),
  email: Yup.string()
    .email('El email no es válido')
    .required('El email es obligatorio'),
  phone_number: Yup.string()
    .matches(/^\d{6,15}$/, 'Ingrese un numero de telefono valido')
    .min(6, 'El numero de telefono debe tener más de 7 digitos')
    .required('El telefono es obligatorio'),
  password: Yup.string()
    .required('La contraseña es obligatoria')
    .min(4, 'La contraseña debe tener más de 4 caracteres'),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Las contraneñas deben coincidir'),
  zip_code: Yup.string()
    .matches(/^\d{3,5}$/, 'El código postal debe tener 3 o 5 números')
    .min(3, 'El código postal debe tener más de 4 caracteres')
    .required('El codigo postal es obligatorio'),
  shipping_address: Yup.string().required('La dirección es obligatoria'),
  termsAndConditions: Yup.boolean().oneOf(
    [true],
    'Debes aceptar los Términos y Condiciones'
  ),
})

export const LoginUserSchema = Yup.object().shape({
  username: Yup.string().required('Usuario por favor'),
  password: Yup.string().required('Contraseña por favor'),
})

export const PasswordLostSchema = Yup.object().shape({
  username: Yup.string().required('Usuario por favor'),
  email: Yup.string()
    .email('El email no es válido')
    .required('El email es obligatorio'),
})

export const ChangePasswordSchema = Yup.object().shape({
  lastPassword: Yup.string()
    .required('La ultima contraseña es obligatoria')
    .min(4, 'La contraseña debe tener más de 4 caracteres'),
  password: Yup.string()
    .required('La contraseña es obligatoria')
    .min(4, 'La contraseña debe tener más de 4 caracteres'),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Las contraneñas deben coincidir'),
})

export const NewShippingAddressSchema = Yup.object().shape({
  newShippingAddress: Yup.string().required('La dirección es obligatoria'),
})

export const NewPasswordLostSchema = Yup.object().shape({
  password: Yup.string()
    .required('La contraseña es obligatoria')
    .min(4, 'La contraseña debe tener más de 4 caracteres'),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Las contraneñas deben coincidir'),
})

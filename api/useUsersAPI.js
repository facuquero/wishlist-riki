import { usePost } from './usePost'

export const useCreateUser = () => {
  const url = '/register'
  return usePost({ url })
}

export const useValidateCode = () => {
  const url = '/validate-code'
  return usePost({ url })
}

export const useValidateUsername = () => {
  const url = '/register'
  return usePost({ url })
}

export const exchangeCodeForToken = () => {
  const url = '/exchange-code-for-token'
  return usePost({ url })
}

export const useLogin = () => {
  const url = '/login'
  return usePost({ url })
}

export const validateUsername = () => {
  const url = '/validate-username'
  return usePost({ url })
}

export const useChangePassword = () => {
  const url = '/change-password'
  return usePost({ url })
}

export const useChangeShippingAddress = () => {
  const url = '/change-shipping-address'
  return usePost({ url })
}

export const forgotPassword = () => {
  const url = '/forgot-password'
  return usePost({ url })
}

export const findMe = () => {
  const url = '/find-me'
  return usePost({ url })
}

export const useChangePhrase = () => {
  const url = '/change-phrase'
  return usePost({ url })
}

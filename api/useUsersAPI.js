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

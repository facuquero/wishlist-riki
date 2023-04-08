import { usePost } from './usePost'

export const useCreateUser = () => {
  const url = '/register'
  return usePost({ url })
}

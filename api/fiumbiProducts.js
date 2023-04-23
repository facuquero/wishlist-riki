import { usePost } from './usePost'

export const getListByUsername = () => {
  const url = '/get-list-by-username'
  return usePost({ url })
}

export const generateLinkML = () => {
  const url = '/generate-link'
  return usePost({ url })
}

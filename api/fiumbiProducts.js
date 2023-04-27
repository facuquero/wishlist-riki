import { usePost } from './usePost'

export const getListActiveByUsername = () => {
  const url = '/get-list-by-username'
  return usePost({ url })
}

export const getListByUsernameInactive = () => {
  const url = '/get-disabled-by-username'
  return usePost({ url })
}

export const getListAllByUsername = () => {
  const url = '/get-products-by-username'
  return usePost({ url })
}

export const generateLinkML = () => {
  const url = '/generate-link'
  return usePost({ url })
}

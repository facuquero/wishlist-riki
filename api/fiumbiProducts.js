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

export const deleteProduct = () => {
  const url = '/delete-product'
  return usePost({ url })
}

export const reActiveProduct = () => {
  const url = '/activate-product'
  return usePost({ url })
}

export const SincFavMLProduct = () => {
  const url = '/sync-favs'
  return usePost({ url })
}

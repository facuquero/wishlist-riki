import { usePost } from './usePost'

export const useGetClientOrders = () => {
  const url = '/get-client-orders'
  return usePost({ url })
}

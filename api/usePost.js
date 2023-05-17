import { useState } from 'react'
import { axiosInstance } from './axiosRequest'
import useAuth from '../src/hooks/useAuth'
export const usePost = ({ url }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState(undefined)
  const [data, setData] = useState(undefined)
  const { logOut } = useAuth()
  const execute = async ({ data }) => {
    setIsLoading(true)
    setIsError(false)
    setError(undefined)
    try {
      const response = await axiosInstance.post(url, data)
      setData(response)
    } catch (e) {
      setData(undefined)
      setError(e)
      console.log('e', e)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    isError,
    data,
    error,
    execute,
  }
}

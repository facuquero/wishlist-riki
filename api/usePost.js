import { useState } from 'react'
import { axiosInstance } from './axiosRequest'
export const usePost = ({ url }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState(undefined)
  const [data, setData] = useState(undefined)

  const execute = async ({ data }) => {
    setIsLoading(true)
    setIsError(false)
    setError(undefined)
    console.log("entro execute", data)
    try {
      const response = await axiosInstance.post(url, data)
      setData(response)
    } catch (e) {
      setData(undefined)
      setError(e)
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

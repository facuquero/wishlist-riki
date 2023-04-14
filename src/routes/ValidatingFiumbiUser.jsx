import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { exchangeCodeForToken } from '../../api/useUsersAPI'

const ValidatingFiumbiUser = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)

  const { execute, data, isLoading, isError, error } = exchangeCodeForToken()
  console.log('data111', data)
  console.log('isError', isError)
  console.log('error', error)

  useEffect(() => {
    console.log('data', data)
    if(!data){

        const paramsObject = {}
        params.forEach((value, key) => {
            paramsObject[key] = value
        })
        console.log('location', location)
        console.log('paramsObject', paramsObject.code)
        
        console.log("entro 22")
        const data = {
                code: paramsObject.code,
        } 
        execute({
            data
        })
        console.log("entro33")
    
    }
  }, [ ])

  useEffect(() => {
    console.log('data2222', data)
    console.log('isLoading', isLoading) 
  }, [isLoading])

  console.log

  return <div>validando informacion</div>
}

export default ValidatingFiumbiUser

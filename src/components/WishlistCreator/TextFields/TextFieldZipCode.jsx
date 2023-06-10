import React, { useEffect } from 'react'
import TextField from '../../commons/TextField'
import { useFormikContext } from 'formik'
import { usevalidateZipcode } from '../../../../api/useUsersAPI'

const TextFieldZipCode = (props) => {
  const { values, errors, setErrors } = useFormikContext()
  const { execute, data, error, isError, isLoading } = usevalidateZipcode()

  useEffect(() => {
    const checking = setTimeout(() => {
      if (values.zip_code.length > 3) {
        execute({
          data: {
            zip_code: values.zip_code,
          },
        })
      }
    }, 750)
    return () => clearTimeout(checking)
  }, [values.zip_code])

  useEffect(() => {
    if (isError) {
      setErrors({ ...errors, zip_code: 'Codigo postal invalido' })
    }
    if (!isError) {
      setErrors({ ...errors, zip_code: null })
    }
  }, [error, data, isLoading])

  return <TextField {...props} />
}

export default TextFieldZipCode

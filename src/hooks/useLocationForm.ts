import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { AxiosError } from 'axios'
import { schemas } from '../lib/yup/schemas'
import { axiosInstance } from '../lib/axios'
import { LocationFormData } from '../types/locationFormData'
import { queryClientInstance } from '../lib/tanstack-query'
import { EditLocationDto } from '../types/editLocationDto'

type UseLocationFormProps = {
  setOpen: Dispatch<SetStateAction<boolean>>
  isEditForm: boolean
  locationData?: EditLocationDto
}

export const useLocationForm = ({
  setOpen,
  locationData,
  isEditForm,
}: UseLocationFormProps) => {
  const [responseError, setResponseError] = useState('')

  const {
    control,
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<LocationFormData>({
    resolver: yupResolver(schemas.postLocationForm),
  })

  useEffect(() => {
    if (isEditForm && locationData) {
      setValue('fieldName', locationData.fieldName)
      setValue('latitude', locationData.latitude)
      setValue('longitude', locationData.longitude)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const locationId = locationData?.location_id ? locationData.location_id : ''

  const postLocationData = useMutation({
    mutationFn: (data: LocationFormData) => {
      setResponseError('')
      const postPromise = isEditForm
        ? axiosInstance.patch(`/locations/${locationId}`, data)
        : axiosInstance.post('/locations', data)
      toast.promise(postPromise, {
        loading: 'Processando...',
        success: 'Dados enviados!',
        error: 'Houve um erro, tente novamente mais tarde.',
      })

      return postPromise
    },
    onSuccess: () => {
      queryClientInstance.invalidateQueries({ queryKey: ['locations/all'] })
      setOpen(false)
    },
    onError: (error: AxiosError<{ error: string }>) => {
      const errorMessage = error.response?.data.error
        ? error.response.data.error
        : 'Houve um erro, tente novamente mais tarde.'

      if (errorMessage === 'Já existe um registro com esse nome') {
        setError('fieldName', { message: errorMessage })
        return
      }

      setResponseError(errorMessage)
    },
  })

  const handleLocationFormData: SubmitHandler<LocationFormData> = (data) => {
    postLocationData.mutate(data)
  }

  const onSubmit = handleSubmit(handleLocationFormData)

  return {
    isLoading: postLocationData.isLoading,
    onSubmit,
    control,
    register,
    errors,
    responseError,
  }
}

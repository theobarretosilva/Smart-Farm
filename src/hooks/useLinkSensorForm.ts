import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { AxiosError } from 'axios'
import { axiosInstance } from '../lib/axios'
import { schemas } from '../lib/yup/schemas'
import { SensorForm } from '../types/sensorForm'
import { queryClientInstance } from '../lib/tanstack-query'
import { EditSensorDto } from '../types/editSensorDto'

type UseLinkSensorFormProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  isEditForm: boolean
  sensorData?: EditSensorDto
}

export const useLinkSensorForm = ({
  setOpen,
  isEditForm,
  sensorData,
}: UseLinkSensorFormProps) => {
  const defaultValues = {
    sensorId: undefined,
    name: '',
    macAddress: '',
    active: undefined,
  }

  const [responseError, setResponseError] = useState('')

  const {
    register,
    handleSubmit,
    control,
    setValue,
    setError,
    formState: { errors },
  } = useForm<SensorForm>({
    resolver: yupResolver(schemas.sensorForm),
    defaultValues,
    mode: 'onTouched',
  })
  const params = useParams()

  useEffect(() => {
    if (sensorData) {
      const { active, macAddress, name, availableSensorId } = sensorData
      setValue('active', active ? 'true' : 'false')
      setValue('macAddress', macAddress)
      setValue('name', name)
      setValue('sensorId', String(availableSensorId))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const locationId = params?.location_id

  type LinkSensorDTO = {
    availableSensorId: number
    name: string
    macAddress: string
  }

  const linkSensorMutation = useMutation({
    mutationFn: (data: LinkSensorDTO) => {
      setResponseError('')
      const linkSensorPromise = isEditForm
        ? axiosInstance.put(
            `/sensors/linked-sensors/${sensorData?.sensorId}`,
            data
          )
        : axiosInstance.post(`/sensors/link-sensor/${locationId}`, data)
      toast.promise(linkSensorPromise, {
        loading: 'Processando...',
        success: isEditForm
          ? 'Sensor atualizado com sucesso'
          : 'Sensor vinculado com sucesso!',
        error: 'Houve um erro, tente novamente mais tarde.',
      })
      return linkSensorPromise
    },
    onSuccess: () => {
      queryClientInstance.invalidateQueries(['sensors', Number(locationId)])
      setOpen(false)
    },
    onError: (error: AxiosError<{ message: string }>) => {
      if (error.response?.status === 409) {
        setError('macAddress', {
          message: 'Já existe um registro com esse endereço MAC.',
        })
        return
      }

      const errorMessage = error.response?.data.message
        ? error.response.data.message
        : 'Houve um erro, tente novamente mais tarde.'

      setResponseError(errorMessage)
    },
  })

  const handleLinkSensor: SubmitHandler<SensorForm> = (data) => {
    const { macAddress, name, sensorId: formSensorId, active } = data
    const payload = {
      availableSensorId: Number(formSensorId),
      name,
      macAddress,
      active: active === 'true',
    }

    linkSensorMutation.mutate(payload)
  }

  const onSubmit = handleSubmit(handleLinkSensor)

  return {
    handleLinkSensor,
    register,
    onSubmit,
    control,
    errors,
    responseError,
  }
}

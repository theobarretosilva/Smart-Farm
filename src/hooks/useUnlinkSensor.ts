import { useMutation } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { axiosInstance } from '../lib/axios'
import { queryClientInstance } from '../lib/tanstack-query'

export const useUnlinkSensor = () => {
  type UnlinkSensorDto = {
    location_id: number
    sensor_id: number
  }

  const routeParams = useParams()
  const locationId = Number(routeParams.location_id)

  const unlinkSensorMutation = useMutation({
    mutationFn: (sensor_id: number) => {
      const payload: UnlinkSensorDto = {
        sensor_id,
        location_id: Number(locationId),
      }
      const postPromise = axiosInstance.post('/sensors/unlink-sensor', payload)
      toast.promise(postPromise, {
        loading: 'Processando...',
        success: 'Sensor desnvinculado!',
        error: 'Houve um erro, tente novamente mais tarde.',
      })

      return postPromise
    },
    onSuccess: () => {
      queryClientInstance.invalidateQueries({
        queryKey: ['sensors', locationId],
      })
    },
  })

  return { unlinkSensorMutation }
}

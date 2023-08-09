import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../lib/axios'
import { useLogOutIfExpiredToken } from './useLogOutIfExpiredToken'

type Sensor = {
  sensor_id: number
  name: string
  createdAt: string
  macAddress: string
  active: boolean
  available_sensor_id: number
}

export const useSensorsByLocation = (id?: number) => {
  const { handleLogOutIfExpiredToken } = useLogOutIfExpiredToken()
  const params = useParams()
  const sensorsByLocationQuery = useQuery(['sensors', id], {
    queryFn: async () => {
      const { data } = await axiosInstance.get<Sensor[]>(`/sensors/${id}`)
      return data
    },
    enabled: !!params.location_id,
    onError: handleLogOutIfExpiredToken,
  })

  return { sensorsByLocationQuery }
}

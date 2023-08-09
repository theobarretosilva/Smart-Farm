import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../lib/axios'

type Measurements = {
  measurement_id: number
  createdAt: Date
  measurement: number
}

type AvailableSensor = {
  available_sensor_id: number
  name: string
  type: string
  minRange: number
  maxRange: number
  barcode: string
  batch: string
}

type Sensor = {
  sensor_id: number
  name: string
  createdAt: Date
  macAddress: string
  active: boolean
  measurements: Measurements[]
  availableSensor: AvailableSensor
}

type Overview = {
  location_id: number
  fieldName: string
  latitude: string
  longitude: string
  sensorCount: number
  sensor: Sensor[]
}

export const useOverview = (id: number) => {
  const params = useParams()
  const overviewQuery = useQuery(['locations', id], {
    queryFn: async () => {
      const { data } = await axiosInstance.get<Overview>(`/locations/${id}`)
      return data
    },
    enabled: !!params.location_id,
  })

  return { overviewQuery }
}

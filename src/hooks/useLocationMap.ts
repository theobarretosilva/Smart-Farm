import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../lib/axios'
import { useCheckIfLoggedIn } from './useCheckIfLoggedIn'

type Locations = {
  location_id: number
  fieldName: string
  latitude: number
  longitude: number
  sensorCount: number
}

export const useLocationMap = () => {
  const id = 1

  useCheckIfLoggedIn()

  const getLocationsAllQuery = useQuery(['locations', id], {
    queryFn: async () => {
      const { data } = await axiosInstance.get<Locations[]>(`/locations/all`)
      return data
    },
  })

  return { getLocationsAllQuery }
}

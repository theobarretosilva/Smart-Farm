import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../lib/axios'
import { Location } from '../types/location'
import { useLogOutIfExpiredToken } from './useLogOutIfExpiredToken'

export const useGetLocations = () => {
  const { handleLogOutIfExpiredToken } = useLogOutIfExpiredToken()
  const getLocationsQuery = useQuery(['locations/all'], {
    queryFn: async () => {
      const { data } = await axiosInstance.get<Location[]>(`/locations/all`)
      return data
    },
    onError: handleLogOutIfExpiredToken,
  })

  return { getLocationsQuery }
}

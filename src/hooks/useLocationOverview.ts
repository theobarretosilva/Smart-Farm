import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../lib/axios'
import { useLogOutIfExpiredToken } from './useLogOutIfExpiredToken'

export const useLocationOverview = () => {
  const { handleLogOutIfExpiredToken } = useLogOutIfExpiredToken()
  const params = useParams()
  const locationId = params.location_id
  const overviewQuery = useQuery(['overview', params.location_id], {
    queryFn: async () => {
      const { data: overviewData } = await axiosInstance.get(
        `/locations/${locationId}`
      )
      return overviewData
    },
    enabled: !!params.location_id,
    onError: handleLogOutIfExpiredToken,
  })
  const { isInitialLoading, isError, data } = overviewQuery

  return { isInitialLoading, isError, data }
}

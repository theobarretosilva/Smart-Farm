import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../lib/axios'

export const useForgotPswd = (email: string) => {
  const forgotPswdQuery = useQuery(['company/esqueci-senha', email], {
    queryFn: async () => {
      const { data } = await axiosInstance.post(`/company/esqueci-senha`)
      return data
    },
  })

  return { forgotPswdQuery }
}

import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../lib/axios'
import { useCheckIfLoggedIn } from './useCheckIfLoggedIn'

type Company = {
  company_id: number
  company: string
  cnpj: string
  responsible: string
  email: string
  phone: string
}

export const useCompanyMe = () => {
  useCheckIfLoggedIn()

  const getCompanyQuery = useQuery(['CompanyMe'], {
    queryFn: async () => {
      const { data } = await axiosInstance.get<Company>(`/company/me`)
      return data
    },
  })

  return { getCompanyQuery }
}

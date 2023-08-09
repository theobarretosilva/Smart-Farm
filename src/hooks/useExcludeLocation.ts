import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { axiosInstance } from '../lib/axios'
import { queryClientInstance } from '../lib/tanstack-query'

export const useExcludeLocation = () => {
  const excludeLocationMutation = useMutation({
    mutationFn: (location_id: number) => {
      const deletePromise = axiosInstance.delete(`/locations/${location_id}`)
      toast.promise(deletePromise, {
        loading: 'Processando...',
        success: 'Local excluído!',
        error: 'Não foi possivel excluir, tente novamente mais tarde!',
      })

      return deletePromise
    },
    onSuccess: () => {
      queryClientInstance.invalidateQueries({
        queryKey: ['locations/all'],
      })
    },
  })

  return { excludeLocationMutation }
}

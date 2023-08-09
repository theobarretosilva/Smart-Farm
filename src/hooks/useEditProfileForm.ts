import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useEffect } from 'react'
import { schemas } from '../lib/yup/schemas'
import { axiosInstance } from '../lib/axios'
import { useCompanyMe } from './useCompanyMe'
import { EditProfileForm } from '../types/editProfileForm'

export const useEditProfileForm = () => {
  const { getCompanyQuery } = useCompanyMe()
  const { data: companyData } = getCompanyQuery

  const defaultValues = {
    company: '',
    cnpj: '',
    responsible: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  }

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EditProfileForm>({
    resolver: yupResolver(schemas.editProfileForm),
    defaultValues,
  })

  useEffect(() => {
    if (companyData) {
      setValue('company', companyData.company)
      setValue('cnpj', companyData.cnpj)
      setValue('responsible', companyData.responsible)
      setValue('email', companyData.email)
      setValue('phone', companyData.phone)
    }
  }, [companyData, setValue])

  const editProfileMutation = useMutation({
    mutationFn: (data: EditProfileForm) => {
      const { phone, optionalPassword, optionalConfirmPassword } = data
      const payload = {
        phone,
        password: optionalPassword || undefined,
        confirmPassword: optionalConfirmPassword || undefined,
      }
      const editPromise = axiosInstance.put('/company/perfil', payload)
      toast.promise(editPromise, {
        loading: 'Processando...',
        success: 'Dados atualizados!',
        error: 'Houve um erro, tente novamente mais tarde.',
      })
      return editPromise
    },
  })

  const handleEditForm: SubmitHandler<EditProfileForm> = (data) => {
    editProfileMutation.mutate(data)
  }

  const onSubmit = handleSubmit(handleEditForm)

  return {
    isLoading: editProfileMutation.isLoading,
    onSubmit,
    control,
    register,
    errors,
  }
}

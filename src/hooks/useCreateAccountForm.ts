import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import { useState } from 'react'
import { ProfileForm } from '../types/profileForm'
import { schemas } from '../lib/yup/schemas'
import { axiosInstance } from '../lib/axios'

export const useCreateAccountForm = () => {
  const defaultValues = {
    company: '',
    cnpj: '',
    responsible: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  }

  const [responseError, setResponseError] = useState('')

  const {
    control,
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ProfileForm>({
    resolver: yupResolver(schemas.profileForm),
    defaultValues,
  })

  const navigate = useNavigate()

  type ResponseError = {
    message: string
  }

  const editProfileMutation = useMutation({
    mutationFn: (data: ProfileForm) => {
      setResponseError('')
      const createAccountPromise = axiosInstance.post('/company/cadastro', data)
      toast.promise(createAccountPromise, {
        loading: 'Processando...',
        success: 'Conta criada!',
        error: 'Houve um erro, tente novamente mais tarde.',
      })
      return createAccountPromise
    },
    onSuccess: () => {
      setTimeout(() => navigate('/login'), 3 * 1000)
    },
    onError: (error: AxiosError<ResponseError>) => {
      const errorMessage = error.response?.data.message
      const isRepeatedCnpj = errorMessage?.toLocaleLowerCase().includes('cnpj')
      const isRepeatedEmail = errorMessage
        ?.toLocaleLowerCase()
        .includes('email')

      if (isRepeatedCnpj) {
        setError('cnpj', { message: 'Já existe um registro com esse CNPJ' })
        return
      }

      if (isRepeatedEmail) {
        setError('email', { message: 'Já existe um registro com esse email' })
        return
      }

      setResponseError('Houve um erro, tente novamente mais tarde.')
    },
  })

  const handleEditForm: SubmitHandler<ProfileForm> = (data) => {
    editProfileMutation.mutate(data)
  }

  const onSubmit = handleSubmit(handleEditForm)

  return {
    isLoading: editProfileMutation.isLoading,
    onSubmit,
    control,
    register,
    errors,
    responseError,
  }
}

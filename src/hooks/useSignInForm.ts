import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useState } from 'react'
import { SignInForm } from '../types/signInForm'
import { schemas } from '../lib/yup/schemas'
import { axiosInstance } from '../lib/axios'
import { SignInResponse } from '../types/signInResponse'

type HandleSignInSuccessProps = {
  token: string
}

export const useSignInForm = () => {
  const defaultValues = { email: '', password: '' }
  const navigate = useNavigate()
  const [responseError, setResponseError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: yupResolver(schemas.signInForm),
    defaultValues,
  })

  const handleSignInSuccess = ({ token }: HandleSignInSuccessProps) => {
    localStorage.setItem('SmartFarmToken', token)
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`
    navigate('/visao-geral')
  }

  const signInMutation = useMutation({
    mutationFn: async (data: SignInForm) => {
      setResponseError('')
      const { data: responseData } = await axiosInstance.post<SignInResponse>(
        'company/login',
        data
      )
      return responseData
    },
    onSuccess: handleSignInSuccess,
    onError: (error: AxiosError<{ message: string }>) => {
      const errorMessage = error.response?.data.message
        ? error.response.data.message
        : 'Houve um erro, tente novamente mais tarde.'
      setResponseError(errorMessage)
    },
  })

  const handleSignIn: SubmitHandler<SignInForm> = (data) => {
    signInMutation.mutate(data)
  }

  const onSubmit = handleSubmit(handleSignIn)

  return {
    isLoading: signInMutation.isLoading,
    onSubmit,
    errors,
    register,
    responseError,
  }
}

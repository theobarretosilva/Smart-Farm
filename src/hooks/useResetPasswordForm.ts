import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import { AxiosError } from 'axios'
import { schemas } from '../lib/yup/schemas'
import { ResetPasswordForm } from '../types/resetPasswordForm'
import { axiosInstance } from '../lib/axios'

export const useResetPasswordForm = (email: string) => {
  const defaultValues = { password: '', confirmPassword: '' }
  const navigate = useNavigate()
  const [responseError, setResponseError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordForm>({
    resolver: yupResolver(schemas.resetPassword),
    defaultValues,
  })

  const resetPasswordMutation = useMutation({
    mutationFn: async (data: ResetPasswordForm) => {
      setResponseError('')
      const resetPasswordPromise = axiosInstance.patch(
        `/company/changepassword`,
        {
          email,
          newPassword: data.password,
          newPasswordConfirm: data.confirmPassword,
        }
      )
      toast.promise(resetPasswordPromise, {
        loading: 'Processando...',
        success: 'Senha alterada com sucesso!',
        error: 'Não foi possível alterar a senha, tente novamente mais tarde',
      })
      return resetPasswordPromise
    },
    onSuccess: () => {
      setTimeout(() => navigate('/login'), 3 * 1000)
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const errorMessage = error.response?.data.message
        ? error.response.data.message
        : 'Houve um erro, tente novamente mais tarde.'
      setResponseError(errorMessage)
    },
  })

  const handleSignIn: SubmitHandler<ResetPasswordForm> = (data) => {
    resetPasswordMutation.mutate(data)
  }

  const onSubmit = handleSubmit(handleSignIn)

  return { onSubmit, errors, register, responseError }
}

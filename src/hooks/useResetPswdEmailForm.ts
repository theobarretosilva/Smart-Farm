import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { AxiosError } from 'axios'
import { schemas } from '../lib/yup/schemas'
import { ResetPwsdEmailForm } from '../types/resetPasswordForm'
import { axiosInstance } from '../lib/axios'

export const useResetPswdEmailForm = () => {
  const defaultValues = { email: '' }
  const [checkedEmail, setCheckedEmail] = useState()
  const [email, setEmail] = useState('')
  const [responseError, setResponseError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPwsdEmailForm>({
    resolver: yupResolver(schemas.resetPswdEmail),
    defaultValues,
  })

  const frgtPwsdEmailMutation = useMutation({
    mutationFn: async (data: ResetPwsdEmailForm) => {
      setResponseError('')
      const { data: responseData } = await axiosInstance.post(
        `/company/esqueci-senha`,
        data
      )
      setCheckedEmail(responseData.code)
    },
    onSuccess: (_, { email: formEmail }) => {
      setEmail(formEmail)
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const errorMessage = error.response?.data.message
        ? error.response.data.message
        : 'Houve um erro, tente novamente mais tarde.'
      setResponseError(errorMessage)
    },
  })

  const handleSignIn: SubmitHandler<ResetPwsdEmailForm> = (data) => {
    frgtPwsdEmailMutation.mutate(data)
  }

  const onSubmit = handleSubmit(handleSignIn)

  return {
    onSubmit,
    errors,
    register,
    checkedEmail,
    email,
    isLoading: frgtPwsdEmailMutation.isLoading,
    responseError,
  }
}

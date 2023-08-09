import * as yup from 'yup'
import { schemas } from '../lib/yup/schemas'

export type ResetPasswordForm = yup.InferType<typeof schemas.resetPassword>
export type ResetPwsdEmailForm = yup.InferType<typeof schemas.resetPswdEmail>

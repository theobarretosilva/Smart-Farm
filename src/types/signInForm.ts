import * as yup from 'yup'
import { schemas } from '../lib/yup/schemas'

export type SignInForm = yup.InferType<typeof schemas.signInForm>

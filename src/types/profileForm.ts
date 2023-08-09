import * as yup from 'yup'
import { schemas } from '../lib/yup/schemas'

export type ProfileForm = yup.InferType<typeof schemas.profileForm>

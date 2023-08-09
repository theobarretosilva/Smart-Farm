import * as yup from 'yup'
import { schemas } from '../lib/yup/schemas'

export type EditProfileForm = yup.InferType<typeof schemas.editProfileForm>

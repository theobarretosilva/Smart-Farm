import * as yup from 'yup'
import { schemas } from '../lib/yup/schemas'

export type LocationFormData = yup.InferType<typeof schemas.postLocationForm>

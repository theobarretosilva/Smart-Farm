import * as yup from 'yup'
import { schemas } from '../lib/yup/schemas'

export type SensorForm = yup.InferType<typeof schemas.sensorForm>

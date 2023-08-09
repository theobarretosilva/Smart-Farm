import * as yup from 'yup'
import { validators } from './validators'

export const schemas = {
  signInForm: yup.object().shape({
    email: validators.email,
    password: validators.password,
  }),
  profileForm: yup.object().shape({
    company: validators.requiredString,
    cnpj: validators.cnpj,
    responsible: validators.requiredString,
    phone: validators.phone,
    email: validators.email,
    password: validators.password,
    confirmPassword: validators.confirmPassword,
  }),
  editProfileForm: yup.object().shape({
    company: validators.requiredString,
    cnpj: validators.cnpj,
    responsible: validators.requiredString,
    phone: validators.phone,
    email: validators.email,
    optionalPassword: validators.optionalPassword,
    optionalConfirmPassword: validators.optionalConfirmPassword,
  }),
  postLocationForm: yup.object().shape({
    fieldName: validators.fieldName,
    longitude: validators.longitude,
    latitude: validators.latitude,
  }),
  resetPassword: yup.object().shape({
    password: validators.password,
    confirmPassword: validators.confirmPassword,
  }),
  resetPswdEmail: yup.object().shape({
    email: validators.email,
  }),
  sensorForm: yup.object().shape({
    sensorId: validators.requiredString,
    name: validators.requiredString,
    macAddress: validators.macAddress,
    active: validators.requiredBooleanString,
  }),
}

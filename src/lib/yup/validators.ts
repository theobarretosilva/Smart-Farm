import { isCNPJ, isPhone } from 'brazilian-values'
import * as yup from 'yup'

const errorMessages = {
  required: 'Campo obrigatório',
  email: 'E-mail inválido',
  passwordLength: 'A senha precisa ter, no mínimo, 8 caracteres',
  cnpj: 'CNPJ inválido. O CNPJ precisa seguir o formato: "00.000.000/0000-00"',
  phone:
    'Telefone inválido. O telefone precisa seguir o formato: "(24) 98138-0000"',
  confirmPassword: 'As senhas devem ser iguais',
  name: 'Nome é obrigatório',
  longitude: 'longitude deve ser um number estar entre (-180 to 180 degrees).',
  latitude: 'latitude deve ser um number entre (-90 to 90 degrees)',
  decimal: 'O valor deve ser um número decimal com 4 casas decimais',
  number: 'O valor deve ser um número válido',
  macAddress:
    'MAC address inválido, ele deve seguir esse formato: 3D:F2:C9:A6:B3:4F',
}

export const validators = {
  requiredBooleanString: yup
    .string()
    .oneOf(['true', 'false'])
    .required(errorMessages.required),
  macAddress: yup
    .string()
    .required(errorMessages.required)
    .test('is-valid-mac-address', errorMessages.macAddress, (value) => {
      return /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(value)
    }),
  email: yup
    .string()
    .required(errorMessages.required)
    .email(errorMessages.email),
  password: yup
    .string()
    .required(errorMessages.required)
    .min(8, errorMessages.passwordLength),
  requiredString: yup.string().required(errorMessages.required),
  cnpj: yup
    .string()
    .required(errorMessages.required)
    .test('is-valid-cnpj', errorMessages.cnpj, (value) => {
      return isCNPJ(value)
    }),
  phone: yup
    .string()
    .required(errorMessages.required)
    .test('is-valid-phone', errorMessages.phone, (value) => {
      return isPhone(value)
    }),
  confirmPassword: yup
    .string()
    .required(errorMessages.required)
    .oneOf([yup.ref('password')], errorMessages.confirmPassword),
  optionalPassword: yup
    .string()
    .test('len', errorMessages.passwordLength, (val) => {
      if (val === undefined) {
        return true
      }
      return val.length === 0 || val.length >= 8
    }),
  optionalConfirmPassword: yup
    .string()
    .oneOf([yup.ref('optionalPassword')], errorMessages.confirmPassword)
    .test('isRequired', errorMessages.confirmPassword, function (value) {
      const { optionalPassword } = this.parent
      if (
        optionalPassword &&
        optionalPassword.length > 0 &&
        !value &&
        value !== optionalPassword
      ) {
        return false
      }
      return true
    }),
  fieldName: yup.string().required(errorMessages.required),
  longitude: yup
    .number()
    .required(errorMessages.required)
    .min(-180.0, errorMessages.longitude)
    .max(180.0, errorMessages.longitude)
    .typeError(errorMessages.number)
    .test(
      'Deve ter 4 casas decimais',
      'Longitude deve ter exatamente quatro casas decimais',
      (value) => {
        if (value === undefined || value === null) {
          return true
        }
        return /^-?\d{1,3}\.\d{4}$/.test(value.toString())
      }
    ),

  latitude: yup
    .number()
    .required(errorMessages.required)
    .min(-90.0, errorMessages.latitude)
    .max(90.0, errorMessages.latitude)
    .typeError(errorMessages.number)
    .test(
      'Deve ter 4 casas decimais',
      'Latitude deve ter exatamente quatro casas decimais',
      (value) => {
        if (value === undefined || value === null) {
          return true
        }
        return /^-?\d{1,2}\.\d{4}$/.test(value.toString())
      }
    ),
}

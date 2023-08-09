import { Controller } from 'react-hook-form'
import { MaskedInput } from '../MaskedInput'
import { Input } from '../Input'
import { Select } from '../Select'
import { TextField } from '../TextField'
import * as S from './LinkSensorForm.styles'
import { FormControlButtons } from '../FormControlButtons'
import { macAddressMask } from '../../masks/macAddress'
import { useLinkSensorForm } from '../../hooks/useLinkSensorForm'
import { EditSensorDto } from '../../types/editSensorDto'
import { ErrorText } from '../ErrorText'

type LinkSensorFormProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  isEditForm: boolean
  sensorData?: EditSensorDto
}

export function LinkSensorForm({
  setOpen,
  sensorData,
  isEditForm,
}: LinkSensorFormProps) {
  const mockSensors = [
    {
      value: '1',
      label: 'Sensor de Umidade do Solo 1',
    },
    {
      value: '2',
      label: 'Sensor de Temperatura 1',
    },
    {
      value: '3',
      label: 'Sensor de Umidade 1',
    },
    {
      value: '4',
      label: 'Sensor de Temperatura do Solo 1',
    },
    {
      value: '5',
      label: 'Identificação de Agrotóxicos 1',
    },
    {
      value: '6',
      label: 'Sensor de Qualidade do Ar 1',
    },
  ]

  const statusOptions = [
    { value: 'true', label: 'Ativo' },
    { value: 'false', label: 'Inativo' },
  ]

  const { register, onSubmit, control, errors, responseError } =
    useLinkSensorForm({
      setOpen,
      sensorData,
      isEditForm,
    })

  return (
    <S.Form onSubmit={onSubmit}>
      <Controller
        render={({ field, fieldState: { error } }) => (
          <TextField
            label="Dispositivo"
            name={field.name}
            errorMessage={error?.message}
          >
            <Select
              optionsData={mockSensors}
              id="sensorId"
              placeholder="Selecione um dispositivo"
              onValueChange={field.onChange}
              hasError={!!error}
              {...field}
            />
          </TextField>
        )}
        name="sensorId"
        control={control}
      />
      <TextField label="Nome" name="name" errorMessage={errors.name?.message}>
        <Input
          placeholder="Umidade do Solo"
          id="name"
          hasError={!!errors.name?.message}
          {...register('name')}
        />
      </TextField>
      <Controller
        render={({ field, fieldState: { error } }) => (
          <TextField
            label="Endereço MAC"
            name={field.name}
            errorMessage={error?.message}
          >
            <MaskedInput
              placeholder="00:1B:44:11:3A:B1"
              mask={macAddressMask}
              id="macAddress"
              hasError={!!error}
              {...field}
            />
          </TextField>
        )}
        name="macAddress"
        control={control}
      />
      <Controller
        render={({ field, fieldState: { error } }) => (
          <TextField
            label="Estado"
            name={field.name}
            errorMessage={error?.message}
          >
            <Select
              optionsData={statusOptions}
              id="active"
              placeholder="O sensor está ativo?"
              onValueChange={field.onChange}
              hasError={!!error}
              {...field}
            />
          </TextField>
        )}
        name="active"
        control={control}
      />

      <FormControlButtons />
      {!!responseError && <ErrorText>{responseError}</ErrorText>}
    </S.Form>
  )
}

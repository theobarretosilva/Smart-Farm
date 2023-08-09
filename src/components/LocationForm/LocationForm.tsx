import { Dispatch, SetStateAction } from 'react'
import { Input } from '../Input'
import { TextField } from '../TextField'
import * as S from './LocationForm.styles'
import { FormControlButtons } from '../FormControlButtons'
import { useLocationForm } from '../../hooks/useLocationForm'
import { EditLocationDto } from '../../types/editLocationDto'
import { ErrorText } from '../ErrorText'

type LocationFormProps = {
  setOpen: Dispatch<SetStateAction<boolean>>
  isEditForm: boolean
  locationData?: EditLocationDto
}

export function LocationForm({
  setOpen,
  isEditForm,
  locationData,
}: LocationFormProps) {
  const { onSubmit, register, errors, isLoading, responseError } =
    useLocationForm({
      setOpen,
      isEditForm,
      locationData,
    })

  const coordinateErrorMessage =
    errors.latitude?.message || errors.longitude?.message
      ? 'Verifique as coordenadas'
      : ''

  return (
    <S.Form onSubmit={onSubmit}>
      <TextField
        label="Nome"
        name="fieldName"
        errorMessage={errors.fieldName?.message}
      >
        <Input
          placeholder="Campo de feijão"
          id="fieldName"
          hasError={!!errors.fieldName}
          {...register('fieldName')}
        />
      </TextField>

      <TextField
        label="Localização"
        name="localização"
        errorMessage={coordinateErrorMessage}
      >
        <TextField
          label="Latitude"
          isHidden
          name="localização"
          errorMessage={errors.latitude?.message}
        >
          <Input
            placeholder="Latitude"
            id="latitude"
            hasError={!!errors.latitude}
            {...register('latitude')}
          />
        </TextField>
        <TextField
          label="Longitude"
          isHidden
          name="localização"
          errorMessage={errors.longitude?.message}
        >
          <Input
            placeholder="Longitude"
            id="longitude"
            hasError={!!errors.longitude}
            {...register('longitude')}
          />
        </TextField>
      </TextField>
      <FormControlButtons isLoading={isLoading} />
      {!!responseError && <ErrorText>{responseError}</ErrorText>}
    </S.Form>
  )
}

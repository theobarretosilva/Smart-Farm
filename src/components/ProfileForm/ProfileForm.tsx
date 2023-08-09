import { Controller } from 'react-hook-form'
import * as S from './ProfileForm.styles'
import { TextField } from '../TextField'
import { Input } from '../Input'
import { MaskedInput } from '../MaskedInput'
import { CNPJMask } from '../../masks/CNPJ'
import { phoneMask } from '../../masks/phone'
import { useEditProfileForm } from '../../hooks/useEditProfileForm'

export function ProfileForm() {
  const { onSubmit, errors, register, control, isLoading } =
    useEditProfileForm()

  return (
    <S.Form onSubmit={onSubmit}>
      <TextField
        label="Empresa"
        name="company"
        errorMessage={errors.company?.message}
      >
        <Input
          placeholder="Nome da empresa"
          id="empresa"
          hasError={!!errors.company}
          disabled
          {...register('company')}
        />
      </TextField>
      <Controller
        render={({ field, fieldState: { error } }) => (
          <TextField
            errorMessage={error?.message}
            label="CNPJ"
            name={field.name}
          >
            <MaskedInput
              placeholder="00.000.000/0000-00"
              mask={CNPJMask}
              id="CNPJ"
              hasError={!!error}
              disabled
              {...field}
            />
          </TextField>
        )}
        name="cnpj"
        control={control}
      />
      <TextField
        label="Nome"
        name="responsible"
        errorMessage={errors.responsible?.message}
      >
        <Input
          placeholder="Seu nome completo"
          id="nome"
          hasError={!!errors.responsible}
          disabled
          {...register('responsible')}
        />
      </TextField>
      <S.SubContainer>
        <Controller
          render={({ field, fieldState: { error } }) => (
            <TextField
              errorMessage={error?.message}
              label="Telefone"
              name={field.name}
            >
              <MaskedInput
                hasError={!!error}
                placeholder="(00) 00000-0000"
                mask={phoneMask}
                id="phone"
                {...field}
              />
            </TextField>
          )}
          name="phone"
          control={control}
        />
        <TextField
          label="E-mail"
          name="email"
          errorMessage={errors.email?.message}
        >
          <Input
            type="email"
            placeholder="email@example.com"
            id="email"
            hasError={!!errors.email}
            disabled
            {...register('email')}
          />
        </TextField>
        <TextField
          label="Senha"
          name="senha"
          errorMessage={errors.optionalPassword?.message}
        >
          <Input
            type="password"
            placeholder="Senha"
            id="senha"
            hasError={!!errors.optionalPassword}
            {...register('optionalPassword')}
          />
        </TextField>
        <TextField
          label="Confirmar Senha"
          name="confirmPassword"
          errorMessage={errors.optionalConfirmPassword?.message}
        >
          <Input
            type="password"
            placeholder="Confirmar Senha"
            id="confirmPassword"
            hasError={!!errors.optionalConfirmPassword}
            {...register('optionalConfirmPassword')}
          />
        </TextField>
      </S.SubContainer>
      <S.Button disabled={isLoading} variant="main">
        Salvar
      </S.Button>
    </S.Form>
  )
}

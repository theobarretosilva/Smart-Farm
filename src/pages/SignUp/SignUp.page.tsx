import { Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { Controller } from 'react-hook-form'
import { Toaster } from 'react-hot-toast'
import { Input } from '../../components/Input'
import { LoggedOutLayout } from '../../components/LoggedOutLayout'
import { TextField } from '../../components/TextField'
import { useCreateAccountForm } from '../../hooks/useCreateAccountForm'
import { MaskedInput } from '../../components/MaskedInput'
import { phoneMask } from '../../masks/phone'
import { CNPJMask } from '../../masks/CNPJ'
import * as S from './SignUp.page.styles'
import { ErrorText } from '../../components/ErrorText'

export function SignUpPage() {
  const { onSubmit, errors, register, control, isLoading, responseError } =
    useCreateAccountForm()

  const SignInButtonLabel = isLoading ? (
    <CircularProgress size="1.5rem" color="inherit" />
  ) : (
    'Criar Conta'
  )

  return (
    <LoggedOutLayout>
      <S.BackgroundForm>
        <S.TitleWrapper>
          <S.TitleForm>Sign Up</S.TitleForm>
          <S.SubtitleForm>
            Insira seus dados para criar uma conta
          </S.SubtitleForm>
        </S.TitleWrapper>
        <S.Form onSubmit={onSubmit}>
          <TextField
            label="Empresa"
            name="company"
            errorMessage={errors.company?.message}
          >
            <Input
              placeholder="Nome da empresa"
              id="company"
              hasError={!!errors.company}
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
                  id="cnpj"
                  hasError={!!error}
                  {...field}
                />
              </TextField>
            )}
            name="cnpj"
            control={control}
          />
          <TextField
            label="Responsável"
            name="responsible"
            errorMessage={errors.responsible?.message}
          >
            <Input
              placeholder="Seu nome completo"
              id="responsible"
              hasError={!!errors.responsible}
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
                {...register('email')}
              />
            </TextField>
            <TextField
              label="Senha"
              name="senha"
              errorMessage={errors.password?.message}
            >
              <Input
                type="password"
                placeholder="Senha"
                id="senha"
                hasError={!!errors.password}
                {...register('password')}
              />
            </TextField>
            <TextField
              label="Confirmar Senha"
              name="confirmPassword"
              errorMessage={errors.confirmPassword?.message}
            >
              <Input
                type="password"
                placeholder="Confirmar Senha"
                id="confirmPassword"
                hasError={!!errors.confirmPassword}
                {...register('confirmPassword')}
              />
            </TextField>
          </S.SubContainer>
          <S.Button disabled={isLoading} variant="main">
            {SignInButtonLabel}
          </S.Button>
          {!!responseError && <ErrorText>{responseError}</ErrorText>}
        </S.Form>
      </S.BackgroundForm>
      <S.EndingTextWrapper>
        <S.OuterText>
          Já possui uma uma conta?{' '}
          <Link
            to="/login"
            style={{ textDecoration: 'none', color: '#00A335' }}
          >
            Realizar login
          </Link>
        </S.OuterText>
      </S.EndingTextWrapper>
      <Toaster position="bottom-center" />
    </LoggedOutLayout>
  )
}

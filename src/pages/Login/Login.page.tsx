import { Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import * as S from './Login.styles'
import { LoggedOutLayout } from '../../components/LoggedOutLayout'
import { Intelbras } from '../../components/Intelbras'
import { TextField } from '../../components/TextField'
import { useSignInForm } from '../../hooks/useSignInForm'
import { ErrorText } from '../../components/ErrorText'

export function LoginPage() {
  const { isLoading, onSubmit, errors, register, responseError } =
    useSignInForm()

  const SignInButtonLabel = isLoading ? (
    <CircularProgress size="1.5rem" color="inherit" />
  ) : (
    'Entrar'
  )

  return (
    <LoggedOutLayout>
      <Intelbras />
      <S.BackgroundForm>
        <S.Form onSubmit={onSubmit}>
          <S.TitleWrapper>
            <S.TitleForm>Sign In</S.TitleForm>
            <S.SubtitleForm>
              Insira suas credenciais para acessar sua conta
            </S.SubtitleForm>
          </S.TitleWrapper>
          <S.FieldsWrapper>
            <TextField
              label="E-mail"
              name="email"
              errorMessage={errors.email?.message}
            >
              <Input
                placeholder="Informe seu e-mail"
                type="text"
                hasError={!!errors.email?.message}
                id="email"
                {...register('email')}
              />
            </TextField>
            <TextField
              label="Senha"
              name="password"
              errorMessage={errors.password?.message}
            >
              <Input
                placeholder="Informe sua senha"
                type="password"
                hasError={!!errors.password?.message}
                id="password"
                {...register('password')}
              />
            </TextField>
          </S.FieldsWrapper>

          <Button disabled={isLoading} variant="main">
            {SignInButtonLabel}
          </Button>
          {responseError && <ErrorText>{responseError}</ErrorText>}
        </S.Form>
      </S.BackgroundForm>
      <S.EndingTextWrapper>
        <S.TxtForgotPwd>
          Esqueceu sua senha?{' '}
          <Link
            to="/resetar-senha"
            style={{ textDecoration: 'none', color: '#00A335' }}
          >
            Redefinir senha
          </Link>
        </S.TxtForgotPwd>
        <S.TxtForgotPwd>
          Ainda não tem uma conta?{' '}
          <Link
            to="/cadastro"
            style={{ textDecoration: 'none', color: '#00A335' }}
          >
            Cadastre-se
          </Link>
        </S.TxtForgotPwd>
      </S.EndingTextWrapper>
    </LoggedOutLayout>
  )
}

import { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import * as S from './ResetPassword.styles'
import { LoggedOutLayout } from '../../components/LoggedOutLayout'
import { Intelbras } from '../../components/Intelbras'
import { TextField } from '../../components/TextField'
import { useResetPswdEmailForm } from '../../hooks/useResetPswdEmailForm'
import { ResetPasswordForm } from '../../components/ResetPasswordForm/ResetPasswordForm'
import { ErrorText } from '../../components/ErrorText'

export function ResetPasswordPage() {
  const {
    onSubmit,
    errors,
    register,
    checkedEmail,
    email,
    isLoading,
    responseError,
  } = useResetPswdEmailForm()

  const buttonLabel = isLoading ? (
    <CircularProgress size="1.5rem" color="inherit" />
  ) : (
    'Verificar'
  )

  return (
    <LoggedOutLayout>
      <Intelbras />
      <S.BackgroundForm>
        {checkedEmail === 200 ? (
          <ResetPasswordForm email={email} />
        ) : (
          <S.Form onSubmit={onSubmit}>
            <S.TitleWrapper>
              <S.DivLining>
                <Link to="/login">
                  <img src="../../src/assets/imgs/goBack.png" alt="teste" />
                </Link>
                <S.TitleForm>Redefinir senha</S.TitleForm>
              </S.DivLining>
              <S.SubtitleForm>
                Digite o e-mail associado à sua conta para verificação
              </S.SubtitleForm>
            </S.TitleWrapper>
            <S.FieldsWrapper>
              <TextField
                label="Seu email"
                name="email"
                errorMessage={errors.email?.message}
              >
                <Input
                  placeholder="Informe seu email"
                  type="text"
                  id="email"
                  hasError={!!errors.email?.message}
                  {...register('email')}
                />
              </TextField>
            </S.FieldsWrapper>
            <Button disabled={isLoading} variant="main">
              Verificar
            </Button>
            {responseError && <ErrorText>{responseError}</ErrorText>}
          </S.Form>
        )}
      </S.BackgroundForm>
      <S.EndingTextWrapper>
        <Link
          to="/login"
          style={{ textDecoration: 'underline', color: '#00A335' }}
        >
          Voltar para a página de login
        </Link>
      </S.EndingTextWrapper>
      <Toaster position="bottom-center" />
    </LoggedOutLayout>
  )
}

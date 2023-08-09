import { useResetPasswordForm } from '../../hooks/useResetPasswordForm'
import { Button } from '../Button'
import { ErrorText } from '../ErrorText'
import { Input } from '../Input'
import { TextField } from '../TextField'
import * as S from './ResetPasswordForm.styles'

type ResetPasswordFormProps = {
  email: string
}

export function ResetPasswordForm({ email }: ResetPasswordFormProps) {
  const { onSubmit, errors, register, responseError } =
    useResetPasswordForm(email)

  return (
    <S.Form onSubmit={onSubmit}>
      <S.TitleWrapper>
        <S.TitleForm>Criar nova senha</S.TitleForm>
        <S.SubtitleForm>
          Preencha o formulário para criar uma nova senha
        </S.SubtitleForm>
      </S.TitleWrapper>
      <S.FieldsWrapper>
        <TextField
          label="Nova senha"
          name="password"
          errorMessage={errors.password?.message}
        >
          <Input
            placeholder="Informe sua senha"
            type="password"
            id="password"
            hasError={!!errors.password?.message}
            {...register('password')}
          />
        </TextField>
        <TextField
          label="Confirmar nova senha"
          name="confirmPassword"
          errorMessage={errors.confirmPassword?.message}
        >
          <Input
            placeholder="Informe sua senha"
            type="password"
            id="confirmPassword"
            hasError={!!errors.confirmPassword?.message}
            {...register('confirmPassword')}
          />
        </TextField>
      </S.FieldsWrapper>
      <Button variant="main">Enviar</Button>
      {responseError && <ErrorText>{responseError}</ErrorText>}
    </S.Form>
  )
}

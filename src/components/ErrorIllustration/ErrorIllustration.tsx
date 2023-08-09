import { ErrorText } from '../ErrorText'
import * as S from './ErrorIllustration.styles'

export function ErrorIllustration() {
  return (
    <S.Wrapper>
      <img src="/error.svg" alt="Houve um erro, tente novamente mais tarde" />
      <ErrorText>Houve um erro, tente novamente mais tarde.</ErrorText>
    </S.Wrapper>
  )
}

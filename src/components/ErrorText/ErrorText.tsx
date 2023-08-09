import React from 'react'
import * as S from './ErrorText.styles'

type ErrorTextProps = React.HTMLAttributes<HTMLParagraphElement>

export function ErrorText({ children }: ErrorTextProps) {
  return <S.P>{children}</S.P>
}

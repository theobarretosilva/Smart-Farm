import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import React from 'react'
import { ErrorText } from '../ErrorText'
import * as S from './TextField.styles'

type TextFieldProps = {
  label: string
  name: string
  children: React.ReactNode
  errorMessage?: React.ReactNode
  isHidden?: boolean
}

export function TextField({
  label,
  name,
  children,
  errorMessage,
  isHidden = false,
}: TextFieldProps) {
  const HiddenTag = isHidden ? VisuallyHidden.Root : React.Fragment
  return (
    <S.Wrapper>
      <HiddenTag>
        <S.Label hasError={!!errorMessage} htmlFor={name}>
          {label}
        </S.Label>
      </HiddenTag>
      {children}
      {!!errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </S.Wrapper>
  )
}

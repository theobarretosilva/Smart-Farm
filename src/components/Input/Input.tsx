import React, { forwardRef } from 'react'
import * as S from './Input.styles'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  inputRef?: (inputElement: HTMLElement) => void
  hasError?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { placeholder, type, id, value, onChange, inputRef, hasError, ...props },
    forwardedRef
  ) => {
    const ref =
      (inputRef &&
        (inputRef as unknown as React.RefObject<HTMLInputElement>)) ||
      forwardedRef
    return (
      <S.Input
        ref={ref}
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        hasError={hasError}
        {...props}
      />
    )
  }
)

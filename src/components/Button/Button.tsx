import { forwardRef } from 'react'
import * as S from './Button.styles'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'main' | 'outlined' | 'text'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, ...props }, forwardedRef) => {
    return (
      <S.Button ref={forwardedRef} variant={variant} {...props}>
        {children}
      </S.Button>
    )
  }
)

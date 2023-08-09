import styled, { DefaultTheme, css } from 'styled-components'
import type { InputProps } from './Input'

type StyledInputProps = Pick<InputProps, 'hasError' | 'disabled'>

const inputVariants = {
  error: (theme: DefaultTheme) => css`
    color: ${theme.colors.red[500]};
    border-color: ${theme.colors.red[300]};

    &::placeholder {
      color: ${theme.colors.red[300]};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.slate[200]};
  `,
}

export const Input = styled.input<StyledInputProps>`
  ${({ theme, hasError, disabled }) => css`
    border: 1px solid ${theme.colors.slate[300]};
    border-radius: ${theme.borderRadius.sm};
    font-size: 1rem;
    color: black;
    padding: ${theme.spacing[4]};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.slate[500]};
    }

    ${hasError && inputVariants.error(theme)}
    ${disabled && inputVariants.disabled(theme)}

    @media (min-width: 1350px) {
      font-size: 1rem;
    }
  `}
`

import styled, { DefaultTheme, css } from 'styled-components'

const ButtonVariants = {
  main: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.brand};
    border-color: ${theme.colors.brand};
    color: ${theme.colors.white};

    &:hover {
      background-color: #00bf3a;
    }

    &:active {
      background-color: #00a335;
    }

    &:disabled {
      background-color: ${theme.colors.slate[400]};
      border-color: ${theme.colors.slate[400]};
      cursor: not-allowed;
    }
  `,
  text: (theme: DefaultTheme) => css`
    background-color: transparent;
    text-decoration: underline;
    color: ${theme.colors.brand};
    border-color: transparent;

    &:hover {
      color: #00bf3a;
    }

    &:active {
      color: #00a335;
    }
  `,

  outlined: (theme: DefaultTheme) => css`
    background-color: transparent;
    color: ${theme.colors.slate[500]};
    border-color: ${theme.colors.slate[500]};

    &:hover {
      background-color: ${theme.colors.slate[100]};
    }

    &:active {
      background-color: ${theme.colors.slate[200]};
    }
  `,
}

type ButtonProps = { variant: keyof typeof ButtonVariants }

export const Button = styled.button<ButtonProps>`
  ${({ theme, variant = 'main' }) => css`
    border-radius: ${theme.borderRadius.sm2};
    border-style: solid;
    border-width: 1px;
    padding: ${theme.spacing[4]} 0;
    font-weight: ${theme.fontWeight.semibold};
    font-size: ${theme.fontSize.base};
    width: 100%;
    cursor: pointer;
    transition: background-color 200ms;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;

    ${ButtonVariants[variant](theme)}
  `}
`

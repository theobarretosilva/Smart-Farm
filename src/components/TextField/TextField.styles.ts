import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacing[2]};
    text-align: left;
  `}
`

type LabelProps = {
  hasError: boolean
}

export const Label = styled.label<LabelProps>`
  ${({ theme, hasError }) => css`
    color: ${hasError ? theme.colors.red[500] : theme.colors.slate[800]};
    font-weight: 600;
    font-size: ${theme.fontSize.base};

    @media (min-width: 1350px) {
      font-size: ${theme.fontSize.base};
    }
  `}
`

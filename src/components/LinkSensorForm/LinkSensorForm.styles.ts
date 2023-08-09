import styled, { css } from 'styled-components'

export const Form = styled.form`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.fontSize.base};
  `}
`

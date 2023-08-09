import styled, { css } from 'styled-components'

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeight.semibold};
    color: #2d2d34;
    font-size: ${theme.fontSize.xl};
  `}
`

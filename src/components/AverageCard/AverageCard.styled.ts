import styled, { css } from 'styled-components'

export const TituloCard = styled.h3`
  ${({ theme }) => css`
    color: #2d2d34;
    font-weight: ${theme.fontWeight.semibold};
  `}
`
export const DivStatistic = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-end: auto;
    gap: ${theme.spacing[14]};
  `}
`

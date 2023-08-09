import styled, { css } from 'styled-components'
import { Card as CardComponent } from '../Card'

export const Card = styled(CardComponent)`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacing[4]};
    padding: ${theme.spacing[8]} ${theme.spacing[7]};
    width: 100%;
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.slate[800]};
    font-weight: 600;
  `}
`
export const Unit = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.slate[500]};
    font-size: ${theme.fontSize.sm};
    font-weight: 500;
  `}
`

export const TitleWrapper = styled.div`
  display: grid;
  gap: 6px;
`

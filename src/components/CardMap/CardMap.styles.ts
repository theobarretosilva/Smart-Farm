import styled, { css } from 'styled-components'
import { Card as CardComponent } from '../Card'

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: ${theme.spacing[6]};
    margin-top: ${theme.spacing[7]};
  `}
`

export const Card = styled(CardComponent)`
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.lg};
    font-weight: 600;
  `}
`
export const SubTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.sm};
  `}
`

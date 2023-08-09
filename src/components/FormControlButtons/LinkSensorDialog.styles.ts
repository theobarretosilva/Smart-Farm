import styled, { css } from 'styled-components'

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing[4]};
    display: flex;
    gap: ${theme.spacing[2]};
  `}
`

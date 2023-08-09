import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100%;
    row-gap: 16px;
    padding: ${theme.spacing[8]} ${theme.spacing[7]};
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.lg};
    border: 1px solid ${theme.colors.gray[200]};
    box-shadow: 15px 15px 75px -45px rgba(147, 149, 163, 0.5);
  `}
`

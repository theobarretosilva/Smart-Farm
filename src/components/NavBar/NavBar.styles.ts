import { Link as RouterLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const NavBar = styled.nav`
  ${({ theme }) => css`
    background-color: #f9fafb;
    margin-top: -10px;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    height: 100%;

    a {
      font-weight: ${theme.fontWeight.medium};
      text-decoration: none;
      color: #2d2d34;
    }

    a.active {
      color: ${theme.colors.brand};
      font-weight: ${theme.fontWeight.semibold};
    }
  `}
`
export const UlLink = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: ${theme.spacing['3']} ${theme.spacing[0]};

    li {
      padding: ${theme.spacing['2']} ${theme.spacing[6]};
      list-style-type: none;
    }
  `}
`

export const Titulo = styled.h3`
  ${({ theme }) => css`
    margin: 0 ${theme.spacing[6]};
    color: #b4b6c1;
    font-weight: ${theme.fontWeight.normal};
    font-size: ${theme.fontSize.lg};
  `}
`

export const Link = styled(RouterLink)`
  ${({ theme }) => css`
    margin-left: ${theme.spacing[16]};
    margin-top: auto;
    margin-bottom: 100px;
  `}
`

export const Empresa = styled.h2`
  ${({ theme }) => css`
    padding: ${theme.spacing[16]};
  `}
`

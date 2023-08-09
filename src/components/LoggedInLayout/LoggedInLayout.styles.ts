import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 9fr;
  width: 100%;
  height: 100%;
`

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: #fefefe;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
    gap: ${theme.spacing[36]};
    z-index: 2;
    padding: ${theme.spacing[9]} ${theme.spacing[16]};
  `}
`

export const Main = styled.main`
  background-color: #fff;
  grid-column: 2 / 3;
  grid-row: 2 / 9;
  overflow: auto;
`

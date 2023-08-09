import styled, { css } from 'styled-components'

export const DivFilter = styled.div`
  ${({ theme }) => css`
    margin-left: -${theme.spacing[1]};
    display: flex;
    align-items: end;
  `}
`

export const ButtonSearch = styled.button`
  ${({ theme }) => css`
    margin: ${theme.spacing[0]};
    border: none;
    background-color: #ffffff;
    display: flex;
    align-items: center;

    img {
      width: 100%;
    }
  `}
`

export const InputSearch = styled.input`
  ${({ theme }) => css`
    margin: ${theme.spacing[0]};
    width: 100%;
    border: none;
    color: black;
    font-weight: ${theme.fontWeight.normal};

    :focus {
      outline: 0;
    }

    ::placeholder {
      color: #9395a3;
    }
  `}
`

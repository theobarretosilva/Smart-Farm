import styled, { css } from 'styled-components'
import { Button as ButtonComponent } from '../Button/Button'

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`

export const Form = styled.form`
  ${({ theme }) => css`
    width: min(500px, 100%);
    margin: 0 auto;
    display: grid;
    gap: ${theme.spacing[6]};
  `}
`

export const SubContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: ${theme.spacing[6]};
    column-gap: ${theme.spacing[4]};
    align-items: start;
  `}
`
export const Button = styled(ButtonComponent)`
  ${({ theme }) => css`
    max-width: ${theme.spacing[80]};
    margin-top: ${theme.spacing[12]};
    place-self: center;
  `}
`

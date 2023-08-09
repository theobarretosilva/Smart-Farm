import styled, { css } from 'styled-components'
import { Button as ButtonComponent } from '../../components/Button'

export const Button = styled(ButtonComponent)`
  ${({ theme }) => css`
    padding: ${theme.spacing[3]} ${theme.spacing[8]};
  `}
`

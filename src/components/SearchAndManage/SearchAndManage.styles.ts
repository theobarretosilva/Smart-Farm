import styled, { css } from 'styled-components'
import { Button as ButtonComponent } from '../Button'

export const OuterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[16]};
  width: fit-content;
  align-items: center;
`

import {
  Trigger,
  Content,
  Viewport,
  Item,
  Separator,
  Icon,
} from '@radix-ui/react-select'
import styled, { DefaultTheme, css } from 'styled-components'
import { SelectVariant } from '../../types/selectVariant'

type SelectTriggerProps = {
  variant: SelectVariant
  $hasError?: boolean
}

const selectTriggerVariants = {
  header: (theme: DefaultTheme) => css`
    border: unset;
    width: fit-content;
    gap: 16px;
    color: ${theme.colors.brand};
    font-weight: ${theme.fontWeight.medium};
    padding: ${theme.spacing[2]};
  `,
  form: (theme: DefaultTheme) => css`
    color: black;
    border: 1px solid ${theme.colors.slate[300]};
    width: 100%;
    min-height: 58px;
  `,
}

export const SelectTrigger = styled(Trigger)<SelectTriggerProps>`
  ${({ theme, variant, $hasError }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    border-radius: ${theme.borderRadius.sm};
    padding: ${theme.spacing[4]};
    font-size: ${theme.fontSize.base};
    cursor: pointer;
    background-color: white;
    ${selectTriggerVariants[variant](theme)}

    &:focus {
      box-shadow: 0 0 0 2px black;
    }

    &[data-placeholder] {
      color: ${theme.colors.slate[500]};
    }

    &[data-state='closed'] > span:nth-child(2) {
      transition: transform 200ms;
      transform: rotate(0deg);
    }

    &[data-state='open'] > span:nth-child(2) {
      transition: transform 200ms;
      transform: rotate(180deg);
    }

    ${$hasError &&
    variant === 'form' &&
    css`
      color: ${theme.colors.red[500]};
      border-color: ${theme.colors.red[300]};

      &[data-placeholder] {
        color: ${theme.colors.red[300]};
      }
    `}
  `}
`

export const SelectContent = styled(Content)`
  z-index: 4;
  background-color: white;
  border-radius: 6px;
  border: 1px solid #e6e7eb;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`

export const SelectViewport = styled(Viewport)`
  border-radius: 6px;
  padding: ${({ theme }) => theme.spacing[0.5]};
  box-shadow: 4px 8px 40px -15px rgba(38, 50, 56, 0.15);
`

export const StyledItem = styled(Item)`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.base};
    line-height: 1;
    display: flex;
    align-items: center;
    padding: ${theme.spacing[4]} ${theme.spacing[6]};
    position: relative;
    user-select: none;
    width: var(--radix-select-trigger-width);
    color: black;
    transition: all 200ms;

    &[data-highlighted] {
      color: ${theme.colors.brand};
      background-color: ${theme.colors.slate[100]};
    }

    &:hover {
      cursor: pointer;
    }

    &[data-state='checked'] {
      color: ${theme.colors.brand};
      font-weight: 700;
    }
  `}
`

export const SelectSeparator = styled(Separator)`
  ${({ theme }) => css`
    height: ${theme.spacing.px};
    margin: 0 ${theme.spacing[6]};
    background-color: hsla(233, 11%, 91%, 1);
  `}
`

export const SelectIcon = styled(Icon)`
  width: 16px;
  display: flex;
  align-items: center;
`

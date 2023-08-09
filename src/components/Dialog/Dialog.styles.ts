import styled, { css, keyframes } from 'styled-components'
import * as RadixDialog from '@radix-ui/react-dialog'

const overlayShow = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const contentShow = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -48%) scale(.96);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`
export const Overlay = styled(RadixDialog.Overlay)`
  ${({ theme }) => css`
    background-color: ${theme.colors.overlay};
    position: fixed;
    inset: 0;
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 4;
  `}
`

export const Content = styled(RadixDialog.Content)`
  ${({ theme }) => css`
    z-index: 4;
    background-color: ${theme.colors.white};
    padding: ${theme.spacing[8]};
    border-radius: ${theme.borderRadius.md};
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min(563px, 90vw);
    padding: ${theme.spacing[8]};
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
    display: grid;
    gap: ${theme.spacing[8]};

    &:focus {
      outline: none;
    }
  `}
`

export const IconButton = styled.button`
  ${({ theme }) => css`
    all: unset;
    cursor: pointer;
    font-family: inherit;
    border-radius: 100%;
    height: 25px;
    width: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0px;
    right: -30px;
    opacity: 1;
    transition: opacity 200ms;

    &:hover {
      opacity: 0.8;
    }

    &:focus {
      box-shadow: 0 0 0 2px ${theme.colors.slate[300]};
    }
  `}
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacing[2]};
  `}
`

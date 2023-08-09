import styled, { css } from 'styled-components'

export const BackgroundForm = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacing[10]};
    background: white;
    border-radius: ${theme.borderRadius.md};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing[12]};
    padding: ${theme.spacing[6]} ${theme.spacing[6]};
    width: min(480px, 100%);

    @media (min-width: 475px) {
      padding: ${theme.spacing[10]} ${theme.spacing[16]};
    }
  `}
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacing[3]};
  `}
`

export const DivLining = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing[14]};
  `}
`

export const FieldsWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacing[5]};
  `}
`

export const TitleForm = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeight.bold};
    font-size: 1.5rem;
    color: #2c2c2c;
  `}
`

export const SubtitleForm = styled.h2`
  font-size: 0.9rem;
  color: #b4b6c1;
  font-weight: 400;
`

export const Form = styled.form`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacing[12]};
  `}
`

export const TxtForgotPwd = styled.p`
  font-size: 0.9rem;
  color: #989898;
`

export const EndingTextWrapper = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacing[10]};
    display: grid;
    gap: ${theme.spacing[10]};
  `}
`

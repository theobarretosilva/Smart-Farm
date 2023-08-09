import styled, { css } from 'styled-components'
import { Button as ButtonComponent } from '../../components/Button'

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
    margin: 0 auto;
    display: grid;
    gap: ${theme.spacing[6]};

    @media (min-width: 1350px) {
      gap: ${theme.spacing[3]};
    }
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
    margin-top: ${theme.spacing[6]};
    place-self: center;
  `}
`

export const BackgroundForm = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacing[10]};
    background: white;
    border-radius: ${theme.borderRadius.md};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing[6]};
    padding: ${theme.spacing[6]} ${theme.spacing[6]};
    width: min(680px, 100%);

    @media (min-width: 475px) {
      padding: ${theme.spacing[10]} ${theme.spacing[16]};
    }

    @media (min-width: 1350px) {
      margin-top: ${theme.spacing[60]};
      padding: ${theme.spacing[4]} ${theme.spacing[4]};
    }
  `}
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacing[3]};
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

    @media (min-width: 1350px) {
      font-size: 1.5rem;
    }
  `}
`

export const SubtitleForm = styled.h2`
  font-size: 0.9rem;
  color: #b4b6c1;
  font-weight: 400;

  @media (min-width: 1350px) {
    font-size: 1rem;
  }
`

export const OuterText = styled.p`
  font-size: 0.9rem;
  color: #989898;

  @media (min-width: 1350px) {
    font-size: 1rem;
  }
`

export const EndingTextWrapper = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacing[10]};
    display: grid;
    gap: ${theme.spacing[10]};
  `}
`

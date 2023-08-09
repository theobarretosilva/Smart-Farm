import * as S from './Card.styles'

type CardProps = {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return <S.Wrapper className={className}>{children}</S.Wrapper>
}

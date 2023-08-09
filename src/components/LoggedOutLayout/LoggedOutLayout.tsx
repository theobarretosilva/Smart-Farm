import { ReactNode } from 'react'
import * as S from './LoggedOutLayout.styles'

type LoggedOutLayoutProps = {
  children: ReactNode
}

export function LoggedOutLayout({ children, ...props }: LoggedOutLayoutProps) {
  return <S.MainLayout {...props}>{children}</S.MainLayout>
}

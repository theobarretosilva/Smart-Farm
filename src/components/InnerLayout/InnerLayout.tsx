import React from 'react'
import * as S from './InnerLayout.styles'

type InnerLayoutProps = {
  children: React.ReactNode
}

export function InnerLayout({ children }: InnerLayoutProps) {
  return <S.Section>{children}</S.Section>
}

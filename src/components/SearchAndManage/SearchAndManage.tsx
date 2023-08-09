import React from 'react'
import { TitleSection } from '../TitleSection'
import { Filter } from '../Filter'
import * as S from './SearchAndManage.styles'

type SearchAndManageProps = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  title: string
  addEntryDialog: React.ReactNode
}

export function SearchAndManage({
  setValue,
  title,
  value,
  addEntryDialog,
}: SearchAndManageProps) {
  return (
    <S.OuterWrapper>
      <div>
        <TitleSection name={title} />
        <Filter value={value} setValue={setValue} />
      </div>
      <S.ButtonsWrapper>{addEntryDialog}</S.ButtonsWrapper>
    </S.OuterWrapper>
  )
}

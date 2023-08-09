import React from 'react'
import { useParams } from 'react-router-dom'
import { InnerLayout } from '../../components/InnerLayout'
import { SearchAndManage } from '../../components/SearchAndManage'
import { LinkSensorDialog } from '../../components/LinkSensorDialog'
import * as S from './SensorsLayout.styles'
import { SelectLocationWarningDialog } from './SelectLocationWarningDialog'

type SensorsLayoutBaseProps = {
  setSearchedTerm: React.Dispatch<React.SetStateAction<string>>
  searchedTerm: string
  children: React.ReactNode
}
export function SensorsLayoutBase({
  setSearchedTerm,
  searchedTerm,
  children,
}: SensorsLayoutBaseProps) {
  const params = useParams()
  const hasSelectedLocation = !!params.location_id

  const AddEntryDialog = hasSelectedLocation ? (
    <LinkSensorDialog
      trigger={<S.Button variant="main">Novo Sensor</S.Button>}
    />
  ) : (
    <SelectLocationWarningDialog />
  )

  return (
    <InnerLayout>
      <SearchAndManage
        value={searchedTerm}
        setValue={setSearchedTerm}
        title="Sensores"
        addEntryDialog={AddEntryDialog}
      />
      {children}
    </InnerLayout>
  )
}

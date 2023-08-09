import React from 'react'
import { useParams } from 'react-router-dom'
import { InnerLayout } from '../../components/InnerLayout'
import { Overview } from '../../components/Overview/Overview'
import { NoData } from '../../components/NoData'
import { useStore } from '../../lib/zustand/store'
import { TitleSection } from '../../components/TitleSection'

export function OverviewLayout() {
  const params = useParams()
  const hasSelectedLocation = !!params?.location_id
  const { selectedLocation } = useStore()
  const title = selectedLocation || 'Escolha um local'

  if (!hasSelectedLocation) {
    return (
      <NoData
        content="Você não selecionou um local"
        content2="Selecione um local para visualizar os dados!"
      />
    )
  }

  return (
    <InnerLayout>
      <TitleSection name={title} />
      <Overview />
    </InnerLayout>
  )
}

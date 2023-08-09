import { Skeleton } from '@mui/material'
import { useState } from 'react'
import { LocationsDataGrid } from '../../components/LocationsDataGrid/LocationsDataGrid'
import { InnerLayout } from '../../components/InnerLayout'
import { useGetLocations } from '../../hooks/useGetLocations'
import { SearchAndManage } from '../../components/SearchAndManage'
import { LocationDialog } from '../../components/LocationDialog'
import * as S from './LocationLayout.styles'
import { NoData } from '../../components/NoData'
import { ErrorIllustration } from '../../components/ErrorIllustration'

export function LocationsLayout() {
  const { getLocationsQuery } = useGetLocations()
  const [searchedTerm, setSearchedTerm] = useState('')

  if (getLocationsQuery.isLoading) {
    return <Skeleton width="90%" height={600} />
  }

  if (getLocationsQuery.error) {
    return <ErrorIllustration />
  }

  const locations =
    getLocationsQuery.data?.map((location) => ({
      id: location.location_id,
      location_id: location.location_id,
      fieldName: location.fieldName,
      latitude: location.latitude,
      longitude: location.longitude,
      linked_sensor: location.sensorCount,
    })) || []

  const filteredLocations = locations.filter(({ fieldName }) =>
    fieldName.toLowerCase().includes(searchedTerm.toLowerCase())
  )

  return (
    <InnerLayout>
      <SearchAndManage
        value={searchedTerm}
        setValue={setSearchedTerm}
        title="Locais"
        addEntryDialog={
          <LocationDialog
            trigger={<S.Button variant="main">Novo Local</S.Button>}
          />
        }
      />
      {getLocationsQuery.data?.length === 0 ? (
        <NoData
          content="Você ainda não registrou nenhum local"
          content2="Após cadastrar, eles aparecerão aqui!"
        />
      ) : (
        <LocationsDataGrid locations={filteredLocations} />
      )}
    </InnerLayout>
  )
}

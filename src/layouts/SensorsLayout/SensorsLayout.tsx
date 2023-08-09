import { useState } from 'react'
import { Skeleton } from '@mui/material'
import { useParams } from 'react-router-dom'
import { SensorsDataGrid } from '../../components/SensorsDataGrid'
import { useSensorsByLocation } from '../../hooks/useSensorsByLocation'
import { NoData } from '../../components/NoData'
import { SensorsLayoutBase } from './SensorsLayoutBase'
import { ErrorIllustration } from '../../components/ErrorIllustration'

export function SensorsLayout() {
  const params = useParams()
  const { sensorsByLocationQuery } = useSensorsByLocation(
    Number(params?.location_id)
  )
  const [searchedTerm, setSearchedTerm] = useState('')

  if (sensorsByLocationQuery.isInitialLoading) {
    return <Skeleton width="90%" height={600} />
  }

  if (sensorsByLocationQuery.error) {
    return <ErrorIllustration />
  }

  const hasSelectedLocation = !!params?.location_id
  const hasRegisteredDevices = sensorsByLocationQuery.data?.length !== 0

  const sensors =
    sensorsByLocationQuery.data?.map((sensor) => ({
      id: sensor.sensor_id,
      sensor_id: sensor.sensor_id,
      name: sensor.name,
      createdAt: sensor.createdAt,
      macAddress: sensor.macAddress,
      active: sensor.active,
      available_sensor_id: sensor.available_sensor_id,
    })) || []

  const filteredSensors = searchedTerm
    ? sensors.filter(({ name }) =>
        name.toLowerCase().includes(searchedTerm.toLowerCase())
      )
    : sensors

  if (!hasSelectedLocation) {
    return (
      <SensorsLayoutBase
        searchedTerm={searchedTerm}
        setSearchedTerm={setSearchedTerm}
      >
        <NoData
          content="Você não selecionou um local"
          content2="Selecione um local para visualizar a tabela!"
        />
      </SensorsLayoutBase>
    )
  }

  if (!hasRegisteredDevices) {
    return (
      <SensorsLayoutBase
        searchedTerm={searchedTerm}
        setSearchedTerm={setSearchedTerm}
      >
        <NoData
          content="Você ainda não registrou nenhum sensor neste local"
          content2="Registre um sensor para visualizar a tabela!"
        />
      </SensorsLayoutBase>
    )
  }

  return (
    <SensorsLayoutBase
      setSearchedTerm={setSearchedTerm}
      searchedTerm={searchedTerm}
    >
      <SensorsDataGrid sensors={filteredSensors} />
    </SensorsLayoutBase>
  )
}

import { Skeleton } from '@mui/material'
import * as S from './Overview.styles'
import { AverageCard } from '../AverageCard'
import { CardMap } from '../CardMap'
import { ChartCard } from '../ChartCard'
import { useLocationOverview } from '../../hooks/useLocationOverview'
import { ErrorIllustration } from '../ErrorIllustration'
import { useChart } from '../../hooks/useChart'

export function Overview() {
  const { humidityData, tempData } = useChart()
  const { isError, isInitialLoading } = useLocationOverview()
  if (isInitialLoading) {
    return (
      <S.Grid>
        <Skeleton variant="rectangular" width="100%" height={325} />
        <Skeleton variant="rectangular" width="100%" height={325} />
        <Skeleton variant="rectangular" width="100%" height={325} />
        <Skeleton variant="rectangular" width="100%" height={325} />
      </S.Grid>
    )
  }

  if (isError) {
    return <ErrorIllustration />
  }

  return (
    <S.Grid>
      <AverageCard />
      <CardMap />
      <ChartCard
        title="Histórico de Temperatura"
        unit="Em graus celsius (°C)"
        data={tempData}
      />
      <ChartCard
        title="Histórico de Umidade do Solo"
        unit="Em porcentagem"
        data={humidityData}
      />
    </S.Grid>
  )
}

import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { Card } from '../Card'
import { Statistic } from '../Statistic'
import * as S from './AverageCard.styled'
import { useAverageCard } from '../../hooks/useAverageCard'
import { useOverview } from '../../hooks/useOverview'

export function AverageCard() {
  const params = useParams()
  const { overviewQuery } = useOverview(Number(params?.location_id))
  const { avgHumidity, avgHumiditySoil, avgTemp, avgTempSoil } =
    useAverageCard()

  if (overviewQuery.isInitialLoading) {
    return <CircularProgress color="success" />
  }

  return (
    <section>
      <Card>
        <S.TituloCard>Médias</S.TituloCard>
        <S.DivStatistic>
          <Statistic
            name="Temperatura"
            measurement={Number.isNaN(avgTemp) ? `N/A` : `${avgTemp}° C`}
          />
          <Statistic
            name="Umidade"
            measurement={Number.isNaN(avgHumidity) ? `N/A` : `${avgHumidity}%`}
          />
          <Statistic
            name="Temperatura de solo"
            measurement={
              Number.isNaN(avgTempSoil) ? `N/A` : `${avgTempSoil}° C`
            }
          />
          <Statistic
            name="Umidade de solo"
            measurement={
              Number.isNaN(avgHumiditySoil) ? `N/A` : `${avgHumiditySoil}%`
            }
          />
        </S.DivStatistic>
      </Card>
    </section>
  )
}

import { LineChart } from '../LineChart'
import * as S from './ChartCard.styles'

type ChartCardProps = {
  title: string
  unit: string
  data: { date: Date; measurement: number }[]
}

export function ChartCard({ title, unit, data }: ChartCardProps) {
  return (
    <S.Card>
      <S.TitleWrapper>
        <S.Title>{title}</S.Title>
        <S.Unit>{unit}</S.Unit>
      </S.TitleWrapper>
      <LineChart data={data} />
    </S.Card>
  )
}

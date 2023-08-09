import { CircularProgress } from '@mui/material'
import { Map } from '../Map'
import * as S from './CardMap.styles'
import { useLocationOverview } from '../../hooks/useLocationOverview'

export function CardMap() {
  const { isInitialLoading, isError, data } = useLocationOverview()

  if (isInitialLoading) return <CircularProgress color="success" />

  if (isError) return <p>Deu erro! Tente novamente logo mais</p>

  if (data) {
    const { latitude, longitude, sensorCount } = data
    return (
      <S.Card>
        <S.Header>
          <S.Title>Mapa</S.Title>
          <S.SubTitle>Sensores: {sensorCount}</S.SubTitle>
        </S.Header>
        <Map latitude={Number(latitude)} longitude={Number(longitude)} />
      </S.Card>
    )
  }
  return null
}

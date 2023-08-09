import * as S from './Statistic.styles'

type StatisticProps = {
  name: string
  measurement: string
}

export function Statistic({ name, measurement }: StatisticProps) {
  if (name === 'Temperatura') {
    return (
      <S.MainDiv>
        <S.ImgStatistic
          src="../../src/assets/imgs/measurements/temperature.png"
          alt="Foto temperatura"
        />
        <S.InnerDiv>
          <S.MeasurementName>{name}</S.MeasurementName>
          <S.Measurement>{measurement}</S.Measurement>
        </S.InnerDiv>
      </S.MainDiv>
    )
  }
  if (name === 'Umidade') {
    return (
      <S.MainDiv>
        <S.ImgStatistic
          src="../../src/assets/imgs/measurements/humidity.png"
          alt="Foto umidade"
        />
        <S.InnerDiv>
          <S.MeasurementName>{name}</S.MeasurementName>
          <S.Measurement>{measurement}</S.Measurement>
        </S.InnerDiv>
      </S.MainDiv>
    )
  }
  return (
    <S.MainDiv>
      <S.ImgStatistic
        src="../../src/assets/imgs/measurements/soilHumidity-temperature.png"
        alt="Foto umidade"
      />
      <S.InnerDiv>
        <S.MeasurementName>{name}</S.MeasurementName>
        <S.Measurement>{measurement}</S.Measurement>
      </S.InnerDiv>
    </S.MainDiv>
  )
}

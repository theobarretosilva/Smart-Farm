import { useParams } from 'react-router-dom'
import { subDays, isAfter } from 'date-fns'
import { useOverview } from './useOverview'

export const useChart = () => {
  const params = useParams()
  const { overviewQuery } = useOverview(Number(params?.location_id))

  const sensorTemp = overviewQuery.data?.sensor.filter(
    (sensor) => sensor.availableSensor.type === 'temperatura'
  )

  const sensorHumidity = overviewQuery.data?.sensor.filter(
    (sensor) => sensor.availableSensor.type === 'umidade_do_solo'
  )

  const measurementsTemp = sensorTemp?.map((sensor) => sensor.measurements)
  const measurementsHumidity = sensorHumidity?.map(
    (sensor) => sensor.measurements
  )

  const today = new Date()
  const cutoffDate = subDays(today, 7)

  const filteredDataTemp =
    measurementsTemp?.map((e) =>
      e.filter((date) => isAfter(new Date(date.createdAt), cutoffDate))
    ) || []
  const filteredDataHumidity =
    measurementsHumidity?.map((e) =>
      e.filter((date) => isAfter(new Date(date.createdAt), cutoffDate))
    ) || []

  function avgMeasurements(array: Array<number>) {
    let somaTemp = 0
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < array.length; i++) {
      somaTemp += array[i]
    }
    const avg = Math.floor(somaTemp / array.length)
    return avg
  }

  const dateTemp =
    filteredDataTemp?.flat().map(({ createdAt }) => createdAt) || []
  const dateHumidity =
    filteredDataHumidity?.flat().map(({ createdAt }) => createdAt) || []

  const listDateTemp = dateTemp
    .flat()
    .filter((este, i) => dateTemp.indexOf(este) === i)
  const listDateHumidity = dateHumidity
    .flat()
    .filter((este, i) => dateHumidity.indexOf(este) === i)

  const tempData: { date: Date; measurement: number }[] = []
  listDateTemp.forEach((element) => {
    const dataTemp = filteredDataTemp
      ?.flat()
      .filter((e) => e.createdAt === element)
    const measurements = dataTemp.map(({ measurement }) => measurement)
    const date = new Date(`${element}T00:00:00`)
    const avg = avgMeasurements(measurements) || 0
    tempData.push({ date, measurement: avg })
  })

  const humidityData: { date: Date; measurement: number }[] = []
  listDateHumidity.forEach((element) => {
    const dataHumidity = filteredDataHumidity
      ?.flat()
      .filter((e) => e.createdAt === element)
    const measurements = dataHumidity.map(({ measurement }) => measurement)
    const avg = avgMeasurements(measurements) || 0
    const date = new Date(`${element}T00:00:00`)
    humidityData.push({ date, measurement: avg })
  })

  return { tempData, humidityData }
}

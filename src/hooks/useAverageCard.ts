import { useParams } from 'react-router-dom'
import { useOverview } from './useOverview'

export const useAverageCard = () => {
  const params = useParams()
  const { overviewQuery } = useOverview(Number(params?.location_id))

  const date = new Date()
  const day = date.getDate()
  const year = date.getFullYear()
  let month = (date.getMonth() + 1).toString()
  if (date.getMonth() < 9) {
    month = `0${date.getMonth() + 1}`
  }

  const sensorTemp =
    overviewQuery.data?.sensor.filter(
      (sensor) => sensor.availableSensor.type === 'temperatura'
    ) || []
  const sensorTempSoil =
    overviewQuery.data?.sensor.filter(
      (sensor) => sensor.availableSensor.type === 'temperatura_do_solo'
    ) || []
  const sensorHumidity =
    overviewQuery.data?.sensor.filter(
      (sensor) => sensor.availableSensor.type === 'umidade'
    ) || []
  const sensorHumiditySoil = overviewQuery.data?.sensor.filter(
    (sensor) => sensor.availableSensor.type === 'umidade_do_solo'
  )

  const measurementsTemp = sensorTemp?.map((sensor) => sensor.measurements)
  const measurementsTempSoil = sensorTempSoil?.map(
    (sensor) => sensor.measurements
  )
  const measurementsHumidity = sensorHumidity?.map(
    (sensor) => sensor.measurements
  )
  const measurementsHumiditySoil = sensorHumiditySoil?.map(
    (sensor) => sensor.measurements
  )

  const measurementsForTodayTemp =
    measurementsTemp?.map((measurement) =>
      measurement.filter(
        (e) => e.createdAt.toString() === `${year}-${month}-${day}`
      )
    ) || []

  const measurementsForTodayTempSoil =
    measurementsTempSoil?.map((measurement) =>
      measurement.filter(
        (e) => e.createdAt.toString() === `${year}-${month}-${day}`
      )
    ) || []
  const measurementsForTodayHumidity =
    measurementsHumidity?.map((measurement) =>
      measurement.filter(
        (e) => e.createdAt.toString() === `${year}-${month}-${day}`
      )
    ) || []
  const measurementsForTodayHumiditySoil =
    measurementsHumiditySoil?.map((measurement) =>
      measurement.filter(
        (e) => e.createdAt.toString() === `${year}-${month}-${day}`
      )
    ) || []

  const tempMeasurement = measurementsForTodayTemp
    .flat()
    .map(({ measurement }) => measurement)

  const tempSoilMeasurement = measurementsForTodayTempSoil
    .flat()
    .map(({ measurement }) => measurement)

  const humidityMeasurement = measurementsForTodayHumidity
    .flat()
    .map(({ measurement }) => measurement)

  const humiditySoilMeasurement = measurementsForTodayHumiditySoil
    .flat()
    .map(({ measurement }) => measurement)

  function AvgMeasurements(array: Array<number>) {
    let somaTemp = 0
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < array.length; i++) {
      somaTemp += array[i]
    }

    const avg = Math.floor(somaTemp / array.length)
    return avg
  }
  const avgTemp = AvgMeasurements(tempMeasurement)
  const avgTempSoil = AvgMeasurements(tempSoilMeasurement)
  const avgHumidity = AvgMeasurements(humidityMeasurement)
  const avgHumiditySoil = AvgMeasurements(humiditySoilMeasurement)

  return { avgTemp, avgTempSoil, avgHumidity, avgHumiditySoil }
}

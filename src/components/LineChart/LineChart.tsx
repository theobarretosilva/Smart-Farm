import {
  LineChart as LineChartComponent,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

type LineChartProps = {
  data: { date: Date; measurement: number }[]
}

export function LineChart({ data }: LineChartProps) {
  const formattedDatesData = data.map(({ date, measurement }) => {
    const formattedDate = new Intl.DateTimeFormat('pt-BR', {
      month: 'numeric',
      day: 'numeric',
    }).format(date)

    return { date: formattedDate, medida: measurement }
  })

  return (
    <ResponsiveContainer width="100%" height={171}>
      <LineChartComponent
        width={500}
        height={300}
        data={formattedDatesData}
        margin={{
          top: 10,
          right: 10,
          left: -30,
          bottom: -10,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          tick={{ fontSize: '0.75rem' }}
          dataKey="date"
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          tick={{ fontSize: '0.75rem' }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="medida"
          stroke="#00A335"
          activeDot={{ r: 8 }}
          dot={{ fill: '#00A335' }}
          strokeWidth={3}
        />
      </LineChartComponent>
    </ResponsiveContainer>
  )
}

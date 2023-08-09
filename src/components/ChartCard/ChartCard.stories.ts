import type { Meta, StoryObj } from '@storybook/react'
import { ChartCard } from './ChartCard'

const meta: Meta<typeof ChartCard> = {
  title: 'Components/ChartCard',
  component: ChartCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ChartCard>

export const Default: Story = {
  args: {
    title: 'Histórico de Umidade do Solo',
  },
}

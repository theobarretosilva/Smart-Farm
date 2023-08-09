import type { Meta, StoryObj } from '@storybook/react'
import { LineChart } from './LineChart'

const meta: Meta<typeof LineChart> = {
  title: 'Components/LineChart',
  component: LineChart,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LineChart>

export const DefaultChart: Story = {}

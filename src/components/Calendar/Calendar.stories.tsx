import { mockEvents } from '@/mock/events.mock'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import { Calendar } from './Calendar'

const meta: Meta<typeof Calendar> = {
	title: 'Components/Calendar',
	component: Calendar,
	args: {
		events: mockEvents
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Calendar',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		// await step('', () => {})
	}
}


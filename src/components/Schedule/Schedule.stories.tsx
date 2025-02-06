import { mockEvents } from '@/mock/events.mock'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import { Schedule } from './Schedule'

const meta: Meta<typeof Schedule> = {
	title: 'Components/Schedule',
	component: Schedule,
	args: {
		events: mockEvents
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Schedule',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		// await step('', () => {})
	}
}


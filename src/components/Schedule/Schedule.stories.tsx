import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import { mockAppointments } from '../../mock/appointments.mock'
import { Schedule } from './Schedule'

const meta: Meta<typeof Schedule> = {
	title: 'Components/Schedule',
	component: Schedule,
	args: {
		appointments: mockAppointments
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


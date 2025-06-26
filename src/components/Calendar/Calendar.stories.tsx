import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import { mockAppointments } from '../../mock/appointments.mock'
import { Calendar } from './Calendar'

const meta: Meta<typeof Calendar> = {
	title: 'Components/Calendar',
	component: Calendar,
	args: {
		appointments: mockAppointments
	},
	decorators: Story => (
		<div className='max-w-96'>
			<Story />
		</div>
	),
	parameters: {
		layout: 'padded'
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


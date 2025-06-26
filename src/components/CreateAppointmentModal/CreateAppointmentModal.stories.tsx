import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import { CreateAppointmentModal } from './CreateAppointmentModal'

const meta: Meta<typeof CreateAppointmentModal> = {
	title: 'Components/CreateAppointmentModal',
	component: CreateAppointmentModal,
	parameters: {
		layout: 'padded'
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'CreateAppointmentModal',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		// await step('', () => {})
	}
}


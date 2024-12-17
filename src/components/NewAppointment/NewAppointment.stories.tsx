import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import { NewAppointment } from './NewAppointment'

const meta: Meta<typeof NewAppointment> = {
	title: 'Components/NewAppointment',
	component: NewAppointment
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'NewAppointment',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		// Todo
		await step('', () => {})
	}
}


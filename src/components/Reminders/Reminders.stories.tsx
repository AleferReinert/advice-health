import { mockReminders } from '@/mock/reminders.mock'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import { Reminders } from './Reminders'

const meta: Meta<typeof Reminders> = {
	title: 'Components/Reminders',
	component: Reminders,
	args: {
		reminders: mockReminders
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Reminders',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		// Todo
		await step('', () => {})
	}
}


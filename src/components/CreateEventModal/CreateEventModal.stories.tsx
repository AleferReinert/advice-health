import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import { CreateEventModal } from './CreateEventModal'

const meta: Meta<typeof CreateEventModal> = {
	title: 'Components/CreateEventModal',
	component: CreateEventModal
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'CreateEventModal',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		// await step('', () => {})
	}
}


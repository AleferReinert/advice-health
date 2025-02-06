import { mockTasks } from '@/mock/tasks.mock'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import { Tasks } from './Tasks'

const meta: Meta<typeof Tasks> = {
	title: 'Components/Tasks',
	component: Tasks,
	args: {
		tasks: mockTasks
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Tasks',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		// await step('', () => {})
	}
}


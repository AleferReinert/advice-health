import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	args: {
		children: 'Default Button'
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Button',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		// Todo
		await step('', () => {})
	}
}


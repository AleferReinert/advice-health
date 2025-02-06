import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import { ActionButtons } from './ActionButtons'

const meta: Meta<typeof ActionButtons> = {
	title: 'Components/ActionButtons',
	component: ActionButtons
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'ActionButtons',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		// Todo
		// await step('', () => {})
	}
}


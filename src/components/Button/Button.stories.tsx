import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
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

		await step('Children', () => {
			const button = canvas.getByRole('button')
			expect(button).toHaveTextContent('Default Button')
		})
	}
}


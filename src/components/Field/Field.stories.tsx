import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import { Field } from './Field'

const meta: Meta<typeof Field> = {
	title: 'Components/Field',
	component: Field,
	args: {
		label: 'Full name',
		children: <input type='text' />
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Field',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		// await step('', () => {})
	}
}


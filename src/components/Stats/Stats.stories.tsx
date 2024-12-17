import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import { Stats } from './Stats'

const meta: Meta<typeof Stats> = {
	title: 'Components/Stats',
	component: Stats,
	args: {
		title: 'Custom data',
		value: 'R$ 249,00'
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Stats',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		// Todo
		await step('', () => {})
	}
}


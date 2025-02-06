import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Heading } from './Heading'

const meta: Meta<typeof Heading> = {
	title: 'Components/Heading',
	component: Heading,
	args: {
		children: 'Default heading'
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Theme Section (default)',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		step('Children', () => {
			const children = canvas.getByText('Default heading')
			expect(children).toBeInTheDocument()
		})
	}
}

export const ThemeBox: Story = {
	args: {
		theme: 'box'
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		// step('Children', () => {
		// 	const children = canvas.getByText('Default heading')
		// 	expect(children).toBeInTheDocument()
		// })
	}
}


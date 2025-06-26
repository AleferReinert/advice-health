import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { BoxContent } from './BoxContent'

const meta: Meta<typeof BoxContent> = {
	title: 'Components/BoxContent',
	component: BoxContent,
	args: {
		children: <p>Lorem ipsum dolor sit amet.</p>
	},
	parameters: {
		layout: 'padded'
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'BoxContent',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
		const children = canvas.getByRole('paragraph')

		await step('Children', () => {
			expect(children).toBeVisible()
		})
		await step('Background white', () => {
			const box = children.parentElement
			expect(box).toHaveStyle('background-color: rgba(255,255,255)')
		})
	}
}


import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { BoxContent } from './BoxContent'

const meta: Meta<typeof BoxContent> = {
	title: 'Components/BoxContent',
	component: BoxContent,
	args: {
		children: <p>Lorem ipsum dolor sit amet.</p>
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'BoxContent',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Children', () => {
			const children = canvas.getByRole('paragraph')
			expect(children).toBeVisible()
		})
	}
}


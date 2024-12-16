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
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Without title', () => {
			const title = canvas.queryByRole('heading')
			expect(title).not.toBeInTheDocument()
		})

		await step('Render children', () => {
			const children = canvas.getByRole('paragraph')
			expect(children).toBeVisible()
		})
	}
}

export const WithTitle: Story = {
	args: {
		title: 'Consectetur adipiscing'
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Render title', () => {
			const title = canvas.getByRole('heading', { level: 2 })
			expect(title).toHaveTextContent('Consectetur adipiscing')
		})
	}
}


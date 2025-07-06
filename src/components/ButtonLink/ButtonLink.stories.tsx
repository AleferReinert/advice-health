import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { ButtonLink } from './ButtonLink'

const meta: Meta<typeof ButtonLink> = {
	title: 'Components/ButtonLink',
	component: ButtonLink,
	args: {
		children: 'Button Link',
		href: '/link'
	},
	parameters: {
		layout: 'padded'
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Button Link',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Children', () => {
			const link = canvas.getByRole('link')
			expect(link).toHaveTextContent('Button Link')
			expect(link).toHaveAttribute('href', '/link')
		})
	}
}


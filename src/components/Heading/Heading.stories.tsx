import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Heading } from './Heading'

const meta: Meta<typeof Heading> = {
	title: 'Components/Heading',
	component: Heading,
	args: {
		children: 'Default heading'
	},
	parameters: {
		layout: 'padded'
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Children', () => {
			const heading = canvas.getByRole('heading', { level: 2, name: 'Default heading' })
			expect(heading).toBeVisible()
		})

		step('Theme section', () => {
			const heading = canvas.getByRole('heading', { level: 2 })
			expect(heading).toHaveStyle('font-weight: 200')
		})
	}
}

export const Center: Story = {
	args: {
		align: 'center'
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		step('Text align center', () => {
			const heading = canvas.getByRole('heading', { level: 2 })
			expect(heading).toHaveStyle('text-align: center')
		})
	}
}

export const Right: Story = {
	args: {
		align: 'right'
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		step('Text align right', () => {
			const heading = canvas.getByRole('heading', { level: 2 })
			expect(heading).toHaveStyle('text-align: right')
		})
	}
}
export const ThemeBox: Story = {
	args: {
		theme: 'box'
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		step('Theme box', () => {
			const heading = canvas.getByRole('heading', { level: 2 })
			expect(heading).toHaveStyle('color: #374151 ')
		})
	}
}


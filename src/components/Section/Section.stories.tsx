import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Section } from './Section'

const meta: Meta<typeof Section> = {
	title: 'Components/Section',
	component: Section,
	args: {
		title: 'Section title',
		children: 'Lorem ipsum dolor'
	},
	parameters: {
		layout: 'padded'
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Section',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Title', () => {
			const title = canvas.getByRole('heading', { level: 2, name: 'Section title' })
			expect(title).toBeVisible()
		})

		step('Children', () => {
			const children = canvas.getByText('Lorem ipsum dolor')
			expect(children).toBeVisible()
		})
	}
}


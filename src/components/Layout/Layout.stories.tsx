import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Layout } from './Layout'

const meta: Meta<typeof Layout> = {
	title: 'Components/Layout',
	component: Layout,
	args: {
		children: <p>Lorem ipsum dolor sit amet.</p>
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Layout',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Header', () => {
			const Header = document.getElementsByTagName('header')[0]
			expect(Header).toBeVisible()
		})

		await step('Sidebar', () => {
			const Sidebar = document.getElementsByTagName('aside')[0]
			expect(Sidebar).toBeVisible()
		})

		await step('Children', () => {
			const children = canvas.getByText('Lorem ipsum dolor sit amet.')
			expect(children).toBeVisible()
		})
	}
}


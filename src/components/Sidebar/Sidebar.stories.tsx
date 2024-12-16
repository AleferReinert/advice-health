import { mockMenu } from '@/mock/menu.mock'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Sidebar } from './Sidebar'

const meta: Meta<typeof Sidebar> = {
	title: 'Components/Sidebar',
	component: Sidebar,
	args: {
		menu: mockMenu
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Sidebar',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Show button to open sidebar', () => {
			const buttonOpen = canvas.getByRole('button', { name: 'Abrir menu' })
			expect(buttonOpen).toBeVisible()
		})

		await step('Hidden button to close sidebar', () => {
			const buttonClose = canvas.queryByRole('button', { name: 'Fechar menu' })
			expect(buttonClose).not.toBeInTheDocument()
		})

		await step('Render links with href, title and icon', () => {
			mockMenu.map((item, index) => {
				const link = canvas.getAllByRole('link')[index]
				expect(link).toHaveAttribute('href', item.url)
				expect(link).toHaveAttribute('title', item.title)
				const icon = within(link).getByRole('img')
				expect(icon).toBeVisible()
			})
		})
	}
}


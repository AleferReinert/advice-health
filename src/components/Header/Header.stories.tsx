import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { mockMenu } from '../../mock/menu.mock'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
	title: 'Components/Header',
	component: Header
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Header',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Title', () => {
			const title = canvas.getByRole('heading', { level: 1 })
			expect(title).toHaveTextContent(mockMenu[0].title)
		})

		await step('Description', () => {
			const description = canvas.getByRole('paragraph')
			expect(description).toHaveTextContent(mockMenu[0].description!)
		})

		await step('Profile: photo and name', () => {
			const photo = canvas.getByRole('img', { hidden: true })
			const name = canvas.getByRole('link')
			expect(photo).toBeVisible()
			expect(name).toHaveTextContent('John Doe')
		})
	}
}


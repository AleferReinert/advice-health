import { mockMenu } from '@/mock/menu.mock'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
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

		await step('Render title', () => {
			const title = canvas.getByRole('heading', { level: 1 })
			expect(title).toHaveTextContent(mockMenu[0].title)
		})

		await step('Render description', () => {
			const description = canvas.getByRole('paragraph')
			expect(description).toHaveTextContent(mockMenu[0].description)
		})

		await step('Render profile: photo and name', () => {
			const photo = canvas.getByRole('img')
			const name = canvas.getByRole('link')
			expect(photo).toBeVisible()
			expect(name).toHaveTextContent('Alefer Reinert')
		})
	}
}


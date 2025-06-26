import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { ActionButtons } from './ActionButtons'

const meta: Meta<typeof ActionButtons> = {
	title: 'Components/ActionButtons',
	component: ActionButtons,
	parameters: {
		layout: 'padded'
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'ActionButtons',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Button edit', () => {
			const button = canvas.getByRole('button', { name: 'Editar' })
			const svg = within(button).getByRole('img')
			expect(button).toBeVisible()
			expect(svg).toBeVisible()
		})

		await step('Button delete', () => {
			const button = canvas.getByRole('button', { name: 'Excluir' })
			const svg = within(button).getByRole('img')
			expect(button).toBeVisible()
			expect(svg).toBeVisible()
		})
	}
}


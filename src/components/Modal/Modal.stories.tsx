import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
	title: 'Components/Modal',
	component: Modal,
	args: {
		title: 'Modal title',
		children: <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>,
		showModal: true
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Modal',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Title', () => {
			const title = canvas.getByRole('heading', { level: 2 })
			expect(title).toHaveTextContent('Modal title')
		})

		await step('Children', () => {
			const children = canvas.getByRole('paragraph')
			expect(children).toHaveTextContent('Lorem ipsum dolor')
		})

		await step('Close button', () => {
			const closeButton = canvas.getByRole('button', { name: 'Fechar' })
			expect(closeButton).toBeInTheDocument()
		})
	}
}


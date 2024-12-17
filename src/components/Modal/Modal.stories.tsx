import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
	title: 'Components/Modal',
	component: Modal,
	args: {
		title: 'Modal Title',
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

		// Todo
		await step('', () => {})
	}
}


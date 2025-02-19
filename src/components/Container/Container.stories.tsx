import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Container } from './Container'

const meta: Meta<typeof Container> = {
	title: 'Components/Container',
	component: Container,
	args: {
		children: <p className='bg-primary text-white text-center py-4'>html children with background to view dimensions</p>
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Container',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		step('Children', () => {
			const children = canvas.getByText(/html children/)
			expect(children).toBeInTheDocument()
		})
	}
}


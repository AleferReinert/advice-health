import { mockAgenda } from '@/mock/agenda.mock'
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import { Agenda } from './Agenda'

const meta: Meta<typeof Agenda> = {
	title: 'Components/Agenda',
	component: Agenda,
	args: {
		items: mockAgenda
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Agenda',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		// Todo
		await step('', () => {})
	}
}


import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import { CalendarCustom } from './CalendarCustom'

const meta: Meta<typeof CalendarCustom> = {
	title: 'Components/CalendarCustom',
	component: CalendarCustom
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'CalendarCustom',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		// Todo
		await step('', () => {})
	}
}


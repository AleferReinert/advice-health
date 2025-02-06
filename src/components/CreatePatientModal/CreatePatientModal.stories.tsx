import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import { CreatePatientModal } from './CreatePatientModal'

const meta: Meta<typeof CreatePatientModal> = {
	title: 'Components/CreatePatientModal',
	component: CreatePatientModal
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'CreatePatientModal',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		// await step('', () => {})
	}
}


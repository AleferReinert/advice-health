import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import { mockDoctors } from '../../mock/doctors.mock'
import { DoctorList } from './DoctorList'

const meta: Meta<typeof DoctorList> = {
	title: 'Components/DoctorList',
	component: DoctorList,
	args: {
		doctors: mockDoctors
	},
	parameters: {
		layout: 'padded'
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'DoctorList',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		// Todo
		// await step('', () => {})
	}
}


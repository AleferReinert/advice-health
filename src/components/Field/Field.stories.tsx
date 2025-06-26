import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { Field } from './Field'

const meta: Meta<typeof Field> = {
	title: 'Components/Field',
	component: Field,
	parameters: {
		layout: 'padded'
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		label: 'Full name'
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Required label', () => {
			const label = canvas.getByText('Full name:')
			expect(label).toBeVisible()
		})

		await step('Input text as default', () => {
			const input = canvas.getByRole('textbox')
			expect(input).toBeVisible()
		})
	}
}

export const WithMask: Story = {
	args: {
		label: 'Phone',
		mask: '(99) 99999-9999'
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Mask', async () => {
			const input = canvas.getByRole('textbox')
			expect(input).toHaveValue('(__) _____-____')
			await userEvent.type(input, '47999558118')
			expect(input).toHaveValue('(47) 99955-8118')
		})
	}
}


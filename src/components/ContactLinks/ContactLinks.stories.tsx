import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { ContactLinks } from './ContactLinks'

const meta: Meta<typeof ContactLinks> = {
	title: 'Components/ContactLinks',
	component: ContactLinks,
	args: {
		email: 'johndoe@example.com',
		phone: '(11) 99999-9999'
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'ContactLinks',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('E-mail', () => {
			const email = canvas.getByRole('link', { name: 'Enviar e-mail' })
			const icon = within(email).getByRole('img', { hidden: true })
			expect(email).toHaveAttribute('href', 'mailto:johndoe@example.com')
			expect(icon).toBeVisible()
		})

		await step('Whatsapp', () => {
			const whatsapp = canvas.getByRole('link', { name: 'Conversar no WhatsApp' })
			const svg = within(whatsapp).getByRole('img', { hidden: true })
			expect(whatsapp).toHaveAttribute('href', 'https://wa.me/5511999999999')
			expect(svg).toBeVisible()
		})
	}
}


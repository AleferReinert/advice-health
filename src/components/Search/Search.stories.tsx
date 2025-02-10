import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'
import { Search } from './Search'

const meta: Meta<typeof Search> = {
	title: 'Components/Search',
	component: Search,
	args: {
		children: <p className='bg-primary text-white text-center py-4'>html children with background to view dimensions</p>
	}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Search',
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)
	}
}


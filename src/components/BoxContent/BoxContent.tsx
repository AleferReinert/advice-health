import { ReactNode } from 'react'

export interface BoxContentProps {
	title?: string
	children: ReactNode
}

export function BoxContent({ title, children }: BoxContentProps) {
	return (
		<div className='bg-white shadow-md rounded-lg p-4'>
			{title && <h2 className='text-gray-600 text-lg font-medium mb-2'>{title}</h2>}
			{children}
		</div>
	)
}

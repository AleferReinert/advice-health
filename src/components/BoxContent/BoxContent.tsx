import { ReactNode } from 'react'
import { Subtitle } from '../Subtitle/Subtitle'

export interface BoxContentProps {
	title?: ReactNode
	children: ReactNode
}

export function BoxContent({ title, children }: BoxContentProps) {
	return (
		<div className='bg-white shadow-md rounded-lg p-4 h-min'>
			{title && <Subtitle>{title}</Subtitle>}
			{children}
		</div>
	)
}

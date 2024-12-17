import { ReactNode } from 'react'
import { Subtitle } from '../Subtitle/Subtitle'

export interface BoxContentProps {
	title?: ReactNode
	children: ReactNode
	className?: string | undefined
}

export function BoxContent({ title, children, className }: BoxContentProps) {
	return (
		<div className={`bg-white shadow-md rounded-lg p-4 h-min ${className ? className : ''}`}>
			{title && <Subtitle>{title}</Subtitle>}
			{children}
		</div>
	)
}

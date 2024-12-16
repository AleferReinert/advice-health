import { ComponentProps, ReactNode } from 'react'

interface SubtitleProps extends ComponentProps<'h2'> {
	children: ReactNode
}

export function Subtitle({ children, className }: SubtitleProps) {
	return <h2 className={`text-gray-600 text-lg font-medium pb-2 ${className ? className : ''}`}>{children}</h2>
}

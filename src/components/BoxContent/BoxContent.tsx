import { ComponentProps, ReactNode } from 'react'

export interface BoxContentProps extends ComponentProps<'div'> {
	children: ReactNode
}

export function BoxContent({ children, ...rest }: BoxContentProps) {
	return (
		<div className={`bg-white rounded-default shadow-default min-h-full flex flex-col ${rest.className ?? ''}`}>
			{children}
		</div>
	)
}

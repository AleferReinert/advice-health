import { ReactNode } from 'react'

export interface BoxContentProps {
	children: ReactNode
}

export function BoxContent({ children }: BoxContentProps) {
	return <div className='bg-white rounded-default shadow-default min-h-full flex flex-col'>{children}</div>
}

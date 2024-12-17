import { ReactNode } from 'react'

interface ContainerProps {
	children: ReactNode
}

export function Container({ children }: ContainerProps) {
	return <div className='w-full mx-auto px-4 lg:px-8'>{children}</div>
}

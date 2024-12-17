import { ReactNode } from 'react'
import { Loading } from '../Loading/Loading'

export interface BoxContentProps {
	title?: ReactNode
	children: ReactNode
	withoutChildrenPadding?: boolean
	loading?: boolean
	className?: string | undefined
}

export function BoxContent({ title, children, withoutChildrenPadding, loading, className }: BoxContentProps) {
	return (
		<div className={`bg-white shadow-md rounded-lg pt-4 overflow-x-auto h-min ${className ? className : ''}`}>
			{title && <h2 className='`text-gray-600 text-lg font-medium px-4 pb-2'>{title}</h2>}

			{loading ? (
				<div className='p-4 pt-0'>
					<Loading type='component' className='h-8' />
				</div>
			) : (
				<div className={withoutChildrenPadding ? '' : 'px-4 pb-4'}>{children}</div>
			)}
		</div>
	)
}

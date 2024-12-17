import { ReactNode } from 'react'
import { Loading } from '../Loading/Loading'
import { Subtitle } from '../Subtitle/Subtitle'

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
			{title && <Subtitle>{title}</Subtitle>}

			{loading ? (
				<Loading type='component' className='h-8' />
			) : (
				<div className={withoutChildrenPadding ? '' : 'px-4 pb-4'}>{children}</div>
			)}
		</div>
	)
}

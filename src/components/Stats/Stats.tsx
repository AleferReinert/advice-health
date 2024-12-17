import { BoxContent } from '../BoxContent/BoxContent'

interface StatsProps {
	title: string
	value: number | string
	loading: boolean
	className?: string
}

export function Stats({ title, value, loading, className }: StatsProps) {
	const isRevenue = typeof value === 'string'

	return (
		<BoxContent
			withoutChildrenPadding
			title={title}
			loading={loading}
			className={`${className} ${isRevenue ? 'col-span-2 md:col-auto' : ''} min-h-full flex flex-col xl:text-center`}
		>
			<div className='p-4 pt-0 xl:p-10'>
				<p
					className={`
					${isRevenue ? 'xl:text-5xl xl:mt-9' : 'xl:text-8xl xl:mt-2'} 
					text-primary text-2xl font-bold
				`}
				>
					{value}
				</p>
			</div>
		</BoxContent>
	)
}

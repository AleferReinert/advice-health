import { BoxContent } from '../BoxContent/BoxContent'
import { Loading } from '../Loading/Loading'

interface StatsProps {
	title: string
	value: number | string
	loading: boolean
}

export function Stats({ title, value, loading }: StatsProps) {
	return (
		<BoxContent title={title}>
			{loading ? <Loading type='component' className='h-8' /> : <p className='text-primary text-2xl font-bold'>{value}</p>}
		</BoxContent>
	)
}

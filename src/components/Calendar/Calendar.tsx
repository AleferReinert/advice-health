import { setSelectedDate } from '@/app/features/schedule/scheduleSlice'
import { RootState } from '@/app/store'
import ReactCalendar from 'react-calendar'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { BoxContent } from '../BoxContent/BoxContent'

export function Calendar() {
	const { selectedDate, events } = useSelector((state: RootState) => state.schedule)
	const { tasks } = useSelector((state: RootState) => state.tasks)
	const dispatch = useDispatch()
	const minDate = new Date(Math.min(...events.map(event => new Date(event.date).getTime()))) || undefined
	const maxDate = new Date(Math.max(...events.map(event => new Date(event.date).getTime()))) || undefined

	return (
		<BoxContent>
			<ReactCalendar
				onChange={value => {
					if (value instanceof Date) {
						dispatch(setSelectedDate(value.toDateString()))
					}
				}}
				value={selectedDate}
				tileClassName={({ date, view }: { date: Date; view: string }) => {
					if (view === 'month') {
						const hasEvent = events.some(event => event.date === date.toDateString())
						const hasTask = tasks.some(task => task.date === date.toDateString())
						if (hasEvent || hasTask) return 'hasEvent'
					}
				}}
				locale='pt-BR'
				className='react-calendar my-4'
				minDate={minDate}
				maxDate={maxDate}
				formatMonthYear={(locale, date) => {
					return date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }).replace(' de ', '/')
				}}
				prev2Label={<AiOutlineDoubleLeft />}
				prevLabel={<AiOutlineLeft />}
				nextLabel={<AiOutlineRight />}
				next2Label={<AiOutlineDoubleRight />}
				prev2AriaLabel='Início'
				prevAriaLabel='Voltar'
				nextAriaLabel='Próximo'
				next2AriaLabel='Final'
			/>
		</BoxContent>
	)
}

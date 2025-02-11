import { EventState, setSelectedDate } from '@/app/features/schedule/scheduleSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import ReactCalendar from 'react-calendar'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { BoxContent } from '../BoxContent/BoxContent'

interface CalendarProps {
	events: EventState[]
	showTasks?: boolean
	selectedDate?: string
}

export function Calendar({ events, selectedDate, showTasks = false }: CalendarProps) {
	const { tasks } = useAppSelector(state => state.tasks)
	const dispatch = useAppDispatch()
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
				value={selectedDate ? selectedDate : ''}
				tileClassName={({ date, view }: { date: Date; view: string }) => {
					if (view === 'month') {
						const hasEvent = events.some(event => event.date === date.toDateString())
						const hasTask = tasks.some(task => task.date === date.toDateString())

						return `${hasEvent ? 'hasEvent' : ''} ${hasTask && showTasks ? 'hasTask' : ''}`
					}
					return ''
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

import { AppointmentState } from '@/app/features/appointments/appointmentsSlice'
import { setSelectedDate } from '@/app/features/schedule/scheduleSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { useEffect, useState } from 'react'
import ReactCalendar from 'react-calendar'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { formatDate } from '../../utils/formatDate'
import { BoxContent } from '../BoxContent/BoxContent'

interface CalendarProps {
	appointments: AppointmentState[]
	showTasks?: boolean
	selectedDate?: string
}

export function Calendar({ appointments, selectedDate, showTasks = false }: CalendarProps) {
	const { tasks } = useAppSelector(state => state.tasks)
	const dispatch = useAppDispatch()
	const [minDate, setMinDate] = useState<Date | undefined>(undefined)
	const [maxDate, setMaxDate] = useState<Date | undefined>(undefined)

	useEffect(() => {
		setMinDate(new Date(Math.min(...appointments.map(appointments => new Date(appointments.date).getTime()))))
		setMaxDate(new Date(Math.max(...appointments.map(appointments => new Date(appointments.date).getTime()))))
	}, [appointments])

	return (
		<BoxContent className='!max-h-fit !min-h-fit px-2'>
			<ReactCalendar
				onChange={value => {
					if (value instanceof Date) {
						dispatch(setSelectedDate(value.toDateString()))
					}
				}}
				value={selectedDate ? selectedDate : ''}
				tileClassName={({ date, view }: { date: Date; view: string }) => {
					if (view === 'month') {
						const hasAppointment = appointments.some(appointments => formatDate(appointments.date) === formatDate(date))
						const hasTask = tasks.some(task => formatDate(task.date) === formatDate(date))

						return `${hasAppointment ? 'hasAppointment' : ''} ${hasTask && showTasks ? 'hasTask' : ''}`
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

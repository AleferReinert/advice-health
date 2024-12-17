import { mockAgenda } from '@/mock/agenda.mock'
import { Dispatch, SetStateAction } from 'react'
import Calendar, { CalendarProps } from 'react-calendar'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { BoxContent } from '../BoxContent/BoxContent'

interface CalendarCustomProps {
	selectedDate: Date
	setSelectedDate: Dispatch<SetStateAction<Date>>
	className?: string
}

export function CalendarCustom({ selectedDate, className, setSelectedDate }: CalendarCustomProps) {
	const handleDateChange: CalendarProps['onChange'] = value => {
		if (value instanceof Date) {
			setSelectedDate(value)
		}
	}

	// Estilizar dias do calendário que tem compromissos
	const tileClassName = ({ date, view }: any) => {
		if (view === 'month') {
			const hasAppointment = mockAgenda.some(item => item.date.toDateString() === date.toDateString())
			return hasAppointment ? 'hasAppointment' : ''
		}
		return ''
	}

	return (
		<BoxContent className={className}>
			<Calendar
				onChange={handleDateChange}
				value={selectedDate}
				tileClassName={tileClassName}
				locale='pt-BR'
				className='react-calendar'
				minDate={new Date(Math.min(...mockAgenda.map(item => item.date.getTime())))}
				maxDate={new Date(Math.max(...mockAgenda.map(item => item.date.getTime())))}
				formatMonthYear={(locale, date) =>
					date
						.toLocaleDateString('pt-BR', {
							month: 'long',
							year: 'numeric'
						})
						.replace(' de ', '/')
				}
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

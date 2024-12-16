'use client'
import { Agenda, AppointmentProps } from '@/components/Agenda/Agenda'
import { BoxContent } from '@/components/BoxContent/BoxContent'
import { ReminderProps, Reminders } from '@/components/Reminders/Reminders'
import { Stats } from '@/components/Stats/Stats'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useEffect, useState } from 'react'
import Calendar, { CalendarProps } from 'react-calendar'
import { mock } from './mock'

interface SummaryProps {
	appointments: number
	patientsAttended: number
	revenue: string
}

export interface AgendaProps {
	summary: SummaryProps
	appointments: AppointmentProps[]
	reminders: ReminderProps[]
}

export default function Home() {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date())
	const [agenda, setAgenda] = useState<AgendaProps | null>(null)
	const [loading, setLoading] = useState(true)

	const updateAgendaData = (date: Date) => {
		const formattedDate = format(date, 'yyyy-MM-dd', { locale: ptBR })
		const dayData = mock.agenda[formattedDate] || {
			summary: { appointments: 0, patientsAttended: 0, revenue: 'R$ 0,00' },
			appointments: [],
			reminders: []
		}
		setAgenda(dayData)
	}

	useEffect(() => {
		updateAgendaData(selectedDate)
		setLoading(false)
	}, [selectedDate])

	const handleDateChange: CalendarProps['onChange'] = value => {
		if (value instanceof Date) {
			setSelectedDate(value)
		}
	}

	const handleToggleReminder = (index: number) => {
		setAgenda(prevAgenda =>
			prevAgenda
				? {
						...prevAgenda,
						reminders: prevAgenda.reminders.map((reminder, i) =>
							i === index ? { ...reminder, isCompleted: !reminder.isCompleted } : reminder
						)
				  }
				: null
		)
	}

	return (
		<div className='grid gap-4'>
			<div className='grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4'>
				<div className='flex flex-col gap-4'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
						<Stats title='Agendamentos do dia' value={agenda?.summary.appointments || 0} loading={loading} />
						<Stats title='Pacientes atendidos' value={agenda?.summary.patientsAttended || 0} loading={loading} />
						<Stats title='Faturamento do dia' value={agenda?.summary.revenue || 'R$ 0,00'} loading={loading} />
					</div>
					<Agenda items={agenda?.appointments || []} loading={loading} />
					<Reminders reminders={agenda?.reminders || []} onToggleReminder={handleToggleReminder} loading={loading} />
				</div>
				<BoxContent>
					<Calendar onChange={handleDateChange} value={selectedDate} locale='pt-BR' className='react-calendar' />
				</BoxContent>
			</div>
		</div>
	)
}


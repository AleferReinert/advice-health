'use client'
import { Agenda, AppointmentProps } from '@/components/Agenda/Agenda'
import { BoxContent } from '@/components/BoxContent/BoxContent'
import { CalendarCustom } from '@/components/CalendarCustom/CalendarCustom'
import { Reminders } from '@/components/Reminders/Reminders'
import { Stats } from '@/components/Stats/Stats'
import { mockAgenda } from '@/mock/agenda.mock'
import { mockReminders } from '@/mock/reminders.mock'
import { useEffect, useState } from 'react'

export default function Home() {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date())
	const [agenda, setAgenda] = useState<AppointmentProps[]>([])
	const [loading, setLoading] = useState(true)
	const totalPatientsToday = agenda.length
	const patientsAttendedToday = mockAgenda.filter(
		item => item.date.toDateString() === selectedDate.toDateString() && item.attended === true
	).length

	const updateAgendaData = (date: Date) => {
		const agendaUpdated = mockAgenda.filter(item => item.date.toDateString() === date.toDateString())
		setAgenda(agendaUpdated)
	}

	useEffect(() => {
		updateAgendaData(selectedDate)
		setLoading(false)
	}, [selectedDate])

	const handleToggleReminder = (index: number) => {
		// setAgenda()
	}

	return (
		<div className='grid gap-4'>
			<div className='grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4'>
				<div className='flex flex-col gap-4'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
						<Stats title='Agendamentos do dia' value={totalPatientsToday} loading={loading} />
						<Stats title='Pacientes atendidos' value={patientsAttendedToday} loading={loading} />
						<Stats title='Faturamento do dia' value='R$ 1.274,00' loading={loading} />
					</div>
					<BoxContent title='Agenda'>
						<Agenda items={agenda} loading={loading} showDoctor />
					</BoxContent>
					<Reminders reminders={mockReminders} onToggleReminder={handleToggleReminder} loading={loading} />
				</div>
				<CalendarCustom selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
			</div>
		</div>
	)
}


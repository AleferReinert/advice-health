'use client'
import { Agenda, AppointmentProps } from '@/components/Agenda/Agenda'
import { BoxContent } from '@/components/BoxContent/BoxContent'
import { CalendarCustom } from '@/components/CalendarCustom/CalendarCustom'
import { ReminderProps, Reminders } from '@/components/Reminders/Reminders'
import { Stats } from '@/components/Stats/Stats'
import { mockAgenda } from '@/mock/agenda.mock'
import { mockReminders } from '@/mock/reminders.mock'
import { formatPrice } from '@/utils/formatPrice'
import { useEffect, useState } from 'react'

export default function Home() {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date())
	const [agenda, setAgenda] = useState<AppointmentProps[]>([])
	const [loading, setLoading] = useState(true)
	const [reminders, setReminders] = useState<ReminderProps[]>([])
	const [revenue, setRevenue] = useState<number>(0)
	const totalPatientsToday = agenda.length
	const patientsAttendedToday = mockAgenda.filter(
		item => item.date.toDateString() === selectedDate.toDateString() && item.attended === true
	).length

	useEffect(() => {
		const filteredAgenda = mockAgenda.filter(item => item.date.toDateString() === selectedDate.toDateString())
		const filteredReminders = mockReminders.filter(item => item.date.toDateString() === selectedDate.toDateString())
		setAgenda(filteredAgenda)
		setReminders(filteredReminders)

		// Soma o preço de todas consultas concluidas na data selecionada
		const totalRevenue = filteredAgenda.filter(item => item.attended).reduce((sum, item) => sum + (item.price || 0), 0)
		setRevenue(totalRevenue)
		setLoading(false)
	}, [selectedDate])

	return (
		<div className='grid gap-4'>
			<div className='grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4'>
				<div className='flex flex-col gap-4'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
						<Stats title='Agendamentos do dia' value={totalPatientsToday} loading={loading} />
						<Stats title='Pacientes atendidos' value={patientsAttendedToday} loading={loading} />
						<Stats title='Faturamento do dia' value={formatPrice(revenue)} loading={loading} />
					</div>
					<BoxContent title='Agenda'>
						<Agenda items={agenda} loading={loading} showDoctor />
					</BoxContent>
					<Reminders reminders={reminders} setReminders={setReminders} loading={loading} />
				</div>
				<CalendarCustom selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
			</div>
		</div>
	)
}


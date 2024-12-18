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
		<div className='flex flex-col gap-4'>
			<div className='grid gap-4 grid-cols-1 md:grid-cols-[3fr_2fr] xl:grid-cols-[1fr_2fr]'>
				<CalendarCustom className='min-h-full' selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

				<div className='grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-[1fr_1fr_auto]'>
					<Stats title='Agendamentos' value={totalPatientsToday} loading={loading} />
					<Stats title='Atendidos' value={patientsAttendedToday} loading={loading} />
					<Stats title='Faturamento' value={formatPrice(revenue)} loading={loading} />
				</div>
			</div>
			<BoxContent title='Agenda' withoutChildrenPadding loading={loading}>
				<Agenda items={agenda} showDoctor showActionButtons />
			</BoxContent>
			<Reminders reminders={reminders} loading={loading} />
		</div>
	)
}


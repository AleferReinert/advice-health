'use client'
import {
	selectAttendedPatientsOnSelectedDate,
	selectEventsBySelectedDate,
	selectTotalAmountReceivedOnSelectedDate
} from '@/app/features/schedule/scheduleSlice'
import { BoxContent } from '@/components/BoxContent/BoxContent'
import { Calendar } from '@/components/Calendar/Calendar'
import { Heading } from '@/components/Heading/Heading'
import { Schedule } from '@/components/Schedule/Schedule'
import { Section } from '@/components/Section/Section'
import { Tasks } from '@/components/Tasks/Tasks'
import { formatPrice } from '@/utils/formatPrice'
import { selectTasksBySelectedDate } from './features/tasks/tasksSlice'
import { useAppSelector } from './hooks'

export default function Home() {
	const eventsBySelectedDate = useAppSelector(selectEventsBySelectedDate)
	const tasksBySelectedDate = useAppSelector(selectTasksBySelectedDate)
	const attendedPatients = useAppSelector(selectAttendedPatientsOnSelectedDate)
	const totalAmountReceived = useAppSelector(selectTotalAmountReceivedOnSelectedDate)
	const { events, selectedDate } = useAppSelector(state => state.schedule)

	return (
		<div className='flex flex-col gap-4'>
			<div className='grid gap-4 grid-cols-1 md:grid-cols-[3fr_2fr] xl:grid-cols-[1fr_2fr]'>
				<Calendar events={events} selectedDate={selectedDate} showTasks />

				<div className='grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-[auto_auto]'>
					<BoxContent>
						<Heading theme='box' align='center'>
							Atendidos
						</Heading>
						<p className='statsValue'>{attendedPatients}</p>
					</BoxContent>

					<BoxContent>
						<Heading theme='box' align='center'>
							Faturamento
						</Heading>
						<p className='statsValue'>{formatPrice(totalAmountReceived)}</p>
					</BoxContent>
				</div>
			</div>

			<Section title={`Consultas (${eventsBySelectedDate.length})`}>
				<Schedule events={eventsBySelectedDate} showDoctor showActionButtons />
			</Section>

			<Section title={`Tarefas (${tasksBySelectedDate.length})`}>
				<Tasks />
			</Section>
		</div>
	)
}


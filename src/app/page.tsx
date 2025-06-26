'use client'
import {
	selectAttendedPatientsOnSelectedDate,
	selectTotalAmountReceivedOnSelectedDate,
	selectUnattendedPatientsOnSelectedDate
} from '@/app/features/schedule/scheduleSlice'
import { BoxContent } from '../components/BoxContent/BoxContent'
import { Heading } from '../components/Heading/Heading'
import { Schedule } from '../components/Schedule/Schedule'
import { Section } from '../components/Section/Section'
import { Tasks } from '../components/Tasks/Tasks'
import { formatPrice } from '../utils/formatPrice'
import { selectAppointmentsBySelectedDate } from './features/appointments/appointmentsSlice'
import { selectTasksBySelectedDate } from './features/tasks/tasksSlice'
import { useAppSelector } from './hooks'

export default function Home() {
	const appointmentsBySelectedDate = useAppSelector(selectAppointmentsBySelectedDate)
	const tasksBySelectedDate = useAppSelector(selectTasksBySelectedDate)
	const attendedPatients = useAppSelector(selectAttendedPatientsOnSelectedDate)
	const unattendedPatients = useAppSelector(selectUnattendedPatientsOnSelectedDate)
	const totalAmountReceived = useAppSelector(selectTotalAmountReceivedOnSelectedDate)

	return (
		<div className='flex flex-col gap-4'>
			<div className='grid sm:grid-cols-3 gap-4'>
				<BoxContent>
					<Heading theme='box' align='center'>
						Não atendidos
					</Heading>
					<p className={`statsValue ${unattendedPatients === 0 ? '' : '!text-yellow-600'}`}>{unattendedPatients}</p>
				</BoxContent>
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

			<Section title={`Consultas (${appointmentsBySelectedDate.length})`}>
				<Schedule appointments={appointmentsBySelectedDate} showDoctor showActionButtons />
			</Section>

			<Section title={`Tarefas (${tasksBySelectedDate.length})`}>
				<Tasks />
			</Section>
		</div>
	)
}


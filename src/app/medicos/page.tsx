'use client'
import { BoxContent } from '@/components/BoxContent/BoxContent'
import { Button } from '@/components/Button/Button'
import { Calendar } from '@/components/Calendar/Calendar'
import { CreateEventModal } from '@/components/CreateEventModal/CreateEventModal'
import { DoctorList } from '@/components/DoctorList/DoctorList'
import { Heading } from '@/components/Heading/Heading'
import { Modal } from '@/components/Modal/Modal'
import { Schedule } from '@/components/Schedule/Schedule'
import { Section } from '@/components/Section/Section'
import { mockMenu } from '@/mock/menu.mock'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { selectEventsByDoctorId, selectEventsByDoctorIdOnSelectedDate } from '../features/schedule/scheduleSlice'
import { useAppSelector } from '../hooks'

export default function DoctorsPage() {
	const { selectedDate, selectedDoctor } = useAppSelector(state => state.schedule)
	const { patients } = useAppSelector(state => state.patients)
	const { doctors } = useAppSelector(state => state.doctors)
	const [createAppointmentModal, setCreateAppointmentModal] = useState(false)
	const eventsByDoctorId = useAppSelector(selectEventsByDoctorId)
	const eventsByDoctorIdOnSelectedDate = useAppSelector(selectEventsByDoctorIdOnSelectedDate)

	useEffect(() => {
		document.title = `AdviceHealth - ${mockMenu[1].title}`
	}, [])

	return (
		<>
			<div className='flex flex-col gap-4'>
				<div className='grid gap-4 md:grid-cols-[min-content_1fr] xl:grid-cols-2'>
					<BoxContent>
						<Heading theme='box'>Médicos</Heading>
						<DoctorList doctors={doctors} />
					</BoxContent>

					<Calendar events={eventsByDoctorId} />
				</div>

				<div className='flex justify-end'>
					<Button onClick={() => setCreateAppointmentModal(true)} title='Nova consulta'>
						Nova consulta <AiOutlinePlus />
					</Button>
				</div>

				<Section title={`Consultas - ${selectedDoctor.name} (${format(selectedDate, 'dd/MM/yy', { locale: ptBR })})`}>
					<Schedule events={eventsByDoctorIdOnSelectedDate} showActionButtons showDoctor />
				</Section>
			</div>

			{patients.length > 0 && (
				<Modal title='Novo agendamento' showModal={createAppointmentModal} setShowModal={setCreateAppointmentModal}>
					<CreateEventModal />
				</Modal>
			)}
		</>
	)
}

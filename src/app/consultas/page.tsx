'use client'
import {
	selectAppointmentsByDoctorId,
	selectAppointmentsByDoctorIdOnSelectedDate
} from '@/app/features/appointments/appointmentsSlice'
import { useAppSelector } from '@/app/hooks'
import { BoxContent } from '@/components/BoxContent/BoxContent'
import { Button } from '@/components/Button/Button'
import { Calendar } from '@/components/Calendar/Calendar'
import { CreateAppointmentModal } from '@/components/CreateAppointmentModal/CreateAppointmentModal'
import { DoctorList } from '@/components/DoctorList/DoctorList'
import { Heading } from '@/components/Heading/Heading'
import { Modal } from '@/components/Modal/Modal'
import { Schedule } from '@/components/Schedule/Schedule'
import { Section } from '@/components/Section/Section'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

export default function AppointmentsPage() {
	const { selectedDate, selectedDoctor } = useAppSelector(state => state.schedule)
	const { patients } = useAppSelector(state => state.patients)
	const { doctors } = useAppSelector(state => state.doctors)
	const [createAppointmentModal, setCreateAppointmentModal] = useState(false)
	const appointmentsByDoctorId = useAppSelector(selectAppointmentsByDoctorId)
	const appointmentsByDoctorIdOnSelectedDate = useAppSelector(selectAppointmentsByDoctorIdOnSelectedDate)

	return (
		<>
			<div className='flex flex-col gap-4'>
				<div className='grid gap-4 md:grid-cols-[min-content_1fr] xl:grid-cols-2'>
					<BoxContent>
						<Heading theme='box'>Médicos</Heading>
						<DoctorList doctors={doctors} filteredDoctorsByName={[]} />
					</BoxContent>

					<Calendar appointments={appointmentsByDoctorId} />
				</div>

				<div className='flex justify-end'>
					<Button onClick={() => setCreateAppointmentModal(true)} title='Nova consulta'>
						Nova consulta <AiOutlinePlus />
					</Button>
				</div>

				<Section
					title={`Consultas - ${selectedDoctor.personalInfo.fullName} (${format(selectedDate, 'dd/MM/yy', {
						locale: ptBR
					})})`}
				>
					<Schedule appointments={appointmentsByDoctorIdOnSelectedDate} showActionButtons showDoctor />
				</Section>
			</div>

			{patients.length > 0 && (
				<Modal title='Nova consulta' showModal={createAppointmentModal} setShowModal={setCreateAppointmentModal}>
					<CreateAppointmentModal setShowModal={setCreateAppointmentModal} />
				</Modal>
			)}
		</>
	)
}

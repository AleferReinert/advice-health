'use client'
import { BoxContent } from '@/components/BoxContent/BoxContent'
import { Button } from '@/components/Button/Button'
import { Calendar } from '@/components/Calendar/Calendar'
import { CreateEventModal } from '@/components/CreateEventModal/CreateEventModal'
import { CreatePatientModal } from '@/components/CreatePatientModal/CreatePatientModal'
import { DoctorList } from '@/components/DoctorList/DoctorList'
import { Heading } from '@/components/Heading/Heading'
import { Modal } from '@/components/Modal/Modal'
import { Schedule } from '@/components/Schedule/Schedule'
import { Section } from '@/components/Section/Section'
import { mockMenu } from '@/mock/menu.mock'
import { selectDoctorById } from '@/redux/slices/doctorsSlice'
import { RootState } from '@/redux/store'
import { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { HiUserPlus } from 'react-icons/hi2'
import { useSelector } from 'react-redux'

export default function DoctorsPage() {
	const { selectedDateEvents, selectedDoctorId } = useSelector((state: RootState) => state.schedule)
	const { patients } = useSelector((state: RootState) => state.patients)
	const { doctors } = useSelector((state: RootState) => state.doctors)
	const [loading, setLoading] = useState(true)
	const [createAppointmentModal, setCreateAppointmentModal] = useState(false)
	const [createPatientModal, setCreatePatientModal] = useState(false)
	const currentDoctor = useSelector(selectDoctorById(selectedDoctorId))

	useEffect(() => {
		document.title = `AdviceHealth - ${mockMenu[1].title}`
		setLoading(false)
	}, [])

	return (
		<>
			<div className='flex flex-col gap-4'>
				<div className='grid gap-4 md:grid-cols-[min-content_1fr] xl:grid-cols-2'>
					<Calendar />

					<BoxContent>
						<Heading theme='box'>Médicos</Heading>
						<DoctorList doctors={doctors} />
					</BoxContent>
				</div>

				<div className='flex justify-between items-center'>
					{}
					<div className='flex gap-2'>
						<Button onClick={() => setCreatePatientModal(true)} title='Novo paciente'>
							<span className='hidden sm:inline'>Novo paciente</span> <HiUserPlus />
						</Button>
						<Button onClick={() => setCreateAppointmentModal(true)} title='Novo agendamento'>
							<span className='hidden sm:inline'>Novo agendamento</span> <AiOutlinePlus />
						</Button>
					</div>
				</div>

				<Section title={currentDoctor!.name}>
					<Schedule events={selectedDateEvents} showActionButtons />
				</Section>
			</div>

			<Modal title='Novo paciente' showModal={createPatientModal} setShowModal={setCreatePatientModal}>
				<CreatePatientModal setShowModal={setCreatePatientModal} />
			</Modal>

			{patients.length > 0 && (
				<Modal title='Novo agendamento' showModal={createAppointmentModal} setShowModal={setCreateAppointmentModal}>
					<CreateEventModal />
				</Modal>
			)}
		</>
	)
}

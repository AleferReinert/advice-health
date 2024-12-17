'use client'
import { Agenda } from '@/components/Agenda/Agenda'
import { BoxContent } from '@/components/BoxContent/BoxContent'
import { Button } from '@/components/Button/Button'
import { CalendarCustom } from '@/components/CalendarCustom/CalendarCustom'
import { DoctorList, DoctorProps } from '@/components/DoctorList/DoctorList'
import { Modal } from '@/components/Modal/Modal'
import { NewAppointment } from '@/components/NewAppointment/NewAppointment'
import { mockAgenda } from '@/mock/agenda.mock'
import { mockDoctors } from '@/mock/doctors.mock'
import { mockMenu } from '@/mock/menu.mock'
import { getDoctorById } from '@/utils/getDoctorById'
import { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

export default function DoctorsPage() {
	const [loading, setLoading] = useState(true)
	const [doctorList, setDoctorList] = useState<DoctorProps[]>([])
	const [selectedDate, setSelectedDate] = useState<Date>(new Date())
	const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null)
	const [doctorSchedule, setDoctorSchedule] = useState<any[]>([])
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		document.title = `${mockMenu[1].title} - AdviceHealth`
		setDoctorList(mockDoctors)
		setSelectedDoctor(mockDoctors[0].id)
		setDoctorSchedule(
			mockAgenda.filter(
				item => item.doctorId === mockDoctors[0].id && item.date.toDateString() === selectedDate.toDateString()
			)
		)
		setLoading(false)
	}, [])

	const handleDoctorSelect = (id: string) => {
		setSelectedDoctor(id)
		setDoctorSchedule(
			mockAgenda.filter(item => item.doctorId === id && item.date.toDateString() === selectedDate.toDateString())
		)
	}

	return (
		<>
			<div className='flex flex-col gap-4'>
				<div className='grid gap-4 md:grid-cols-[min-content_1fr] xl:grid-cols-2'>
					<CalendarCustom selectedDate={selectedDate} setSelectedDate={setSelectedDate} className='min-h-full' />

					<BoxContent title='Médicos' loading={loading} withoutChildrenPadding>
						<DoctorList doctorList={doctorList} onSelectDoctor={handleDoctorSelect} selectedDoctor={selectedDoctor} />
					</BoxContent>
				</div>
				<div className='flex justify-between items-center'>
					{selectedDoctor && <h2 className='font-medium text-2xl'>{getDoctorById(selectedDoctor)?.name}</h2>}
					<Button onClick={() => setShowModal(true)} title='Novo agendamento'>
						<span className='hidden sm:inline'>Novo Agendamento</span> <AiOutlinePlus />
					</Button>
				</div>
				<BoxContent loading={loading} withoutChildrenPadding>
					<Agenda items={doctorSchedule} showActionButtons />
				</BoxContent>
			</div>
			<Modal title='Novo Agendamento' showModal={showModal} setShowModal={setShowModal}>
				<NewAppointment />
			</Modal>
		</>
	)
}

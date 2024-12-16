'use client'
import { Agenda } from '@/components/Agenda/Agenda'
import { BoxContent } from '@/components/BoxContent/BoxContent'
import { DoctorList, DoctorProps } from '@/components/DoctorList/DoctorList'
import { mockAgenda } from '@/mock/agenda.mock'
import { mockDoctors } from '@/mock/doctors.mock'
import { mockMenu } from '@/mock/menu.mock'
import { getDoctorById } from '@/utils/getDoctorById'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { useEffect, useState } from 'react'
import Calendar, { CalendarProps } from 'react-calendar'

export default function DoctorsPage() {
	const [loading, setLoading] = useState(true)
	const [doctorList, setDoctorList] = useState<DoctorProps[]>([])
	const [selectedDate, setSelectedDate] = useState<Date>(new Date())
	const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null)
	const [doctorSchedule, setDoctorSchedule] = useState<any[]>([])
	const formattedDate = format(selectedDate, 'yyyy-MM-dd', { locale: ptBR })

	useEffect(() => {
		document.title = `${mockMenu[1].title} - AdviceHealth`
		setDoctorList(mockDoctors)
		setSelectedDoctor(mockDoctors[0].id)
		const doctorData = mockAgenda[formattedDate]
		const firstDoctorSchedule = doctorData ? doctorData.appointments.filter(appointment => appointment.doctorId === mockDoctors[0].id) : []
		setDoctorSchedule(firstDoctorSchedule)
		setLoading(false)
	}, [formattedDate])

	const handleDateChange: CalendarProps['onChange'] = value => {
		if (value instanceof Date) {
			setSelectedDate(value)
		}
	}

	const handleDoctorSelect = (id: string) => {
		setSelectedDoctor(id)
		const doctorData = mockAgenda[formattedDate]
		const selectedDoctorSchedule = doctorData ? doctorData.appointments.filter(appointment => appointment.doctorId === id) : []
		setDoctorSchedule(selectedDoctorSchedule)
	}

	return (
		<div className='grid gap-4'>
			<section className='grid grid-cols-1 md:grid-cols-[min-content_1fr_min-content] gap-4'>
				<div className='min-w-80'>
					<BoxContent title='Médicos'>
						<DoctorList doctorList={doctorList} onSelectDoctor={handleDoctorSelect} loading={loading} selectedDoctor={selectedDoctor} />
					</BoxContent>
				</div>
				<div>
					{selectedDoctor && (
						<BoxContent title={getDoctorById(selectedDoctor)?.name}>
							<Agenda items={doctorSchedule} loading={loading} showActionButtons />
						</BoxContent>
					)}
				</div>
				<BoxContent>
					<Calendar onChange={handleDateChange} value={selectedDate} locale='pt-BR' className='react-calendar' />
				</BoxContent>
			</section>
		</div>
	)
}

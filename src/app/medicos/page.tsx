'use client'
import { BoxContent } from '@/components/BoxContent/BoxContent'
import { DoctorList, DoctorProps } from '@/components/DoctorList/DoctorList'
import { DoctorSchedule } from '@/components/DoctorSchedule/DoctorSchedule'
import { useEffect, useState } from 'react'
import Calendar, { CalendarProps } from 'react-calendar'
import { mock, mockDoctors } from '../mock'

export default function DoctorsPage() {
	const [loading, setLoading] = useState(true)
	const [doctorList, setDoctorList] = useState<DoctorProps[]>([])
	const [selectedDate, setSelectedDate] = useState<Date>(new Date())
	const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null)
	const [doctorSchedule, setDoctorSchedule] = useState<any[]>([])

	useEffect(() => {
		document.title = `${mock.menu[1].title} - AdviceHealth`
		setDoctorList(mockDoctors)
		setLoading(false)
	}, [])

	const handleDateChange: CalendarProps['onChange'] = value => {
		if (value instanceof Date) {
			setSelectedDate(value)
		}
	}

	const handleDoctorSelect = (crm: string) => {
		setSelectedDoctor(crm)
		// Filtra os agendamentos do médico selecionado
		const doctorData = mock.agenda[`${selectedDate.toISOString().split('T')[0]}`]
		setDoctorSchedule(doctorData ? doctorData.appointments : [])
	}

	return (
		<div className='grid gap-4'>
			<section className='grid grid-cols-1 md:grid-cols-[1fr_1fr_min-content] gap-4'>
				<div className='flex flex-col gap-4'>
					<BoxContent title='Médicos'>
						<DoctorList doctorList={doctorList} onSelectDoctor={handleDoctorSelect} loading={loading} selectedDoctor={selectedDoctor} />
					</BoxContent>
				</div>
				<div className='flex flex-col gap-4'>
					<h2>{selectedDate.toLocaleDateString()}</h2>
					<DoctorSchedule schedule={doctorSchedule} date={selectedDate} doctorId={selectedDoctor} />
				</div>
				<BoxContent>
					<Calendar onChange={handleDateChange} value={selectedDate} locale='pt-BR' className='react-calendar' />
				</BoxContent>
			</section>
		</div>
	)
}

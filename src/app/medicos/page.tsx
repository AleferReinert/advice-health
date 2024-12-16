'use client'
import { Agenda } from '@/components/Agenda/Agenda'
import { BoxContent } from '@/components/BoxContent/BoxContent'
import { CalendarCustom } from '@/components/CalendarCustom/CalendarCustom'
import { DoctorList, DoctorProps } from '@/components/DoctorList/DoctorList'
import { mockAgenda } from '@/mock/agenda.mock'
import { mockDoctors } from '@/mock/doctors.mock'
import { mockMenu } from '@/mock/menu.mock'
import { getDoctorById } from '@/utils/getDoctorById'
import { useEffect, useState } from 'react'
import { CalendarProps } from 'react-calendar'

export default function DoctorsPage() {
	const [loading, setLoading] = useState(true)
	const [doctorList, setDoctorList] = useState<DoctorProps[]>([])
	const [selectedDate, setSelectedDate] = useState<Date>(new Date())
	const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null)
	const [doctorSchedule, setDoctorSchedule] = useState<any[]>([])

	useEffect(() => {
		document.title = `${mockMenu[1].title} - AdviceHealth`
		setDoctorList(mockDoctors)
		setSelectedDoctor(mockDoctors[0].id)
		setDoctorSchedule(
			mockAgenda.filter(item => item.doctorId === mockDoctors[0].id && item.date.toDateString() === selectedDate.toDateString())
		)
		setLoading(false)
	}, [])

	const handleDateChange: CalendarProps['onChange'] = value => {
		if (value instanceof Date) {
			setSelectedDate(value)
		}
	}

	const handleDoctorSelect = (id: string) => {
		setSelectedDoctor(id)
		setDoctorSchedule(mockAgenda.filter(item => item.doctorId === id && item.date.toDateString() === selectedDate.toDateString()))
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
				<CalendarCustom selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
			</section>
		</div>
	)
}

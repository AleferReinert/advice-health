'use client'
import { Schedule } from '@/components/Schedule/Schedule'
import { Section } from '@/components/Section/Section'
import { RootState } from '@/redux/store'
import { getPatientById } from '@/utils/getPatientById'
import { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSelector } from 'react-redux'

export default function Patients() {
	const { events } = useSelector((state: RootState) => state.schedule)
	const [loading, setLoading] = useState(true)
	const [selectedDate, setSelectedDate] = useState<Date>()
	const [searchQuery, setSearchQuery] = useState<string>('')

	const agendaForSelectedDate = selectedDate ? events.filter(item => item.date === selectedDate.toDateString()) : events

	const filteredAgenda = agendaForSelectedDate.filter(item => {
		const patient = getPatientById(item.patientId)
		return patient?.fullName.toLowerCase().includes(searchQuery.toLowerCase())
	})

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000)
		document.title = `AdviceHealth - Pacientes`
	}, [])

	return (
		<>
			<div className='mb-4 max-w-80 border bg-gray-200 py-1 px-4 group'>
				<div className='flex w-full items-center justify-between gap-4'>
					<input
						type='text'
						placeholder='Pesquisar paciente...'
						className='placeholder:text-inherit bg-transparent w-full py-2 text-gray-500 focus:text-text'
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
					/>
					<button className='transition text-gray-500 group-focus-within:text-text hover:text-primary'>
						<AiOutlineSearch size={28} />
					</button>
				</div>
			</div>

			<Section title='Pacientes'>
				<Schedule events={filteredAgenda} showData />
			</Section>
		</>
	)
}

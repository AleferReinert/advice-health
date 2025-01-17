'use client'
import { Agenda } from '@/components/Agenda/Agenda'
import { BoxContent } from '@/components/BoxContent/BoxContent'
import { mockAgenda } from '@/mock/agenda.mock'
import { getPatientById } from '@/utils/getPatientById'
import { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Patients() {
	const [loading, setLoading] = useState(true)
	const [selectedDate, setSelectedDate] = useState<Date>()
	const [searchQuery, setSearchQuery] = useState<string>('')

	const agendaForSelectedDate = selectedDate
		? mockAgenda.filter(item => item.date.toDateString() === selectedDate.toDateString())
		: mockAgenda

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
			<div className='mb-4 max-w-80 border bg-gray-200 py-1 px-4'>
				<div className='flex w-full items-center justify-between gap-4'>
					<input
						type='text'
						placeholder='Pesquisar paciente...'
						className='placeholder:text-inherit bg-transparent w-full py-2 focus:text-gray-900'
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
					/>
					<button className='transition hover:text-primary'>
						<AiOutlineSearch size={28} />
					</button>
				</div>
			</div>
			<BoxContent loading={loading} withoutChildrenPadding>
				<Agenda items={filteredAgenda} showData />
			</BoxContent>
		</>
	)
}

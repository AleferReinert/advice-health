'use client'
import { ActionButtons } from '@/components/ActionButtons/ActionButtons'
import { BoxContent } from '@/components/BoxContent/BoxContent'
import { Loading } from '@/components/Loading/Loading'
import { Subtitle } from '@/components/Subtitle/Subtitle'
import { mockAgenda } from '@/mock/agenda.mock'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { useEffect, useState } from 'react'

export interface PatientProps {
	id: string
	fullName: string
	dateOfBirth: string
	cpf: string
	phone: string
	email: string
	gender: 'male' | 'female' | 'other'
	address: {
		postalCode: string
		street: string
		number: string
		complement?: string
		district: string
		city: string
		state: string
	}
	emergencyContact?: {
		name: string
		phone: string
		relation: string
	}
	registrationDate: string
}

export default function Patients() {
	const [loading, setLoading] = useState(true)
	const [selectedDate, setSelectedDate] = useState<Date>(new Date())
	const formattedDate = format(selectedDate, 'yyyy-MM-dd', { locale: ptBR })
	const agendaForSelectedDate = mockAgenda.filter(item => item.date.toDateString() === selectedDate.toDateString())

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000)
		document.title = `Pacientes - AdviceHealth`
	}, [formattedDate])

	return (
		<>
			<BoxContent>
				<Subtitle>{`Pacientes - ${formattedDate}`}</Subtitle>
				{loading ? (
					<Loading type='component' className='h-8' />
				) : (
					<>
						{agendaForSelectedDate.length > 0 ? (
							<table>
								<thead>
									<tr>
										<th>Data</th>
										<th>Horário</th>
										<th>Médico</th>
										<th>Paciente</th>
										<th>Ações</th>
									</tr>
								</thead>
								<tbody>
									{agendaForSelectedDate.map((item, index) => (
										<tr key={index}>
											<td>23/12/2024</td>
											<td>12:00</td>
											<td>Dr José Paulo</td>
											<td>Alefer Reinert</td>
											<td className='w-0'>
												<ActionButtons />
											</td>
										</tr>
									))}
								</tbody>
							</table>
						) : (
							<p>Nenhum compromisso para este dia.</p>
						)}
					</>
				)}
			</BoxContent>
		</>
	)
}

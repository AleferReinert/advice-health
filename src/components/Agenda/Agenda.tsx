import { mockDoctors, mockPatients } from '@/app/mock'
import { BoxContent } from '../BoxContent/BoxContent'
import { DoctorProps } from '../DoctorList/DoctorList'
import { Loading } from '../Loading/Loading'

export interface PatientProps {
	id: string
	name: string
}

export interface AppointmentProps {
	time: string
	patientId: string
	doctorId: string
}

interface AgendaProps {
	items: AppointmentProps[]
	loading: boolean
}

export function Agenda({ items, loading }: AgendaProps) {
	function getDoctorById(crm: string): DoctorProps | undefined {
		return mockDoctors.find(doctor => doctor.crm === crm)
	}
	function getPatientById(id: string): PatientProps | undefined {
		return mockPatients.find(patient => patient.id === id)
	}

	return (
		<BoxContent title='Agenda'>
			{loading ? (
				<Loading type='component' className='h-8' />
			) : (
				<>
					{items.length > 0 ? (
						<table>
							<thead>
								<tr>
									<th>Horário</th>
									<th>Médico</th>
									<th>Paciente</th>
								</tr>
							</thead>
							<tbody>
								{items.map((item, index) => (
									<tr key={index}>
										<td>{item.time}</td>
										<td>{getDoctorById(item.doctorId)?.name}</td>
										<td>{getPatientById(item.patientId)?.name}</td>
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
	)
}

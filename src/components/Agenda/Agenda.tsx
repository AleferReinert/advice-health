import { getDoctorById } from '@/utils/getDoctorById'
import { getPatientById } from '@/utils/getPatientById'
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai'
import { Loading } from '../Loading/Loading'

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

export interface AppointmentProps {
	time: string
	patientId: string
	doctorId: string
}

interface AgendaProps {
	items: AppointmentProps[]
	showDoctor?: boolean
	showActionButtons?: boolean
	loading: boolean
}

export function Agenda({ items, loading, showDoctor = false, showActionButtons = false }: AgendaProps) {
	const showDoctorStyles = showDoctor ? '' : 'hidden'
	const showActionButtonsStyles = showActionButtons ? '' : 'hidden'

	return loading ? (
		<Loading type='component' className='h-8' />
	) : (
		<>
			{items.length > 0 ? (
				<table>
					<thead>
						<tr>
							<th>Horário</th>
							<th className={showDoctorStyles}>Médico</th>
							<th>Paciente</th>
							<th className={showActionButtonsStyles}>Ações</th>
						</tr>
					</thead>
					<tbody>
						{items.map((item, index) => (
							<tr key={index}>
								<td>{item.time}</td>
								<td className={showDoctorStyles}>{getDoctorById(item.doctorId)?.name}</td>
								<td>{getPatientById(item.patientId)?.fullName}</td>
								<td className={`${showActionButtonsStyles} w-0`}>
									<div className='flex gap-4'>
										<button title='Editar'>
											<AiOutlineEdit size={20} className='transition hover:text-primary' />
										</button>
										<button title='Excluir'>
											<AiOutlineClose size={20} className='transition hover:text-red-600' />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>Nenhum compromisso para este dia.</p>
			)}
		</>
	)
}

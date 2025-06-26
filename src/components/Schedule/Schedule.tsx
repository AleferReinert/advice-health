import { AppointmentState, editAppointment, removeAppointment } from '@/app/features/appointments/appointmentsSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { formatPrice } from '../../utils/formatPrice'
import { ActionButtons } from '../ActionButtons/ActionButtons'

export interface PaymentProps {
	appointmentId: string
	status: 'paid' | 'unpaid' | 'pending'
	paymentMethod: 'creditCard' | 'debitCard' | 'pix' | 'bankTransfer' | 'cash' | 'other'
	paymentDate: Date
	installments?: {
		numberOfInstallments: number
		installmentValue: number
		dueDates: Date[]
	}
	discount?: {
		type: 'percentage' | 'amount'
		value: number
	}
	cardBrand?: 'visa' | 'mastercard' | 'amex' | 'diners' | 'elo' | 'hiper'
}

interface ScheduleProps {
	showDoctor?: boolean
	showData?: boolean
	showActionButtons?: boolean
	appointments: AppointmentState[]
}

export function Schedule({ appointments, showDoctor = false, showData, showActionButtons }: ScheduleProps) {
	const { patients } = useAppSelector(state => state.patients)
	const { doctors } = useAppSelector(state => state.doctors)
	const dispatch = useAppDispatch()
	const doctorStyles = showDoctor ? '' : 'hidden'
	const dataStyles = showData ? '' : 'hidden'
	const actionButtonsStyles = showActionButtons ? '' : 'hidden'

	return appointments.length > 0 ? (
		<div className='overflow-x-auto'>
			<table>
				<thead>
					<tr>
						<th className={`${dataStyles} w-0`}>Data</th>
						<th className='w-0'>Horário</th>
						<th className={doctorStyles}>Médico</th>
						<th>Paciente</th>
						<th>Valor</th>
						<th>Atendido</th>
						<th className={actionButtonsStyles}>Ações</th>
					</tr>
				</thead>
				<tbody>
					{appointments.map((appointments, index) => {
						return (
							<tr key={index}>
								<td className={dataStyles}>{appointments.date}</td>
								<td>{appointments.time}</td>
								<td className={doctorStyles + ' font-normal'}>
									{doctors.find(doctor => doctor.id === appointments.doctorId)?.personalInfo.fullName}
								</td>
								<td className='font-normal'>
									{patients.find(patient => patient.id === appointments.patientId)?.fullName}
								</td>
								<td>{formatPrice(appointments.price)}</td>
								<td className='w-0 [&_svg]:mx-auto [&_svg]:size-5'>
									{appointments.attended ? (
										<AiOutlineCheckCircle className='text-primary' title='Atendido' />
									) : (
										<AiOutlineCloseCircle className='text-red-600' title='Não atendido' />
									)}
								</td>
								<td className={`${actionButtonsStyles} w-0`}>
									<ActionButtons
										onEdit={() => dispatch(editAppointment(appointments.id))}
										onDelete={() => dispatch(removeAppointment(appointments.id))}
									/>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	) : (
		<p className='py-4'>Nenhuma consulta para este dia.</p>
	)
}

import { editEvent, EventState, removeEvent } from '@/app/features/schedule/scheduleSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { formatPrice } from '@/utils/formatPrice'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
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
	events: EventState[]
}

export function Schedule({ events, showDoctor = false, showData, showActionButtons }: ScheduleProps) {
	const { patients } = useAppSelector(state => state.patients)
	const { doctors } = useAppSelector(state => state.doctors)
	const dispatch = useAppDispatch()
	const doctorStyles = showDoctor ? '' : 'hidden'
	const dataStyles = showData ? '' : 'hidden'
	const actionButtonsStyles = showActionButtons ? '' : 'hidden'

	return events.length > 0 ? (
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
					{events.map((event, index) => {
						const date = format(event.date, 'dd/MM/yy', { locale: ptBR })
						const hour = format(event.date, 'HH:mm', { locale: ptBR }) + 'h'
						const doctorName = doctors.find(doctor => doctor.id === event.doctorId)?.name
						const patientName = patients.find(patient => patient.id === event.patientId)?.fullName
						const price = formatPrice(event.price)
						const statusIcon = event.attended ? (
							<AiOutlineCheckCircle className='text-primary' title='Atendido' />
						) : (
							<AiOutlineCloseCircle className='text-red-600' title='Não atendido' />
						)

						return (
							<tr key={index}>
								<td className={dataStyles}>{date}</td>
								<td>{hour}</td>
								<td className={doctorStyles + ' font-normal'}>{doctorName}</td>
								<td className='font-normal'>{patientName}</td>
								<td>{price}</td>
								<td className='w-0 [&_svg]:mx-auto [&_svg]:size-5'>{statusIcon}</td>
								<td className={`${actionButtonsStyles} w-0`}>
									<ActionButtons
										onEdit={() => dispatch(editEvent(event.id))}
										onDelete={() => dispatch(removeEvent(event.id))}
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

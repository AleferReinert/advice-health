import { selectDoctorById } from '@/redux/slices/doctorsSlice'
import { editEvent, removeEvent, ScheduleState } from '@/redux/slices/scheduleSlice'
import { RootState } from '@/redux/store'
import { formatPrice } from '@/utils/formatPrice'
import { getPatientById } from '@/utils/getPatientById'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
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

interface ScheduleProps extends Pick<ScheduleState, 'events'> {
	showDoctor?: boolean
	showData?: boolean
	showActionButtons?: boolean
}

export function Schedule({ events, showDoctor = false, showData, showActionButtons }: ScheduleProps) {
	const showDoctorStyles = showDoctor ? '' : 'hidden'
	const showDataStyles = showData ? '' : 'hidden'
	const showActionButtonsStyles = showActionButtons ? '' : 'hidden'
	const dispatch = useDispatch()
	const { selectedDoctorId } = useSelector((state: RootState) => state.schedule)
	const currentDoctor = useSelector(selectDoctorById(selectedDoctorId))

	return events.length > 0 ? (
		<div className='overflow-x-auto'>
			<table>
				<thead>
					<tr>
						<th className={`${showDataStyles} w-0`}>Data</th>
						<th className='w-0'>Horário</th>
						<th className={showDoctorStyles}>Médico</th>
						<th>Paciente</th>
						<th>Preço</th>
						<th>Atendido</th>
						<th className={showActionButtonsStyles}>Ações</th>
					</tr>
				</thead>
				<tbody>
					{events.map((item, index) => {
						const date = format(item.date, 'dd/MM/yy', { locale: ptBR })
						const hour = format(item.date, 'HH:mm', { locale: ptBR }) + 'h'
						const doctorName = currentDoctor!.name
						const patientName = getPatientById(item.patientId)?.fullName
						const price = formatPrice(item.price)
						const statusIcon = item.attended ? (
							<AiOutlineCheckCircle className='text-primary' title='Atendido' />
						) : (
							<AiOutlineCloseCircle className='text-red-600' title='Não atendido' />
						)

						return (
							<tr key={index}>
								<td className={showDataStyles}>{date}</td>
								<td>{hour}</td>
								<td className={showDoctorStyles + ' font-normal'}>{doctorName}</td>
								<td className='font-normal'>{patientName}</td>
								<td>{price}</td>
								<td className='w-0 [&_svg]:mx-auto [&_svg]:size-5'>{statusIcon}</td>
								<td className={`${showActionButtonsStyles} w-0`}>
									<ActionButtons
										onEdit={() => dispatch(editEvent(item.id))}
										onDelete={() => dispatch(removeEvent(item.id))}
									/>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	) : (
		<p className='py-4'>Nenhum evento para este dia.</p>
	)
}

import { formatPrice } from '@/utils/formatPrice'
import { getDoctorById } from '@/utils/getDoctorById'
import { getPatientById } from '@/utils/getPatientById'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { ActionButtons } from '../ActionButtons/ActionButtons'
import { Loading } from '../Loading/Loading'

export interface AppointmentProps {
	id: string
	date: Date
	patientId: string
	doctorId: string
	attended: boolean
	price: number
}

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

interface AgendaProps {
	items: AppointmentProps[]
	showDoctor?: boolean
	showData?: boolean
	showActionButtons?: boolean
	loading: boolean
}

export function Agenda({ items, loading, showDoctor = false, showData, showActionButtons }: AgendaProps) {
	const showDoctorStyles = showDoctor ? '' : 'hidden'
	const showDataStyles = showData ? '' : 'hidden'
	const showActionButtonsStyles = showActionButtons ? '' : 'hidden'

	return loading ? (
		<Loading type='component' className='h-8' />
	) : (
		<>
			{items.length > 0 ? (
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
						{items.map((item, index) => (
							<tr key={index}>
								<td className={showDataStyles}>{format(item.date, 'dd/MM/yyyy', { locale: ptBR })}</td>
								<td>{format(item.date, 'HH:mm', { locale: ptBR })}h</td>
								<td className={showDoctorStyles}>{getDoctorById(item.doctorId)?.name}</td>
								<td>{getPatientById(item.patientId)?.fullName}</td>
								<td>{formatPrice(item.price)}</td>
								<td className='w-0'>
									<div className='flex justify-center'>
										{item.attended ? <AiOutlineCheck className='text-primary' /> : <AiOutlineClose />}
									</div>
								</td>
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
	)
}

import { formatPrice } from '@/utils/formatPrice'
import { getDoctorById } from '@/utils/getDoctorById'
import { getPatientById } from '@/utils/getPatientById'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { ActionButtons } from '../ActionButtons/ActionButtons'

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
}

export function Agenda({ items, showDoctor = false, showData, showActionButtons }: AgendaProps) {
	const showDoctorStyles = showDoctor ? '' : 'hidden'
	const showDataStyles = showData ? '' : 'hidden'
	const showActionButtonsStyles = showActionButtons ? '' : 'hidden'

	return items.length > 0 ? (
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
				{items.map((item, index) => {
					const date = format(item.date, 'dd/MM/yy', { locale: ptBR })
					const hour = format(item.date, 'HH:mm', { locale: ptBR }) + 'h'
					const doctorName = getDoctorById(item.doctorId)?.name
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
							<td className={showDoctorStyles}>{doctorName}</td>
							<td>{patientName}</td>
							<td>{price}</td>
							<td className='w-0 [&_svg]:mx-auto'>{statusIcon}</td>
							<td className={`${showActionButtonsStyles} w-0`}>
								<ActionButtons />
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	) : (
		<p className='p-4'>Nenhum compromisso para este dia.</p>
	)
}

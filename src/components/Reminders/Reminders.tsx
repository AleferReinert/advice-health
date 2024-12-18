import { AiOutlineCheckCircle, AiOutlineClockCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { ActionButtons } from '../ActionButtons/ActionButtons'
import { BoxContent } from '../BoxContent/BoxContent'
import { Loading } from '../Loading/Loading'

export interface ReminderProps {
	date: Date
	status: 'Concluído' | 'Pendente' | 'Atrasado'
	isCompleted: boolean
	text: string
	priority: 'Alta' | 'Média' | 'Baixa'
}

interface RemindersProps {
	reminders: ReminderProps[]
	loading: boolean
}

export function Reminders({ reminders, loading }: RemindersProps) {
	return (
		<BoxContent title='Lembretes' withoutChildrenPadding>
			{loading ? (
				<Loading type='component' className='h-8' />
			) : (
				<>
					{reminders?.length > 0 ? (
						<table>
							<thead>
								<tr>
									<th>Lembrete</th>
									<th className='hidden lg:table-cell'>Prioridade</th>
									<th className='text-center'>Status</th>
									<th className='w-0'>Ações</th>
								</tr>
							</thead>
							<tbody>
								{reminders.map((reminder, index) => {
									const statusStyles = reminder.isCompleted
										? 'text-primary'
										: reminder.status === 'Atrasado'
										? 'text-red-600'
										: 'text-yellow-600'
									const statusIcon = reminder.isCompleted ? (
										<AiOutlineCheckCircle size={20} title='Concluído' />
									) : reminder.status === 'Atrasado' ? (
										<AiOutlineCloseCircle size={20} title='Atrasado' />
									) : (
										<AiOutlineClockCircle size={20} title='Pendente' />
									)
									const statusText = reminder.isCompleted ? 'Concluído' : reminder.status

									return (
										<tr key={index}>
											<td className='whitespace-normal'>{reminder.text}</td>
											<td className='hidden lg:table-cell'>{reminder.priority}</td>
											<td className={`w-0 text-center ${statusStyles} `}>
												<span className='inline-block w-min'>{statusIcon}</span>
												<span className='hidden'>{statusText}</span>
											</td>
											<td className='text-center'>
												<ActionButtons />
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					) : (
						<p className='text-gray-500 p-4'>Nenhum lembrete para este dia.</p>
					)}
				</>
			)}
		</BoxContent>
	)
}

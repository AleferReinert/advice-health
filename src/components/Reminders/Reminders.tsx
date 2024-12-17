import { Dispatch, SetStateAction } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
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
	setReminders: Dispatch<SetStateAction<ReminderProps[]>>
	loading: boolean
}

export function Reminders({ reminders, setReminders, loading }: RemindersProps) {
	const toggleIsCompleted = (index: number) => {
		setReminders(prevReminders =>
			prevReminders.map((reminder, i) => (i === index ? { ...reminder, isCompleted: !reminder.isCompleted } : reminder))
		)
	}

	const deleteReminder = (index: number) => {
		setReminders(prevReminders => prevReminders.filter((_, i) => i !== index))
	}

	return (
		<section>
			<BoxContent title='Lembretes'>
				{loading ? (
					<Loading type='component' className='h-8' />
				) : (
					<>
						{reminders?.length > 0 ? (
							<table>
								<thead>
									<tr>
										<th className='w-0'></th>
										<th>Lembrete</th>
										<th>Prioridade</th>
										<th className='w-36'>Status</th>
										<th className='w-0'>Excluir</th>
									</tr>
								</thead>
								<tbody>
									{reminders.map((reminder, index) => (
										<tr key={index}>
											<td>
												<input
													type='checkbox'
													checked={reminder.isCompleted}
													className='h-5 w-5 text-teal-500'
													onChange={() => toggleIsCompleted(index)}
												/>
											</td>
											<td>{reminder.text}</td>
											<td>{reminder.priority}</td>
											<td
												className={
													reminder.isCompleted
														? 'text-primary'
														: reminder.status === 'Atrasado'
														? 'text-red-600'
														: 'text-yellow-600'
												}
											>
												{reminder.isCompleted ? 'Concluído' : reminder.status}
											</td>
											<td className='text-center'>
												<button
													className='transition hover:text-red-600'
													title='Excluir lembrete'
													onClick={() => deleteReminder(index)}
												>
													<AiOutlineClose size={20} />
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						) : (
							<p className='text-gray-500'>Nenhum lembrete para este dia.</p>
						)}
					</>
				)}
			</BoxContent>
		</section>
	)
}

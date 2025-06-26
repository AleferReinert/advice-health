import { editTask, removeTask, selectTasksBySelectedDate } from '@/app/features/tasks/tasksSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { AiOutlineCheckCircle, AiOutlineClockCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { formatDate } from '../../utils/formatDate'
import { ActionButtons } from '../ActionButtons/ActionButtons'

export function Tasks() {
	const tasksBySelectedDate = useAppSelector(selectTasksBySelectedDate)
	const dispatch = useAppDispatch()

	return tasksBySelectedDate.length > 0 ? (
		<div className='overflow-x-auto'>
			<table>
				<thead>
					<tr>
						<th>Tarefa</th>
						<th className='hidden lg:table-cell'>Prioridade</th>
						<th className='text-center'>Status</th>
						<th className='w-0'>Ações</th>
					</tr>
				</thead>
				<tbody>
					{tasksBySelectedDate.map((task, index) => {
						function status() {
							if (task.isCompleted) {
								return {
									title: 'Concluída',
									style: 'text-primary',
									icon: <AiOutlineCheckCircle size={20} title={'Concluída'} />
								}
							} else if (task.date === formatDate(new Date())) {
								return {
									title: 'Pendente',
									style: 'text-yellow-600',
									icon: <AiOutlineClockCircle size={20} title='Pendente' />
								}
							}
							return {
								title: 'Atrasada',
								style: 'text-red-600',
								icon: <AiOutlineCloseCircle size={20} title='Atrasada' />
							}
						}

						return (
							<tr key={index}>
								<td className='whitespace-normal'>{task.text}</td>
								<td className='hidden lg:table-cell'>{task.priority}</td>
								<td className={`w-0 text-center ${status().style} `}>
									<span className='inline-block w-min'>{status().icon}</span>
									<span className='hidden'>{status().title}</span>
								</td>
								<td className='text-center'>
									<ActionButtons
										onEdit={() => dispatch(editTask(task.id))}
										onDelete={() => dispatch(removeTask(task.id))}
									/>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	) : (
		<p className='text-gray-500 py-4'>Nenhuma tarefa para este dia.</p>
	)
}

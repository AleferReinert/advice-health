import { editTask, removeTask } from '@/redux/slices/tasksSlice'
import { RootState } from '@/redux/store'
import { useEffect, useState } from 'react'
import { AiOutlineCheckCircle, AiOutlineClockCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { ActionButtons } from '../ActionButtons/ActionButtons'

export function Tasks() {
	const { selectedDate } = useSelector((state: RootState) => state.schedule)
	const { selectedDateTasks } = useSelector((state: RootState) => state.tasks)
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// dispatch(filterTasksByDate(selectedDate))
		// setLoading(false)
	}, [dispatch, selectedDate])

	return selectedDateTasks?.length > 0 ? (
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
					{selectedDateTasks.map((task, index) => {
						const statusStyles = task.isCompleted
							? 'text-primary'
							: task.status === 'Atrasada'
							? 'text-red-600'
							: 'text-yellow-600'
						const statusIcon = task.isCompleted ? (
							<AiOutlineCheckCircle size={20} title='Concluído' />
						) : task.status === 'Atrasada' ? (
							<AiOutlineCloseCircle size={20} title='Atrasado' />
						) : (
							<AiOutlineClockCircle size={20} title='Pendente' />
						)
						const statusText = task.isCompleted ? 'Concluído' : task.status

						return (
							<tr key={index}>
								<td className='whitespace-normal'>{task.text}</td>
								<td className='hidden lg:table-cell'>{task.priority}</td>
								<td className={`w-0 text-center ${statusStyles} `}>
									<span className='inline-block w-min'>{statusIcon}</span>
									<span className='hidden'>{statusText}</span>
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

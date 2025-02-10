import { TaskState } from '@/app/features/tasks/tasksSlice'
import { getDateOffset } from './events.mock'

// Tasks of last 30 days and next 30 days, without sundays and saturdays
export const mockTasks: TaskState[] = [
	{
		id: '1',
		date: getDateOffset(1),
		text: 'Task 1',
		status: 'Pendente',
		priority: 'Média',
		isCompleted: false
	},
	{
		id: '2',
		date: getDateOffset(2),
		text: 'Task 2',
		status: 'Concluída',
		priority: 'Baixa',
		isCompleted: true
	},
	{
		id: '3',
		date: getDateOffset(3),
		text: 'Task 3',
		status: 'Pendente',
		priority: 'Baixa',
		isCompleted: false
	},
	{
		id: '4',
		date: getDateOffset(4),
		text: 'Task 4',
		status: 'Concluída',
		priority: 'Média',
		isCompleted: true
	},
	{
		id: '5',
		date: getDateOffset(0),
		text: 'Task 5',
		status: 'Atrasada',
		priority: 'Baixa',
		isCompleted: false
	},
	{
		id: '6',
		date: getDateOffset(0),
		text: 'Task 6',
		status: 'Atrasada',
		priority: 'Baixa',
		isCompleted: true
	},
	{
		id: '7',
		date: getDateOffset(-1),
		text: 'Task 7',
		status: 'Pendente',
		priority: 'Média',
		isCompleted: false
	},
	{
		id: '8',
		date: getDateOffset(-1),
		text: 'Task 8',
		status: 'Concluída',
		priority: 'Baixa',
		isCompleted: true
	},
	{
		id: '9',
		date: getDateOffset(-2),
		text: 'Task 9',
		status: 'Pendente',
		priority: 'Baixa',
		isCompleted: false
	},
	{
		id: '10',
		date: getDateOffset(-3),
		text: 'Task 10',
		status: 'Concluída',
		priority: 'Média',
		isCompleted: true
	},
	{
		id: '11',
		date: getDateOffset(1),
		text: 'Task 10',
		status: 'Concluída',
		priority: 'Média',
		isCompleted: true
	},
	{
		id: '12',
		date: getDateOffset(1),
		text: 'Task 10',
		status: 'Atrasada',
		priority: 'Média',
		isCompleted: true
	}
]

import { TaskState } from '@/app/features/tasks/tasksSlice'
import { getDateOffset } from '@/utils/getDateOffset'
// Tasks of last 30 days and next 30 days, without sundays and saturdays
export const mockTasks: TaskState[] = [
	{
		id: '1',
		date: getDateOffset(1),
		isCompleted: false,
		text: 'Task 1',
		priority: 'Média'
	},
	{
		id: '2',
		date: getDateOffset(2),
		isCompleted: true,
		text: 'Task 2',
		priority: 'Baixa'
	},
	{
		id: '3',
		date: getDateOffset(3),
		isCompleted: false,
		text: 'Task 3',
		priority: 'Baixa'
	},
	{
		id: '4',
		date: getDateOffset(4),
		isCompleted: true,
		text: 'Task 4',
		priority: 'Média'
	},
	{
		id: '5',
		date: getDateOffset(0),
		isCompleted: false,
		text: 'Task 5',
		priority: 'Baixa'
	},
	{
		id: '6',
		date: getDateOffset(0),
		isCompleted: true,
		text: 'Task 6',
		priority: 'Baixa'
	},
	{
		id: '7',
		date: getDateOffset(-1),
		isCompleted: false,
		text: 'Task 7',
		priority: 'Média'
	},
	{
		id: '8',
		date: getDateOffset(-1),
		isCompleted: true,
		text: 'Task 8',
		priority: 'Baixa'
	},
	{
		id: '9',
		date: getDateOffset(-2),
		isCompleted: false,
		text: 'Task 9',
		priority: 'Baixa'
	},
	{
		id: '10',
		date: getDateOffset(-3),
		isCompleted: true,
		text: 'Task 10',
		priority: 'Média'
	},
	{
		id: '11',
		date: getDateOffset(1),
		isCompleted: false,
		text: 'Task 11',
		priority: 'Média'
	},
	{
		id: '12',
		date: getDateOffset(1),
		isCompleted: true,
		text: 'Task 12',
		priority: 'Média'
	},
	{
		id: '13',
		date: getDateOffset(0),
		isCompleted: false,
		text: 'Task 13',
		priority: 'Média'
	},
	{
		id: '14',
		date: getDateOffset(0),
		isCompleted: true,
		text: 'Task 14',
		priority: 'Média'
	},
	{
		id: '15',
		date: getDateOffset(0),
		isCompleted: false,
		text: 'Task 15',
		priority: 'Média'
	}
]

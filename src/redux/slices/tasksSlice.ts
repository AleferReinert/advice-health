import { mockTasks } from '@/mock/tasks.mock'
import { createSlice } from '@reduxjs/toolkit'

export interface TaskState {
	id: string
	date: string
	status: 'Concluída' | 'Pendente' | 'Atrasada'
	isCompleted: boolean
	text: string
	priority: 'Alta' | 'Média' | 'Baixa' | 'Urgente'
}

export interface TasksState {
	tasks: TaskState[]
	selectedDateTasks: TaskState[]
}

const todayTasks = mockTasks.filter(task => task.date === new Date().toDateString())
const initialState: TasksState = {
	tasks: [],
	selectedDateTasks: []
}

export const TasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.tasks.push(action.payload)
		},
		editTask: (state, action) => {
			console.log('todo: editTask')
			alert(`todo: editTask ${action.payload}`)
		},
		removeTask: (state, action) => {
			alert(`Remove task? ${state.tasks.filter(task => task.id === action.payload).toString()}`)
			state.tasks = state.tasks.filter(task => task.id !== action.payload)
			state.selectedDateTasks = state.selectedDateTasks.filter(task => task.id !== action.payload)
		},
		filterTasksByDate: (state, action) => {
			state.selectedDateTasks = state.tasks.filter(task => task.date === action.payload)
		}
	}
})

export const { addTask, editTask, removeTask, filterTasksByDate } = TasksSlice.actions

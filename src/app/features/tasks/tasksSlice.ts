import { RootState } from '@/app/store'
import { createSelector, createSlice } from '@reduxjs/toolkit'
import { mockTasks } from '../../../mock/tasks.mock'

export interface TaskState {
	id: string
	date: string
	isCompleted: boolean
	text: string
	priority: 'Alta' | 'Média' | 'Baixa' | 'Urgente'
}

export interface TasksState {
	tasks: TaskState[]
}

const initialState: TasksState = {
	tasks: mockTasks
}

export const tasksSlice = createSlice({
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
			if (
				confirm(
					`Tem certeza que deseja excluir a tarefa "${
						state.tasks.filter(task => task.id === action.payload)[0].text
					}"?\nEssa ação não pode ser desfeita.`
				)
			) {
				state.tasks = state.tasks.filter(task => task.id !== action.payload)
			}
		}
	}
})

const selectTasks = (state: RootState) => state.tasks
const selectSelectedDate = (state: RootState) => state.schedule.selectedDate

export const selectTasksBySelectedDate = createSelector([selectTasks, selectSelectedDate], (tasks, selectedDate) => {
	return tasks.tasks.filter(task => task.date === selectedDate)
})

export const { addTask, editTask, removeTask } = tasksSlice.actions

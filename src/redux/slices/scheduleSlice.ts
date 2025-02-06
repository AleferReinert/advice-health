import { mockDoctors } from '@/mock/doctors.mock'
import { mockEvents } from '@/mock/events.mock'
import { createSlice } from '@reduxjs/toolkit'

export interface EventState {
	id: string
	date: string
	patientId: string
	doctorId: string
	attended: boolean
	price: number
}

export interface ScheduleState {
	selectedDate: string
	events: EventState[]
	selectedDateEvents: EventState[]
	selectedDoctorId: string
	attendedPatients: number
	unattendedPatients: number
	totalAmountReceived: number
}

const initialState: ScheduleState = {
	selectedDate: new Date().toDateString(),
	events: mockEvents,
	selectedDateEvents: mockEvents.filter(event => event.date === new Date().toDateString()),
	selectedDoctorId: mockDoctors[0].id,
	attendedPatients: 0,
	unattendedPatients: 0,
	totalAmountReceived: 0
}

export const ScheduleSlice = createSlice({
	name: 'schedule',
	initialState,
	reducers: {
		addEvent: (state, action) => {
			state.events.push(action.payload)
		},
		editEvent: (state, action) => {
			console.log('todo: editEvent')
			alert(`todo: editEvent ${action.payload}`)
		},
		removeEvent: (state, action) => {
			console.log('todo: removeEvent ')
			alert(`todo: removeEvent ${action.payload}`)
		},
		filterEventsByDate: (state, action) => {
			state.selectedDateEvents = state.events.filter(item => item.date === action.payload)
		},
		filterEventsByDateAndDoctor: (state, action) => {
			state.selectedDoctorId = action.payload
			state.selectedDateEvents = state.events.filter(
				item => item.date === state.selectedDate && item.doctorId === action.payload
			)
		},
		setAttendedPatients: (state, action) => {
			state.attendedPatients = state.selectedDateEvents.filter(
				item => item.attended && item.date === action.payload
			).length
		},
		setUnattendedPatients: (state, action) => {
			state.unattendedPatients = state.selectedDateEvents.filter(
				item => !item.attended && item.date === action.payload
			).length
		},
		setSelectedDate: (state, action) => {
			state.selectedDate = action.payload
		},
		setTotalAmountReceived: state => {
			state.totalAmountReceived = state.selectedDateEvents
				.filter(item => item.attended)
				.reduce((sum, item) => sum + (item.price || 0), 0)
		}
	}
})

export const {
	filterEventsByDate,
	filterEventsByDateAndDoctor,
	addEvent,
	editEvent,
	removeEvent,
	setAttendedPatients,
	setUnattendedPatients,
	setSelectedDate,
	setTotalAmountReceived
} = ScheduleSlice.actions

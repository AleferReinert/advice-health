import { RootState } from '@/app/store'
import { mockDoctors } from '@/mock/doctors.mock'
import { mockEvents } from '@/mock/events.mock'
import { createSelector, createSlice } from '@reduxjs/toolkit'
import { DoctorState } from '../doctors/doctorsSlice'

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
	selectedDoctor: DoctorState
	events: EventState[]
	filteredEvents: EventState[]
}

const initialState: ScheduleState = {
	selectedDate: new Date().toDateString(),
	selectedDoctor: mockDoctors[0],
	events: mockEvents,
	filteredEvents: mockEvents.filter(event => event.date === new Date().toDateString())
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
		filterEventsByDoctorOnSelectedDate: (state, action) => {
			state.filteredEvents = state.events.filter(
				event => event.date === state.selectedDate && event.doctorId === action.payload
			)
		},
		// filterEventsByPatientName: (state, action) => {
		// 	state.filteredEvents = state.events.filter(event => {
		// 		const patientName = mockPatients.find(patient => patient.id === action.payload)?.fullName // TODO PRECISA ARRUMAR AQUI
		// 		return patientName?.toLowerCase().includes(action.payload.toLowerCase())
		// 	})
		// },
		setSelectedDate: (state, action) => {
			state.selectedDate = action.payload
		}
	}
})

export const { filterEventsByDoctorOnSelectedDate, addEvent, editEvent, removeEvent, setSelectedDate } =
	ScheduleSlice.actions

export const selectAttendedPatientsOnSelectedDate = (state: RootState) =>
	state.schedule.events.filter(item => item.attended && item.date === state.schedule.selectedDate).length

export const selectUnattendedPatientsOnSelectedDate = (state: RootState) =>
	state.schedule.events.filter(item => item.attended && item.date === state.schedule.selectedDate).length

export const selectTotalAmountReceivedOnSelectedDate = (state: RootState) =>
	state.schedule.events
		.filter(item => item.attended && item.date === state.schedule.selectedDate)
		.reduce((sum, item) => sum + (item.price || 0), 0)

const selectEvents = (state: RootState) => state.schedule.events
const selectSelectedDate = (state: RootState) => state.schedule.selectedDate

export const selectEventsBySelectedDate = createSelector([selectEvents, selectSelectedDate], (events, selectedDate) => {
	return events.filter(event => event.date === selectedDate)
})

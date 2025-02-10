import { AppDispatch, RootState } from '@/app/store'
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
	filteredEventsBySearchTerm: EventState[]
}

const initialState: ScheduleState = {
	selectedDate: new Date().toDateString(),
	selectedDoctor: mockDoctors[0],
	events: mockEvents,
	filteredEventsBySearchTerm: mockEvents
}

export const scheduleSlice = createSlice({
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
		setSelectedDate: (state, action) => {
			state.selectedDate = action.payload
		},
		setSelectedDoctor: (state, action) => {
			state.selectedDoctor = action.payload
		},
		setFilteredEvents: (state, action) => {
			state.filteredEventsBySearchTerm = action.payload
		}
	}
})

const selectEvents = (state: RootState) => state.schedule.events
const selectSelectedDate = (state: RootState) => state.schedule.selectedDate
const selectPatients = (state: RootState) => state.patients.patients

export const selectEventsBySelectedDate = createSelector([selectEvents, selectSelectedDate], (events, selectedDate) => {
	return events.filter(event => event.date === selectedDate)
})

export const selectAttendedPatientsOnSelectedDate = (state: RootState) =>
	state.schedule.events.filter(item => item.attended && item.date === state.schedule.selectedDate).length

export const selectUnattendedPatientsOnSelectedDate = (state: RootState) =>
	state.schedule.events.filter(item => item.attended && item.date === state.schedule.selectedDate).length

export const selectTotalAmountReceivedOnSelectedDate = (state: RootState) =>
	state.schedule.events
		.filter(item => item.attended && item.date === state.schedule.selectedDate)
		.reduce((sum, item) => sum + (item.price || 0), 0)

export const selectEventsByDoctorOnSelectedDate = (state: RootState) =>
	state.schedule.events.filter(
		event => event.date === state.schedule.selectedDate && event.doctorId === state.schedule.selectedDoctor.id
	)

export const filterEventsByPatientName = (searchTerm: string) => {
	return (dispatch: AppDispatch, getState: () => RootState) => {
		const state = getState()
		const patients = selectPatients(state)
		const filteredEventsBySearchTerm = state.schedule.events.filter(event => {
			const patient = patients.find(patient => patient.id === event.patientId)
			return patient?.fullName.toLowerCase().includes(searchTerm.toLowerCase())
		})
		dispatch(setFilteredEvents(filteredEventsBySearchTerm))
	}
}

export const { addEvent, editEvent, removeEvent, setSelectedDate, setSelectedDoctor, setFilteredEvents } =
	scheduleSlice.actions

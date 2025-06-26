import { AppDispatch, RootState } from '@/app/store'
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { mockAppointments } from '../../../mock/appointments.mock'

const selectAppointments = (state: RootState) => state.appointments.appointments
const selectSelectedDate = (state: RootState) => state.schedule.selectedDate
const selectSelectedDoctor = (state: RootState) => state.schedule.selectedDoctor
const selectPatients = (state: RootState) => state.patients.patients

export interface AppointmentState {
	id: string
	date: string // 31-12-1970
	time: string // 23:59
	patientId: string
	doctorId: string
	attended: boolean
	price: number
	formattedDate?: string
	formattedHour?: string
}

export interface AppointmentsState {
	appointments: AppointmentState[]
	filteredAppointmentsBySearchTerm: AppointmentState[]
}

const initialState: AppointmentsState = {
	appointments: mockAppointments,
	filteredAppointmentsBySearchTerm: mockAppointments
}

export const appointmentsSlice = createSlice({
	name: 'appointments',
	initialState,
	reducers: {
		addAppointment: (state, action: PayloadAction<AppointmentState>) => {
			state.appointments.push(action.payload)
		},
		editAppointment: (state, action) => {
			console.log('todo: editAppointment')
			alert(`todo: editAppointment ${action.payload}`)
		},
		removeAppointment: (state, action) => {
			console.log('todo: removeAppointment ')
			alert(`todo: removeAppointment ${action.payload}`)
		},
		setFilteredAppointmentsBySearchTerm: (state, action) => {
			state.filteredAppointmentsBySearchTerm = action.payload
		}
	}
})

export const filterAppointmentsByPatientName = (searchTerm: string) => {
	return (dispatch: AppDispatch, getState: () => RootState) => {
		const state = getState()
		const patients = selectPatients(state)
		const filteredAppointmentsBySearchTerm = state.appointments.appointments.filter(appointments => {
			const patient = patients.find(patient => patient.id === appointments.patientId)
			return patient?.fullName.toLowerCase().includes(searchTerm.toLowerCase())
		})
		dispatch(setFilteredAppointmentsBySearchTerm(filteredAppointmentsBySearchTerm))
	}
}

export const selectAppointmentsBySelectedDate = createSelector(
	[selectAppointments, selectSelectedDate],
	(appointments, selectedDate) => {
		return appointments.filter(appointments => appointments.date === selectedDate)
	}
)

export const selectAppointmentsByDoctorId = createSelector(
	[selectAppointments, selectSelectedDoctor],
	(appointments, selectedDoctor) => {
		return appointments.filter(appointments => appointments.doctorId === selectedDoctor.id)
	}
)

export const selectAppointmentsByDoctorIdOnSelectedDate = createSelector(
	[selectAppointments, selectSelectedDate, selectSelectedDoctor],
	(appointments, selectedDate, selectedDoctor) => {
		return appointments.filter(
			appointments => appointments.doctorId === selectedDoctor.id && appointments.date === selectedDate
		)
	}
)

export const { addAppointment, editAppointment, removeAppointment, setFilteredAppointmentsBySearchTerm } =
	appointmentsSlice.actions

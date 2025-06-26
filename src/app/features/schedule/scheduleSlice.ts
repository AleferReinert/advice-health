import { RootState } from '@/app/store'
import { createSlice } from '@reduxjs/toolkit'
import { mockDoctors } from '../../../mock/doctors.mock'
import { formatDate } from '../../../utils/formatDate'
import { DoctorState } from '../doctors/doctorsSlice'

export interface ScheduleState {
	selectedDate: string
	selectedDoctor: DoctorState
}

const initialState: ScheduleState = {
	selectedDate: formatDate(new Date().toDateString()),
	selectedDoctor: mockDoctors[0]
}

export const scheduleSlice = createSlice({
	name: 'schedule',
	initialState,
	reducers: {
		setSelectedDate: (state, action) => {
			state.selectedDate = action.payload
		},
		setSelectedDoctor: (state, action) => {
			state.selectedDoctor = action.payload
		}
	}
})

export const selectAttendedPatientsOnSelectedDate = (state: RootState) => {
	return state.appointments.appointments.filter(
		appointment => appointment.attended && formatDate(appointment.date) === formatDate(state.schedule.selectedDate)
	).length
}

export const selectUnattendedPatientsOnSelectedDate = (state: RootState) => {
	return state.appointments.appointments.filter(
		appointment => !appointment.attended && formatDate(appointment.date) === formatDate(state.schedule.selectedDate)
	).length
}

export const selectTotalAmountReceivedOnSelectedDate = (state: RootState) => {
	return state.appointments.appointments
		.filter(
			appointment => appointment.attended && formatDate(appointment.date) === formatDate(state.schedule.selectedDate)
		)
		.reduce((sum, appointment) => sum + (appointment.price || 0), 0)
}

export const { setSelectedDate, setSelectedDoctor } = scheduleSlice.actions

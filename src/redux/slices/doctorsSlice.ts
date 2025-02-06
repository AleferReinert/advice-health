import { mockDoctors } from '@/mock/doctors.mock'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface DoctorState {
	id: string
	name: string
	crm: string
	specialty: string
	photo: string
}

export interface DoctorsState {
	doctors: DoctorState[]
}

const initialState: DoctorsState = {
	doctors: mockDoctors
}

export const DoctorsSlice = createSlice({
	name: 'doctors',
	initialState,
	reducers: {
		addDoctor: (state, action) => {
			state.doctors.push(action.payload)
		}
	}
})

export const selectDoctorById = (doctorId: string) => (state: RootState) => {
	return state.doctors.doctors.find(doctor => doctor.id === doctorId)
}

export const { addDoctor } = DoctorsSlice.actions

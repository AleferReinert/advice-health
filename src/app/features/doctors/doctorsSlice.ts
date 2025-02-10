import { mockDoctors } from '@/mock/doctors.mock'
import { createSlice } from '@reduxjs/toolkit'

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

export const { addDoctor } = DoctorsSlice.actions

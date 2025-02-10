import { mockPatients } from '@/mock/patients.mock'
import { createSlice } from '@reduxjs/toolkit'

export interface PatientState {
	id: string
	fullName: string
	dateOfBirth: string
	cpf: string
	phone: string
	email: string
	gender: 'male' | 'female' | 'other'
	address: {
		postalCode: string
		street: string
		number: string
		complement?: string
		district: string
		city: string
		state: string
	}
	emergencyContact?: {
		name: string
		phone: string
		relation: string
	}
	registrationDate: string
}

interface PatientsState {
	patients: PatientState[]
}

const initialState: PatientsState = {
	patients: mockPatients
}

export const patientsSlice = createSlice({
	name: 'patients',
	initialState,
	reducers: {
		addPatient: (state, action) => {
			state.patients.push(action.payload)
		}
	}
})

export const { addPatient } = patientsSlice.actions

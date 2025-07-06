import { createSlice } from '@reduxjs/toolkit'
import { mockPatients } from '../../../mock/patients.mock'

export interface PatientState {
	id: string
	fullName: string
	slug: string
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
		fullName: string
		phone: string
		relation: string
	}
	registrationDate: string
}

interface PatientsState {
	patients: PatientState[]
	filteredPatientsByNameOrCpf: PatientState[]
}

const initialState: PatientsState = {
	patients: mockPatients,
	filteredPatientsByNameOrCpf: mockPatients
}

export const patientsSlice = createSlice({
	name: 'patients',
	initialState,
	reducers: {
		addPatient: (state, action) => {
			state.patients.push(action.payload)
		},
		editPatient: (state, action) => {
			alert('todo: editPatient')
		},
		removePatient: (state, action) => {
			alert('todo: removePatient')
		},
		setFilteredPatientsByNameOrCpf: (state, action) => {
			state.filteredPatientsByNameOrCpf = state.patients.filter(patient => {
				const isName = patient.fullName.toLowerCase().includes(action.payload.toLowerCase())
				const isCpf = patient.cpf.replace(/[.-]/g, '').startsWith(action.payload.replace(/[.-]/g, ''))

				return isName || isCpf
			})
		}
	}
})

export const { addPatient, editPatient, removePatient, setFilteredPatientsByNameOrCpf } = patientsSlice.actions

import { createSlice } from '@reduxjs/toolkit'
import { mockDoctors } from '../../../mock/doctors.mock'

export interface DoctorState {
	id: string
	createdAt: string
	personalInfo: {
		fullName: string
		dateOfBirth: string
		cpf: string
		gender: 'male' | 'female' | 'other'
		profilePictureUrl: string
		phone?: string
		email?: string
	}
	professionalInfo: {
		crm: string
		specialties: string[]
		phone: string
		email: string
	}
	address: {
		postalCode: string
		street: string
		number: string
		complement?: string
		district: string
		city: string
		state: string
	}
	systemAccess: {
		email: string
		passwordHash: string
	}
}

export interface DoctorsState {
	doctors: DoctorState[]
	filteredDoctorsByName: DoctorState[]
}

const initialState: DoctorsState = {
	doctors: mockDoctors,
	filteredDoctorsByName: mockDoctors
}

export const doctorsSlice = createSlice({
	name: 'doctors',
	initialState,
	reducers: {
		addDoctor: (state, action) => {
			state.doctors.push(action.payload)
		},
		editDoctor: (state, action) => {
			alert('todo: editDoctor')
		},
		removeDoctor: (state, action) => {
			alert('todo: removeDoctor')
		},
		setFilteredDoctorsByName: (state, action) => {
			state.filteredDoctorsByName = state.doctors.filter(doctor => {
				doctor.personalInfo.fullName.toLowerCase().includes(action.payload.toLowerCase())
			})
		}
	}
})

export const { addDoctor, editDoctor, removeDoctor, setFilteredDoctorsByName } = doctorsSlice.actions

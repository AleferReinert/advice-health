import { mockPatients } from '@/mock/patients.mock'
import { PatientState } from '@/redux/slices/patientsSlice'

export function getPatientById(id: string): PatientState | undefined {
	return mockPatients.find(patient => patient.id === id)
}

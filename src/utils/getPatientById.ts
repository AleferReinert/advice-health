import { PatientProps } from '@/app/pacientes/page'
import { mockPatients } from '@/mock/patients.mock'

export function getPatientById(id: string): PatientProps | undefined {
	return mockPatients.find(patient => patient.id === id)
}

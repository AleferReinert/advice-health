import { PatientProps } from '@/components/NewAppointment/NewAppointment'
import { mockPatients } from '@/mock/patients.mock'

export function getPatientById(id: string): PatientProps | undefined {
	return mockPatients.find(patient => patient.id === id)
}

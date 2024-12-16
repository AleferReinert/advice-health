import { DoctorProps } from '@/components/DoctorList/DoctorList'
import { mockDoctors } from '@/mock/doctors.mock'

export function getDoctorById(id: string): DoctorProps | undefined {
	return mockDoctors.find(doctor => doctor.id === id)
}

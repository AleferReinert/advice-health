import { AppointmentState } from '@/app/features/appointments/appointmentsSlice'
import { getDateOffset } from '../utils/getDateOffset'

export const mockAppointments: AppointmentState[] = [
	{
		id: '1',
		date: getDateOffset(-30),
		time: '12:00',
		patientId: '1',
		doctorId: '1',
		attended: true,
		price: 100
	},
	{
		id: '2',
		date: getDateOffset(-29),
		time: '13:00',
		patientId: '2',
		doctorId: '2',
		attended: false,
		price: 200
	},
	{
		id: '3',
		date: getDateOffset(-1),
		time: '14:00',
		patientId: '3',
		doctorId: '3',
		attended: true,
		price: 150
	},
	{
		id: '4',
		date: getDateOffset(0),
		time: '12:00',
		patientId: '4',
		doctorId: '4',
		attended: false,
		price: 180
	},
	{
		id: '5',
		date: getDateOffset(0),
		time: '15:00',
		patientId: '5',
		doctorId: '1',
		attended: true,
		price: 120
	},
	{
		id: '6',
		date: getDateOffset(0),
		time: '16:00',
		patientId: '6',
		doctorId: '2',
		attended: false,
		price: 200
	},
	{
		id: '7',
		date: getDateOffset(0),
		time: '17:00',
		patientId: '7',
		doctorId: '3',
		attended: true,
		price: 160
	},
	{
		id: '8',
		date: getDateOffset(0),
		time: '18:00',
		patientId: '8',
		doctorId: '4',
		attended: false,
		price: 190
	},
	{
		id: '9',
		date: getDateOffset(5),
		time: '19:00',
		patientId: '9',
		doctorId: '1',
		attended: true,
		price: 100
	},
	{
		id: '10',
		date: getDateOffset(15),
		time: '20:00',
		patientId: '10',
		doctorId: '2',
		attended: false,
		price: 200
	},
	{
		id: '11',
		date: getDateOffset(30),
		time: '21:00',
		patientId: '1',
		doctorId: '3',
		attended: true,
		price: 150
	}
]

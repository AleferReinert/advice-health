import { AppointmentProps } from '@/components/Agenda/Agenda'

export const mockAgenda: AppointmentProps[] = [
	{
		id: '1',
		date: new Date(2024, 9, 20, 9, 0),
		patientId: '1',
		doctorId: '1',
		attended: true,
		price: 100
	},
	{
		id: '2',
		date: new Date(2024, 9, 20, 10, 0),
		patientId: '2',
		doctorId: '2',
		attended: false,
		price: 200
	},
	{
		id: '3',
		date: new Date(2024, 10, 20, 11, 0),
		patientId: '3',
		doctorId: '3',
		attended: true,
		price: 150
	},
	{
		id: '4',
		date: new Date(2024, 10, 20, 12, 0),
		patientId: '4',
		doctorId: '4',
		attended: false,
		price: 180
	},
	{
		id: '5',
		date: new Date(2024, 10, 21, 9, 0),
		patientId: '5',
		doctorId: '1',
		attended: true,
		price: 120
	},
	{
		id: '6',
		date: new Date(2024, 11, 21, 10, 0),
		patientId: '6',
		doctorId: '2',
		attended: false,
		price: 200
	},
	{
		id: '7',
		date: new Date(2024, 11, 21, 11, 0),
		patientId: '7',
		doctorId: '3',
		attended: true,
		price: 160
	},
	{
		id: '8',
		date: new Date(2024, 11, 21, 12, 0),
		patientId: '8',
		doctorId: '4',
		attended: false,
		price: 190
	},
	{
		id: '9',
		date: new Date(2024, 11, 22, 9, 0),
		patientId: '9',
		doctorId: '1',
		attended: true,
		price: 100
	},
	{
		id: '10',
		date: new Date(2024, 11, 22, 10, 0),
		patientId: '10',
		doctorId: '2',
		attended: false,
		price: 200
	},
	{
		id: '11',
		date: new Date(2024, 11, 22, 11, 0),
		patientId: '1',
		doctorId: '3',
		attended: true,
		price: 150
	},
	{
		id: '12',
		date: new Date(2024, 11, 22, 12, 0),
		patientId: '2',
		doctorId: '4',
		attended: false,
		price: 180
	},
	{
		id: '13',
		date: new Date(2024, 11, 23, 9, 0),
		patientId: '3',
		doctorId: '1',
		attended: true,
		price: 120
	},
	{
		id: '14',
		date: new Date(2024, 11, 23, 10, 0),
		patientId: '4',
		doctorId: '2',
		attended: false,
		price: 200
	},
	{
		id: '15',
		date: new Date(2024, 11, 23, 11, 0),
		patientId: '5',
		doctorId: '3',
		attended: true,
		price: 160
	},
	{
		id: '16',
		date: new Date(2024, 11, 23, 12, 0),
		patientId: '6',
		doctorId: '4',
		attended: false,
		price: 190
	},
	{
		id: '17',
		date: new Date(2024, 11, 24, 9, 0),
		patientId: '7',
		doctorId: '1',
		attended: true,
		price: 110
	},
	{
		id: '18',
		date: new Date(2024, 11, 24, 10, 0),
		patientId: '8',
		doctorId: '2',
		attended: false,
		price: 210
	},
	{
		id: '19',
		date: new Date(2024, 11, 24, 11, 0),
		patientId: '9',
		doctorId: '3',
		attended: true,
		price: 170
	},
	{
		id: '20',
		date: new Date(2024, 11, 24, 12, 0),
		patientId: '10',
		doctorId: '4',
		attended: false,
		price: 200
	},
	{
		id: '21',
		date: new Date(2024, 11, 25, 9, 0),
		patientId: '1',
		doctorId: '1',
		attended: true,
		price: 100
	},
	{
		id: '22',
		date: new Date(2024, 11, 25, 10, 0),
		patientId: '2',
		doctorId: '2',
		attended: false,
		price: 200
	},
	{
		id: '23',
		date: new Date(2024, 11, 25, 11, 0),
		patientId: '3',
		doctorId: '3',
		attended: true,
		price: 150
	},
	{
		id: '24',
		date: new Date(2024, 11, 25, 12, 0),
		patientId: '4',
		doctorId: '4',
		attended: false,
		price: 180
	},
	{
		id: '25',
		date: new Date(2024, 11, 26, 9, 0),
		patientId: '5',
		doctorId: '1',
		attended: true,
		price: 120
	},
	{
		id: '26',
		date: new Date(2024, 11, 26, 10, 0),
		patientId: '6',
		doctorId: '2',
		attended: false,
		price: 200
	},
	{
		id: '27',
		date: new Date(2024, 11, 26, 11, 0),
		patientId: '7',
		doctorId: '3',
		attended: true,
		price: 160
	},
	{
		id: '28',
		date: new Date(2024, 11, 26, 12, 0),
		patientId: '8',
		doctorId: '4',
		attended: false,
		price: 190
	},
	{
		id: '29',
		date: new Date(new Date().setHours(8, 0, 0, 0)),
		patientId: '1',
		doctorId: '1',
		attended: true,
		price: 130.5
	},
	{
		id: '30',
		date: new Date(new Date().setHours(9, 0, 0, 0)),
		patientId: '2',
		doctorId: '1',
		attended: true,
		price: 140
	},
	{
		id: '31',
		date: new Date(new Date().setHours(10, 0, 0, 0)),
		patientId: '7',
		doctorId: '1',
		attended: false,
		price: 152.37
	},
	{
		id: '32',
		date: new Date(new Date().setHours(14, 0, 0, 0)),
		patientId: '3',
		doctorId: '2',
		attended: false,
		price: 160
	},
	{
		id: '33',
		date: new Date(new Date().setHours(16, 0, 0, 0)),
		patientId: '4',
		doctorId: '2',
		attended: false,
		price: 170
	},
	{
		id: '34',
		date: new Date(2025, 0, 4, 12, 0),
		patientId: '8',
		doctorId: '4',
		attended: false,
		price: 200
	}
]

import { EventState } from '@/app/features/schedule/scheduleSlice'

export const getDateOffset = (offset: number) => {
	const today = new Date()
	const date = new Date(today)
	date.setDate(today.getDate() + offset)
	return date.toDateString()
}

export const mockEvents: EventState[] = [
	{
		id: '1',
		date: getDateOffset(-30),
		patientId: '1',
		doctorId: '1',
		attended: true,
		price: 100
	},
	{
		id: '2',
		date: getDateOffset(-29),
		patientId: '2',
		doctorId: '2',
		attended: false,
		price: 200
	},
	{
		id: '3',
		date: getDateOffset(-1),
		patientId: '3',
		doctorId: '3',
		attended: true,
		price: 150
	},
	{
		id: '4',
		date: getDateOffset(0),
		patientId: '4',
		doctorId: '4',
		attended: false,
		price: 180
	},
	{
		id: '5',
		date: getDateOffset(0),
		patientId: '5',
		doctorId: '1',
		attended: true,
		price: 120
	},
	{
		id: '6',
		date: getDateOffset(-1),
		patientId: '6',
		doctorId: '2',
		attended: false,
		price: 200
	},
	{
		id: '7',
		date: getDateOffset(1),
		patientId: '7',
		doctorId: '3',
		attended: true,
		price: 160
	},
	{
		id: '8',
		date: getDateOffset(-2),
		patientId: '8',
		doctorId: '4',
		attended: false,
		price: 190
	},
	{
		id: '9',
		date: getDateOffset(5),
		patientId: '9',
		doctorId: '1',
		attended: true,
		price: 100
	},
	{
		id: '10',
		date: getDateOffset(15),
		patientId: '10',
		doctorId: '2',
		attended: false,
		price: 200
	},
	{
		id: '11',
		date: getDateOffset(30),
		patientId: '1',
		doctorId: '3',
		attended: true,
		price: 150
	}
]

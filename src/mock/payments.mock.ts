import { PaymentProps } from '@/components/Agenda/Agenda'

export const mockPayments: PaymentProps[] = [
	{
		appointmentId: '1',
		status: 'paid',
		paymentMethod: 'creditCard',
		paymentDate: new Date(2024, 9, 20, 9, 30),
		installments: {
			numberOfInstallments: 3,
			installmentValue: 33.33,
			dueDates: [new Date(2024, 9, 20), new Date(2024, 10, 20), new Date(2024, 11, 20)]
		},
		discount: {
			type: 'percentage',
			value: 10
		},
		cardBrand: 'visa'
	},
	{
		appointmentId: '2',
		status: 'unpaid',
		paymentMethod: 'debitCard',
		paymentDate: new Date(2024, 10, 20, 10, 30)
	},
	{
		appointmentId: '3',
		status: 'paid',
		paymentMethod: 'pix',
		paymentDate: new Date(2024, 10, 21, 9, 30),
		cardBrand: 'mastercard'
	}
]

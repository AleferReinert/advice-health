import { Metadata } from 'next'
import { ReactNode } from 'react'

interface LayoutAppointmentsPageProps {
	children: ReactNode
}

export const metadata: Metadata = {
	title: 'Consultas'
}

export default function LayoutPatients({ children }: LayoutAppointmentsPageProps) {
	return children
}

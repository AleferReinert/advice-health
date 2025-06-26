import { Metadata } from 'next'
import { ReactNode } from 'react'

interface LayoutPatientsPageProps {
	children: ReactNode
}

export const metadata: Metadata = {
	title: 'Pacientes'
}

export default function LayoutPatients({ children }: LayoutPatientsPageProps) {
	return children
}

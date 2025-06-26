import { Metadata } from 'next'
import { ReactNode } from 'react'

interface LayoutDoctorPageProps {
	children: ReactNode
}

export const metadata: Metadata = {
	title: 'Médicos'
}

export default function LayoutPatients({ children }: LayoutDoctorPageProps) {
	return children
}

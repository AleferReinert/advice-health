'use client'
import { Container } from '@/components/Container/Container'
import { mockMenu } from '@/mock/menu.mock'
import { useEffect } from 'react'

export default function Patients() {
	useEffect(() => {
		document.title = `${mockMenu[2].title} - AdviceHealth`
	}, [])

	return (
		<>
			<Container>pacientes</Container>
		</>
	)
}

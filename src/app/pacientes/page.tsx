'use client'
import { Container } from '@/components/Container/Container'
import { useEffect } from 'react'
import { mock } from '../mock'

export default function Patients() {
	useEffect(() => {
		document.title = `${mock.menu[2].title} - AdviceHealth`
	}, [])

	return (
		<>
			<Container>pacientes</Container>
		</>
	)
}

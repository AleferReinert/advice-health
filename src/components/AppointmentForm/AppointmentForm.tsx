'use client'

import { useState } from 'react'

export const AppointmentForm = ({ onSubmit }: any) => {
	const [patientName, setPatientName] = useState('')
	const [cpf, setCpf] = useState('')
	const [birthDate, setBirthDate] = useState('')
	const [address, setAddress] = useState('')
	const [paymentStatus, setPaymentStatus] = useState(false)

	const handleSubmit = () => {
		if (patientName && cpf && birthDate && address) {
			onSubmit({ patientName, cpf, birthDate, address, paymentStatus })
		}
	}

	return (
		<div>
			<h3>Agendar Consulta</h3>
			<input type='text' value={patientName} onChange={e => setPatientName(e.target.value)} placeholder='Nome do Paciente' />
			<input type='text' value={cpf} onChange={e => setCpf(e.target.value)} placeholder='CPF' />
			<input type='date' value={birthDate} onChange={e => setBirthDate(e.target.value)} placeholder='Data de Nascimento' />
			<input type='text' value={address} onChange={e => setAddress(e.target.value)} placeholder='Endereço' />
			<button onClick={handleSubmit}>Agendar</button>
		</div>
	)
}

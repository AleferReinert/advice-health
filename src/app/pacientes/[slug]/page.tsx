'use client'
import { RootState } from '@/app/store'
import { ButtonLink } from '@/components/ButtonLink/ButtonLink'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { formatPhoneNumber } from '../../../utils/formatPhoneNumber'

export default function PatientPage() {
	const { slug } = useParams()
	const patient = useSelector((state: RootState) => state.patients.patients.find(doc => doc.slug === slug))

	if (!patient)
		return (
			<>
				<p className='mb-10'>Paciente não encontrado.</p>
				<div className='mt-3'>
					<ButtonLink href='/medicos'>Voltar</ButtonLink>
				</div>
			</>
		)

	const { cpf, email, phone, dateOfBirth, fullName } = patient
	const { city, district, street, number, postalCode, state, complement } = patient.address

	return (
		<div>
			<div className='pb-4 sm:pb-8 flex flex-col gap-4'>
				<h1 className='font-semibold text-3xl'>{fullName}</h1>
				<div className='space-y-4 [&_strong]:font-medium font-light [&_a]:transition [&_a:hover]:text-primary'>
					<div>
						<h3 className='font-semibold text-primary'>Dados pessoais</h3>
						<p>
							<strong>CPF:</strong> {cpf}
							<br />
							<strong>Data de nascimento:</strong> {dateOfBirth}
							<br />
							<strong>Telefone: </strong>
							<a href={`tel:${phone}`} title='Ligar'>
								{formatPhoneNumber(phone)}
							</a>
							<br />
							<strong>E-mail: </strong>
							<a href={`mailto:${email}`} title='Enviar e-mail'>
								{email}
							</a>
							<br />
							<strong>Endereço: </strong>
							{street}, {number} - {complement}, {district}, {city} - {state}, CEP {postalCode}
						</p>
					</div>
					{patient.emergencyContact && (
						<div>
							<h3 className='font-semibold text-primary'>Contato de emergência</h3>
							<p>
								<strong>Nome:</strong> {patient.emergencyContact.fullName}
								<br />
								<strong>Relação: </strong>
								{patient.emergencyContact.relation}
								<br />
								<strong>Telefone: </strong>
								<a href={`tel:${patient.emergencyContact.phone}`} title='Ligar'>
									{formatPhoneNumber(patient.emergencyContact.phone)}
								</a>
								<br />
							</p>
						</div>
					)}
				</div>
			</div>
			<div className='mt-4 flex justify-end'>
				<ButtonLink href='/pacientes' className='w-full md:w-auto'>
					Voltar
				</ButtonLink>
			</div>
		</div>
	)
}

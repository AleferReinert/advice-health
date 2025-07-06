'use client'

import { RootState } from '@/app/store'
import { ButtonLink } from '@/components/ButtonLink/ButtonLink'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'

export default function DoctorPage() {
	const { slug } = useParams()
	const doctor = useSelector((state: RootState) => state.doctors.doctors.find(doc => doc.slug === slug))

	if (!doctor)
		return (
			<>
				<p className='mb-10'>Médico não encontrado.</p>
				<div className='mt-3'>
					<ButtonLink href='/medicos'>Voltar</ButtonLink>
				</div>
			</>
		)

	const { profilePictureUrl, fullName } = doctor.personalInfo
	const { crm, email, phone, specialties } = doctor.professionalInfo
	const { city, district, street, number, postalCode, state, complement } = doctor.address

	return (
		<div>
			<div className='py-4 sm:py-8 flex flex-col gap-4 sm:gap-8'>
				<div className='sm:flex gap-4 items-center sm:gap-8'>
					{profilePictureUrl && (
						<div className='relative aspect-square size-[240px] sm:size-[150px] mx-auto mb-8 sm:mb-0 sm:mx-0'>
							<Image
								src={profilePictureUrl}
								alt={`Foto de ${fullName}`}
								fill
								className='rounded-full'
								sizes='(max-width: 320px) 240px, 150px'
							/>
						</div>
					)}
					<div className=''>
						<h1 className='font-semibold text-3xl'>{fullName}</h1>
						<h2 className='font-light mb-4 text-lg'>{specialties.join(', ')}</h2>
					</div>
				</div>
				<address className='not-italic [&_strong]:font-medium font-light'>
					<strong>CRM:</strong> {crm}
					<br />
					<strong>Telefone: </strong>
					<a href={`tel:${phone}`}>{phone}</a>
					<br />
					<strong>Email: </strong>
					<a href={`mailto:${email}`}>{email}</a>
					<br />
					<strong>Endereço: </strong>
					{street}, {number} - {complement}, {district}, {city} - {state}, CEP {postalCode}
				</address>
			</div>
			<div className='mt-4 flex justify-end'>
				<ButtonLink href='/medicos' className='w-full md:w-auto'>
					Voltar
				</ButtonLink>
			</div>
		</div>
	)
}

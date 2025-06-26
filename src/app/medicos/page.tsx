'use client'
import { useAppSelector } from '@/app/hooks'
import { BoxContent } from '@/components/BoxContent/BoxContent'
import { Button } from '@/components/Button/Button'
import { ContactLinks } from '@/components/ContactLinks/ContactLinks'
import { Modal } from '@/components/Modal/Modal'
import { PatientForm } from '@/components/PatientForm/PatientForm'
import { Search } from '@/components/Search/Search'
import Link from 'next/link'
import { useState } from 'react'
import { HiUserPlus } from 'react-icons/hi2'

export default function DoctorsPage() {
	const [createPatientModal, setCreatePatientModal] = useState(false)
	const { filteredDoctorsByName } = useAppSelector(state => state.doctors)

	return (
		<>
			<div className='flex gap-2 mb-4'>
				<Search />
				<Button onClick={() => setCreatePatientModal(true)} title='Novo médico' className='w-min'>
					<span className='hidden sm:inline'>Adicionar médico</span>
					<HiUserPlus />
				</Button>
			</div>

			<div className='grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{filteredDoctorsByName.length > 0 ? (
					filteredDoctorsByName.map((doctor, index) => {
						const fullName = doctor.personalInfo.fullName.split(' ')
						const firstAndLastName = `${fullName[0]} ${fullName[fullName.length - 1]}`
						const prefix = doctor.personalInfo.gender === 'male' ? 'Dr. ' : 'Dra. '

						return (
							<BoxContent key={index}>
								<Link title='Visualizar detalhes' href={`/profissional/${doctor.id}`} className='p-4 pb-0'>
									<h2 className='font-semibold' title={`${prefix}${doctor.personalInfo.fullName}`}>
										{prefix} {firstAndLastName}
									</h2>
									<p className='opacity-85 text-xs font-light'>CRM {doctor.professionalInfo.crm}</p>
									<p className='font-light'>{doctor.professionalInfo.specialties.join(', ')}</p>
								</Link>
								<ContactLinks email={doctor.professionalInfo.email} phone={doctor.professionalInfo.phone} />
							</BoxContent>
						)
					})
				) : (
					<p>Nenhum médico encontrado.</p>
				)}
			</div>

			<Modal title='Novo médico' showModal={createPatientModal} setShowModal={setCreatePatientModal}>
				<PatientForm setShowModal={setCreatePatientModal} />
			</Modal>
		</>
	)
}

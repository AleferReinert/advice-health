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

export default function PatientsPage() {
	const [createPatientModal, setCreatePatientModal] = useState(false)
	const { filteredPatientsByNameOrCpf } = useAppSelector(state => state.patients)

	return (
		<>
			<div className='flex gap-2 mb-4'>
				<Search />
				<Button onClick={() => setCreatePatientModal(true)} className='w-min'>
					<span className='hidden sm:inline'>Novo paciente</span>
					<HiUserPlus />
				</Button>
			</div>

			<div className='grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{filteredPatientsByNameOrCpf.length > 0 ? (
					filteredPatientsByNameOrCpf.map((patient, index) => {
						const fullName = patient.fullName.split(' ')
						const firstAndLastName = `${fullName[0]} ${fullName[fullName.length - 1]}`

						return (
							<BoxContent key={index} className='transition hover:scale-105'>
								<Link title='Visualizar detalhes' href={`/pacientes/${patient.slug}`} className='p-4 pb-0'>
									<h2 className='font-semibold' title={patient.fullName}>
										{firstAndLastName}
									</h2>
									<p className='opacity-85 text-sm font-light'>CPF {patient.cpf}</p>
								</Link>
								<ContactLinks email={patient.email} phone={patient.phone} />
							</BoxContent>
						)
					})
				) : (
					<p>Nenhum paciente encontrado.</p>
				)}
			</div>

			<Modal title='Novo paciente' showModal={createPatientModal} setShowModal={setCreatePatientModal}>
				<PatientForm setShowModal={setCreatePatientModal} />
			</Modal>
		</>
	)
}

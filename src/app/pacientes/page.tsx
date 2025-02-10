'use client'
import { Button } from '@/components/Button/Button'
import { CreatePatientModal } from '@/components/CreatePatientModal/CreatePatientModal'
import { Modal } from '@/components/Modal/Modal'
import { Schedule } from '@/components/Schedule/Schedule'
import { Search } from '@/components/Search/Search'
import { Section } from '@/components/Section/Section'
import { useEffect, useState } from 'react'
import { HiUserPlus } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function Patients() {
	const [createPatientModal, setCreatePatientModal] = useState(false)
	const { events } = useSelector((state: RootState) => state.schedule)

	useEffect(() => {
		document.title = `AdviceHealth - Pacientes`
	}, [])

	return (
		<>
			<div className='flex gap-2 mb-4'>
				<Search />
				<Button onClick={() => setCreatePatientModal(true)} title='Novo paciente' className='w-min'>
					<span className='hidden sm:inline'>Adicionar paciente</span>
					<HiUserPlus />
				</Button>
			</div>

			<Section title='Pacientes'>
				<Schedule events={events} showData />
			</Section>

			<Modal title='Novo paciente' showModal={createPatientModal} setShowModal={setCreatePatientModal}>
				<CreatePatientModal setShowModal={setCreatePatientModal} />
			</Modal>
		</>
	)
}

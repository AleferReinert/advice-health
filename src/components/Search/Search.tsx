import { setFilteredDoctorsByName } from '@/app/features/doctors/doctorsSlice'
import { setFilteredPatientsByNameOrCpf } from '@/app/features/patients/patientsSlice'
import { useAppDispatch } from '@/app/hooks'
import { usePathname } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export function Search() {
	const [searchTerm, setSearchTerm] = useState('')
	const dispatch = useAppDispatch()
	const pathname = usePathname()

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setSearchTerm(value)
		if (pathname === '/pacientes') {
			dispatch(setFilteredPatientsByNameOrCpf(value))
		} else {
			dispatch(setFilteredDoctorsByName(value))
		}
	}

	return (
		<div className='max-w-80 border bg-gray-200 py-1 px-4 group rounded-default'>
			<div className='flex w-full items-center justify-between gap-4'>
				<input
					type='text'
					placeholder='Digite o nome ou CPF'
					className='placeholder:text-inherit bg-transparent w-full py-2 text-gray-00 focus:text-text'
					value={searchTerm}
					onChange={e => handleSearch(e)}
				/>
				<button title='Pesquisar' className='transition text-gray-500 group-focus-within:text-text hover:!text-primary'>
					<AiOutlineSearch aria-hidden size={28} />
				</button>
			</div>
		</div>
	)
}

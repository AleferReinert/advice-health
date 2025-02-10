import { RootState } from '@/app/store'
import { ChangeEvent, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

export function Search() {
	const [query, setQuery] = useState<string>('')
	const { patients } = useSelector((state: RootState) => state.patients)
	const dispatch = useDispatch()

	const filteredPatientsByQuery = patients.filter(patient => patient.fullName.toLowerCase().includes(query))

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setQuery(value)
		// console.log(filteredPatientsByQuery)
	}

	return (
		<div className='max-w-80 border bg-gray-200 py-1 px-4 group rounded-default'>
			<div className='flex w-full items-center justify-between gap-4'>
				<input
					type='text'
					placeholder='Pesquisar paciente...'
					className='placeholder:text-inherit bg-transparent w-full py-2 text-gray-500 focus:text-text'
					value={query}
					onChange={e => handleSearch(e)}
				/>
				<button className='transition text-gray-500 group-focus-within:text-text hover:text-primary'>
					<AiOutlineSearch size={28} />
				</button>
			</div>
		</div>
	)
}

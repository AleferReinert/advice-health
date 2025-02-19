import { filterEventsByPatientName } from '@/app/features/schedule/scheduleSlice'
import { useAppDispatch } from '@/app/hooks'
import { ChangeEvent, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export function Search() {
	const [searchTerm, setSearchTerm] = useState('')
	const dispatch = useAppDispatch()

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setSearchTerm(value)
		dispatch(filterEventsByPatientName(value))
	}

	return (
		<div className='max-w-80 border bg-gray-200 py-1 px-4 group rounded-default'>
			<div className='flex w-full items-center justify-between gap-4'>
				<input
					type='text'
					placeholder='Pesquisar paciente...'
					className='placeholder:text-inherit bg-transparent w-full py-2 text-gray-500 focus:text-text'
					value={searchTerm}
					onChange={e => handleSearch(e)}
				/>
				<button className='transition text-gray-500 group-focus-within:text-text hover:text-primary'>
					<AiOutlineSearch size={28} />
				</button>
			</div>
		</div>
	)
}

'use client'
import Image from 'next/image'
import { AiFillCaretRight } from 'react-icons/ai'
import { Loading } from '../Loading/Loading'

export interface DoctorProps {
	id: string
	name: string
	crm: string
	specialty: string
	photo: string
}

interface DoctorListProps {
	doctorList: DoctorProps[]
	onSelectDoctor: (doctorId: string) => void
	loading: boolean
	selectedDoctor: string | null
}

export const DoctorList = ({ doctorList, onSelectDoctor, loading, selectedDoctor }: DoctorListProps) => {
	console.log('selectedDoctor: ', selectedDoctor)

	return loading ? (
		<Loading type='component' className='h-16' />
	) : (
		<div>
			{doctorList.map(doctor => {
				const active = selectedDoctor === doctor.id

				return (
					<div
						key={doctor.id}
						onClick={() => onSelectDoctor(doctor.id)}
						className='cursor-pointer flex gap-8 items-center justify-between py-2 -mx-4 px-4 hover:bg-gray-100 transition'
					>
						<div className='flex gap-4 w-max'>
							<Image alt={doctor.name} src={doctor.photo} width={48} height={48} className='rounded-full size-12' />
							<div>
								<h3 className={`${active && 'text-primary'} font-medium transition whitespace-nowrap`}>{doctor.name}</h3>
								<p className='text-sm'>{doctor.specialty}</p>
							</div>
						</div>
						<AiFillCaretRight className={`${active ? 'text-primary' : 'text-transparent'} size-4 transition`} />
					</div>
				)
			})}
		</div>
	)
}

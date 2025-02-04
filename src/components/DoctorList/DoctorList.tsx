'use client'
import Image from 'next/image'
import { AiFillCaretDown } from 'react-icons/ai'

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
	selectedDoctor: string | null
}

export const DoctorList = ({ doctorList, onSelectDoctor, selectedDoctor }: DoctorListProps) => {
	return doctorList.map(doctor => {
		const active = selectedDoctor === doctor.id

		return (
			<div
				key={doctor.id}
				onClick={() => onSelectDoctor(doctor.id)}
				className={`
							${active ? 'border-primary bg-gray-50' : 'border-transparent opacity-90'} 
							border-l-2 cursor-pointer flex gap-8 items-center justify-between py-2 pl-[.875rem] pr-4 transition-all
							hover:bg-gray-100 hover:opacity-100
						`}
			>
				<div className='flex gap-4 w-max'>
					<Image alt={doctor.name} src={doctor.photo} width={48} height={48} className='rounded-full size-12' />
					<div>
						<h3 className={`${active && 'text-primary'} font-medium transition whitespace-nowrap`}>{doctor.name}</h3>
						<p className='text-sm'>{doctor.specialty}</p>
					</div>
				</div>
				<AiFillCaretDown className={`${active ? 'text-primary' : 'text-transparent'} size-4 transition`} />
			</div>
		)
	})
}

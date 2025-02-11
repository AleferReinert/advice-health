'use client'
import { DoctorsState } from '@/app/features/doctors/doctorsSlice'
import { setSelectedDoctor } from '@/app/features/schedule/scheduleSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import Image from 'next/image'
import { AiFillCaretDown } from 'react-icons/ai'

export const DoctorList = ({ doctors }: DoctorsState) => {
	const { selectedDoctor } = useAppSelector(state => state.schedule)
	const dispatch = useAppDispatch()

	return (
		<ul className='w-full mt-4'>
			{doctors.map((doctor, index) => {
				const active = selectedDoctor.id === doctor.id

				return (
					<li
						key={index}
						onClick={() => dispatch(setSelectedDoctor(doctor))}
						className={`
							${active ? 'border-primary bg-gray-50' : 'border-transparent opacity-90'} 
							border-l-2 cursor-pointer flex gap-8 items-center justify-between py-2 pl-[.875rem] pr-4 transition-all
							hover:bg-gray-100 hover:opacity-100
						`}
					>
						<div className='flex gap-4 w-max'>
							<Image alt={doctor.name} src={doctor.photo} width={48} height={48} className='rounded-full size-12' />
							<div>
								<h3 className={`${active && 'text-primary'} font-medium transition whitespace-nowrap`}>
									{doctor.name}
								</h3>
								<p className='text-sm'>{doctor.specialty}</p>
							</div>
						</div>
						<AiFillCaretDown className={`${active ? 'text-primary' : 'text-transparent'} size-4 transition`} />
					</li>
				)
			})}
		</ul>
	)
}

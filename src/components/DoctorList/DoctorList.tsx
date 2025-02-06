'use client'
import { DoctorsState } from '@/redux/slices/doctorsSlice'
import { filterEventsByDateAndDoctor } from '@/redux/slices/scheduleSlice'
import { RootState } from '@/redux/store'
import Image from 'next/image'
import { AiFillCaretDown } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

interface DoctorListProps extends DoctorsState {}

export const DoctorList = ({ doctors }: DoctorListProps) => {
	const { selectedDoctorId } = useSelector((state: RootState) => state.schedule)
	const dispatch = useDispatch()

	return (
		<ul className='w-full mt-4'>
			{doctors.map((doctor, index) => {
				const active = selectedDoctorId === doctor.id

				return (
					<li
						key={index}
						onClick={() => dispatch(filterEventsByDateAndDoctor(doctor.id))}
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

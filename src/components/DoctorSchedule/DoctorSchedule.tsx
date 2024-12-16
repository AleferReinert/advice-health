'use client'

import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai'

interface AppointmentProps {
	time: string
	patient: string
}

interface DoctorScheduleProps {
	schedule: AppointmentProps[]
	date: Date
	doctorId: string | null
}

export const DoctorSchedule = ({ schedule, date, doctorId }: DoctorScheduleProps) => {
	return (
		<div>
			<h3>Agenda do Médico - {doctorId}</h3>
			<div className='grid gap-4'>
				{schedule.map((appointment, index) => (
					<div key={index} className='flex items-center justify-between p-4 border-b'>
						<div>
							<p>{appointment.time}</p>
							<p>{appointment.patient}</p>
						</div>
						<div className='flex gap-2'>
							<button>
								<AiOutlineEdit size={20} />
							</button>
							<button>
								<AiOutlineClose size={20} />
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

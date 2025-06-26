import { addAppointment } from '@/app/features/appointments/appointmentsSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { Dispatch, SetStateAction, useState } from 'react'
import { toast } from 'sonner'
import { formatDate } from '../../utils/formatDate'
import { Button } from '../Button/Button'
import { Field } from '../Field/Field'

interface CreateAppointmentModal {
	setShowModal: Dispatch<SetStateAction<boolean>>
}

export function CreateAppointmentModal({ setShowModal }: CreateAppointmentModal) {
	const { patients } = useAppSelector(state => state.patients)
	const { doctors } = useAppSelector(state => state.doctors)
	const dispatch = useAppDispatch()
	const [patientId, setPatientId] = useState<string>('')
	const [doctorId, setDoctorId] = useState<string>('')
	const [date, setDate] = useState<string>('')
	const [time, setTime] = useState<string>('')
	const [price, setPrice] = useState<number>(0)

	const isFormValid = patientId && doctorId && date && time && price

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		dispatch(
			addAppointment({
				id: '1',
				date: formatDate(date),
				time: time,
				patientId: patientId!,
				doctorId: doctorId!,
				attended: false,
				price: price!
			})
		)

		setShowModal(false)
		toast.success('Consulta agendada com sucesso!', {
			richColors: true,
			closeButton: true,
			duration: 5000
		})

		setPatientId('')
		setDoctorId('')
		setDate('')
		setTime('')
		setPrice(0)
	}

	return (
		<form action='' className='flex flex-col gap-4' onSubmit={handleSubmit}>
			<fieldset>
				<legend>Consulta</legend>
				<Field label='Paciente' required>
					<select required id='patientFullName' value={patientId} onChange={e => setPatientId(e.currentTarget.value)}>
						<option></option>
						{patients.map((patient, index) => (
							<option key={index} value={patient.id}>
								{patient.fullName} (CPF {patient.cpf})
							</option>
						))}
					</select>
				</Field>
				<Field label='Médico' required>
					<select required id='doctorFullName' value={doctorId} onChange={e => setDoctorId(e.currentTarget.value)}>
						<option></option>
						{doctors.map((doctor, index) => (
							<option key={index} value={doctor.id}>
								{doctor.personalInfo.fullName} - {doctor.professionalInfo.specialties[0]} (CRM{' '}
								{doctor.professionalInfo.crm})
							</option>
						))}
					</select>
				</Field>
				<div className='sm:flex gap-1'>
					<Field label='Data' required>
						<input type='date' id='date' required value={date} onChange={e => setDate(e.currentTarget.value)} />
					</Field>
					<Field label='Horário' required>
						<input type='time' id='time' required value={time} onChange={e => setTime(e.currentTarget.value)} />
					</Field>
				</div>
			</fieldset>
			<fieldset>
				<legend>Pagamento</legend>
				<Field label='Valor da consulta' required>
					<input
						required
						id='price'
						type='number'
						value={price}
						onChange={e => setPrice(Number(e.currentTarget.value))}
					/>
				</Field>
			</fieldset>
			<Button disabled={isFormValid ? false : true}>Salvar</Button>
		</form>
	)
}

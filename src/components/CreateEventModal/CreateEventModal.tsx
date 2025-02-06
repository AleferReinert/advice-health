import { addEvent } from '@/redux/slices/scheduleSlice'
import { RootState } from '@/redux/store'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../Button/Button'
import { Field } from '../Field/Field'

export function CreateEventModal() {
	const { patients } = useSelector((state: RootState) => state.patients)
	const { doctors } = useSelector((state: RootState) => state.doctors)
	const dispatch = useDispatch()
	const [patientId, setPatientId] = useState<string>()
	const [doctorId, setDoctorId] = useState<string>()
	const [date, setDate] = useState<Date | null>()
	const [price, setPrice] = useState<number>()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		dispatch(
			addEvent({ id: '1', date: date!, patientId: patientId!, doctorId: doctorId!, attended: false, price: price! })
		)
	}

	return (
		<form action='' className='flex flex-col gap-4' onSubmit={handleSubmit}>
			<fieldset>
				<legend>Agendamento</legend>
				<Field label='Paciente' required>
					<select required id='patientFullName' onChange={e => setPatientId(e.currentTarget.value)}>
						<option></option>
						{patients.map((patient, index) => (
							<option key={index} value={patient.id}>
								{patient.fullName} (CPF {patient.cpf})
							</option>
						))}
					</select>
				</Field>
				<Field label='Médico' required>
					<select required id='doctorFullName' onChange={e => setDoctorId(e.currentTarget.value)}>
						<option></option>
						{doctors.map((doctor, index) => (
							<option key={index} value={doctor.id}>
								{doctor.name} - {doctor.specialty} (CRM {doctor.crm})
							</option>
						))}
					</select>
				</Field>
				<Field label='Data' required>
					<input type='datetime-local' id='date' required onChange={e => setDate(new Date(e.currentTarget.value))} />
				</Field>
			</fieldset>
			<fieldset>
				<legend>Pagamento</legend>
				<Field label='Valor da consulta'>
					<input required id='price' type='number' onChange={e => setPrice(Number(e.currentTarget.value))} />
				</Field>
			</fieldset>
			<Button>Salvar</Button>
		</form>
	)
}

import { addPatient } from '@/app/features/patients/patientsSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { Dispatch, SetStateAction, useState } from 'react'
import { toast } from 'sonner'
import { Button } from '../Button/Button'
import { Field } from '../Field/Field'

interface CreatePatientModalProps {
	setShowModal: Dispatch<SetStateAction<boolean>>
}

export function CreatePatientModal({ setShowModal }: CreatePatientModalProps) {
	const { patients } = useAppSelector(state => state.patients)
	const lastPatientId = patients[patients.length - 1].id
	const newId = lastPatientId ? String(Number(lastPatientId) + 1) : '1'
	const dispatch = useAppDispatch()
	const [fullName, setFullName] = useState('')
	const [cpf, setCpf] = useState('')
	const [dateOfBirth, setDateOfBirth] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [postalCode, setPostalCode] = useState('')
	const [street, setStreet] = useState('')
	const [number, setNumber] = useState('')
	const [complement, setComplement] = useState('')
	const [district, setDistrict] = useState('')
	const [city, setCity] = useState('')
	const [state, setState] = useState('')
	const [emergencyContactName, setEmergencyContactName] = useState('')
	const [emergencyContactPhone, setEmergencyContactPhone] = useState('')
	const [emergencyContactRelation, setEmergencyContactRelation] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		const cpfExists = patients.some(patient => patient.cpf === cpf)

		if (cpfExists) {
			document.getElementById('cpf')?.classList.add('!border-red-500')
			document.getElementById('cpf')?.focus()
			toast.error('Erro: CPF já cadastrado.')
			return
		}

		dispatch(
			addPatient({
				id: newId,
				fullName,
				cpf,
				dateOfBirth,
				phone,
				email,
				postalCode,
				street,
				number,
				complement,
				district,
				city,
				state,
				emergencyContact: {
					name: emergencyContactName,
					phone: emergencyContactPhone,
					relation: emergencyContactRelation
				}
			})
		)

		setShowModal(false)
		toast.success('Paciente cadastrado com sucesso.', {
			richColors: true,
			closeButton: true,
			duration: 5000
		})

		setFullName('')
		setCpf('')
		setDateOfBirth('')
		setEmail('')
		setPhone('')
		setPostalCode('')
		setStreet('')
		setNumber('')
		setComplement('')
		setDistrict('')
		setCity('')
		setState('')
		setEmergencyContactName('')
		setEmergencyContactPhone('')
		setEmergencyContactRelation('')
	}

	return (
		<form action='' className='flex flex-col gap-4' onSubmit={handleSubmit}>
			<fieldset>
				<legend>Paciente</legend>
				<Field
					label='Nome completo'
					id='fullName'
					value={fullName}
					onChange={e => setFullName(e.target.value)}
					required
				/>

				<div className='md:flex gap-4'>
					<Field
						label='CPF'
						id='cpf'
						mask='999.999.999-99'
						inputMode='numeric'
						value={cpf}
						onChange={e => {
							setCpf(e.target.value)
							e.target.classList.remove('!border-red-500')
						}}
						required
					/>
					<Field
						label='Data de nascimento'
						id='dateOfBirth'
						type='date'
						className='bg-transparent'
						value={dateOfBirth}
						onChange={e => setDateOfBirth(e.target.value)}
						required
					/>
				</div>
				<div className='md:grid grid-cols-[2fr_1fr] gap-4'>
					<Field
						label='E-mail'
						id='email'
						type='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						autoComplete='on'
						required
					/>
					<Field
						label='Telefone'
						id='phone'
						mask='(99) 99999-9999'
						inputMode='numeric'
						value={phone}
						onChange={e => setPhone(e.target.value)}
						autoComplete='on'
						required
					/>
				</div>
			</fieldset>

			<fieldset>
				<legend>Endereço</legend>
				<div className='md:grid grid-cols-[1fr_3fr] gap-4'>
					<Field
						label='CEP'
						id='postalCode'
						mask='99999-999'
						inputMode='numeric'
						value={postalCode}
						onChange={e => setPostalCode(e.target.value)}
						required
					/>
					<Field label='Rua' id='street' value={street} onChange={e => setStreet(e.target.value)} required />
				</div>
				<div className='grid grid-cols-[1fr_3fr] gap-4'>
					<Field
						label='Número'
						id='number'
						inputMode='numeric'
						value={number}
						onChange={e => setNumber(e.target.value)}
						required
					/>
					<Field label='Complemento' id='complement' value={complement} onChange={e => setComplement(e.target.value)} />
				</div>
				<div className='md:grid grid-cols-[3fr_3fr_1fr] gap-4'>
					<Field label='Bairro' id='district' value={district} onChange={e => setDistrict(e.target.value)} required />
					<Field label='Cidade' id='city' value={city} onChange={e => setCity(e.target.value)} required />
					<Field
						label='Estado'
						id='state'
						value={state}
						maxLength={2}
						onChange={e => setState(e.target.value)}
						required
					/>
				</div>
			</fieldset>

			<fieldset>
				<legend>Contato Emergencial</legend>
				<Field
					label='Nome'
					id='emergencyContactName'
					value={emergencyContactName}
					onChange={e => setEmergencyContactName(e.target.value)}
				/>
				<div className='grid grid-cols-2 gap-4'>
					<Field
						label='Telefone'
						id='emergencyContactPhone'
						mask='(99) 99999-9999'
						inputMode='numeric'
						value={emergencyContactPhone}
						onChange={e => setEmergencyContactPhone(e.target.value)}
					/>
					<Field
						label='Relação'
						id='emergencyContactRelation'
						value={emergencyContactRelation}
						onChange={e => setEmergencyContactRelation(e.target.value)}
					/>
				</div>
			</fieldset>

			<Button>Salvar</Button>
		</form>
	)
}

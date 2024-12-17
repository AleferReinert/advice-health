import { Button } from '../Button/Button'
import { Field } from '../Field/Field'

export interface PatientProps {
	id: string
	fullName: string
	dateOfBirth: string
	cpf: string
	phone: string
	email: string
	gender: 'male' | 'female' | 'other'
	address: {
		postalCode: string
		street: string
		number: string
		complement?: string
		district: string
		city: string
		state: string
	}
	emergencyContact?: {
		name: string
		phone: string
		relation: string
	}
	registrationDate: string
}

export function NewAppointment() {
	const fieldsetStyles = 'border rounded-lg p-4'
	const legendStyles = 'font-medium'

	return (
		<form action='' className='flex flex-col gap-4'>
			<fieldset className={fieldsetStyles}>
				<legend className={legendStyles}>Paciente</legend>
				<Field label='Nome completo'>
					<input type='text' required />
				</Field>

				<div className='md:flex gap-4'>
					<Field label='CPF' mask='999.999.999-99'>
						<input type='text' inputMode='numeric' required />
					</Field>

					<Field label='Data de nascimento'>
						<input type='date' required className='bg-transparent' />
					</Field>
				</div>
				<div className='md:grid grid-cols-[2fr_1fr] gap-4'>
					<Field label='E-mail'>
						<input type='email' required />
					</Field>
					<Field label='Telefone' mask='(99) 99999-9999'>
						<input type='text' inputMode='numeric' required />
					</Field>
				</div>
			</fieldset>

			<fieldset className={fieldsetStyles}>
				<legend className={legendStyles}>Endereço</legend>

				<div className='md:grid grid-cols-[1fr_3fr] gap-4'>
					<Field label='CEP' mask='99999-999'>
						<input type='text' inputMode='numeric' required />
					</Field>

					<Field label='Endereço'>
						<input type='text' required />
					</Field>
				</div>

				<div className='grid grid-cols-[1fr_3fr] gap-4'>
					<Field label='Número'>
						<input type='text' required inputMode='numeric' />
					</Field>

					<Field label='Complemento' notRequired>
						<input type='text' required />
					</Field>
				</div>

				<div className='md:grid grid-cols-[3fr_3fr_1fr] gap-4'>
					<Field label='Bairro'>
						<input type='text' required />
					</Field>
					<Field label='Cidade'>
						<input type='text' required />
					</Field>
					<Field label='Estado'>
						<input type='text' maxLength={2} required />
					</Field>
				</div>
			</fieldset>

			<fieldset className={fieldsetStyles}>
				<legend className={legendStyles}>Contato Emergencial</legend>
				<Field label='Nome' notRequired>
					<input type='text' />
				</Field>
				<div className='grid grid-cols-2 gap-4'>
					<Field label='Telefone' notRequired>
						<input type='text' inputMode='numeric' />
					</Field>
					<Field label='Relação' notRequired>
						<input type='text' />
					</Field>
				</div>
			</fieldset>

			<Button>Salvar</Button>
		</form>
	)
}

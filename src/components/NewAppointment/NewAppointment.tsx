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
				<Field label='Nome completo' required />

				<div className='md:flex gap-4'>
					<Field label='CPF' mask='999.999.999-99' inputMode='numeric' required />
					<Field label='Data de nascimento' type='date' className='bg-transparent' required />
				</div>

				<div className='md:grid grid-cols-[2fr_1fr] gap-4'>
					<Field label='E-mail' type='email' required />
					<Field label='Telefone' mask='(99) 99999-9999' inputMode='numeric' required />
				</div>
			</fieldset>

			<fieldset className={fieldsetStyles}>
				<legend className={legendStyles}>Endereço</legend>

				<div className='md:grid grid-cols-[1fr_3fr] gap-4'>
					<Field label='CEP' mask='99999-999' inputMode='numeric' required />
					<Field label='Endereço' required />
				</div>

				<div className='grid grid-cols-[1fr_3fr] gap-4'>
					<Field label='Número' inputMode='numeric' required />
					<Field label='Complemento' />
				</div>

				<div className='md:grid grid-cols-[3fr_3fr_1fr] gap-4'>
					<Field label='Bairro' required />
					<Field label='Cidade' required />
					<Field label='Estado' required maxLength={2} />
				</div>
			</fieldset>

			<fieldset className={fieldsetStyles}>
				<legend className={legendStyles}>Contato Emergencial</legend>

				<Field label='Nome' />
				<div className='grid grid-cols-2 gap-4'>
					<Field label='Telefone' mask='(99) 99999-9999' inputMode='numeric' />
					<Field label='Relação' />
				</div>
			</fieldset>

			<Button>Salvar</Button>
		</form>
	)
}

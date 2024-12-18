import { ComponentProps } from 'react'
import InputMask from 'react-input-mask'

interface FieldProps extends ComponentProps<'input'> {
	label: string
	mask?: string
}

export function Field({ label, required, mask, inputMode, type, className, maxLength }: FieldProps) {
	function CustomInput() {
		return mask ? (
			<InputMask mask={mask} type={type} alwaysShowMask inputMode={inputMode} maxLength={maxLength} />
		) : (
			<input className={className} type={type} inputMode={inputMode} required={required} maxLength={maxLength} />
		)
	}

	return (
		<div className='w-full'>
			<div className='mb-4'>
				<label className='[&_input]:border [&_input]:border-gray-300 [&_input]:px-4 [&_input]:py-2 [&_input]:w-full focus-within:border-primary transition'>
					<div className='font-medium mb-1 text-sm'>
						{label}:{required && <span className='text-red-600'> *</span>}
					</div>
					<CustomInput />
				</label>
			</div>
		</div>
	)
}

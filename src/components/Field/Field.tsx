import { ReactNode } from 'react'
import InputMask from 'react-input-mask'

interface FieldProps {
	label: string
	children: ReactNode
	mask?: string
	notRequired?: boolean
}

export function Field({ label, notRequired, children, mask }: FieldProps) {
	return (
		<div className='w-full'>
			<div className='mb-4'>
				<label className='[&_input]:border [&_input]:border-gray-300 [&_input]:px-4 [&_input]:py-2 [&_input]:w-full focus-within:border-primary transition'>
					<div className='font-medium mb-1 text-sm'>
						{label}:{!notRequired && <span className='text-red-600'> *</span>}
					</div>
					<InputMask mask={mask} alwaysShowMask>
						{children}
					</InputMask>
				</label>
			</div>
		</div>
	)
}

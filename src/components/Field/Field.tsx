import { ComponentProps, ReactNode } from 'react'
import InputMask from 'react-input-mask'

interface FieldProps extends ComponentProps<'input'> {
	label: string
	mask?: string
	children?: ReactNode
}

export function Field({
	id,
	label,
	required,
	mask,
	inputMode,
	type,
	className,
	maxLength,
	onChange,
	value,
	children,
	autoComplete
}: FieldProps) {
	return (
		<div className='w-full'>
			<div className='mb-4'>
				<label className='transition group'>
					<div className='font-medium mb-1 text-sm'>
						{label}:{required && <span className='text-red-600'> *</span>}
					</div>
					<div className='[&>*]:border [&>*]:border-gray-300 [&>*]:px-4 [&>*]:py-2 [&>*]:w-full [&>*]:group-focus-within:border-primary'>
						{children ? (
							children
						) : mask ? (
							<InputMask
								id={id}
								mask={mask}
								type={type}
								alwaysShowMask
								inputMode={inputMode}
								maxLength={maxLength}
								onChange={onChange}
								value={value}
								autoComplete={autoComplete}
							/>
						) : (
							<input
								id={id}
								className={className}
								type={type}
								inputMode={inputMode}
								required={required}
								maxLength={maxLength}
								onChange={onChange}
								value={value}
								autoComplete={autoComplete}
							/>
						)}
					</div>
				</label>
			</div>
		</div>
	)
}

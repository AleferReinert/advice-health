import { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
	children: ReactNode
}

export function Button({ children, ...rest }: ButtonProps) {
	return (
		<button
			{...rest}
			className={`
				${rest.className} 
				${rest.disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-teal-500 focus:bg-teal-700'}
				 leading-none
				w-full justify-center transition font-medium flex items-center gap-2 rounded-default text-white p-4
				[&_svg]:size-5 md:w-auto sm:w-auto
			`}
		>
			{children}
		</button>
	)
}

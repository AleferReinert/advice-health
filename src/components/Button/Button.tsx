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
				bg-primary hover:bg-teal-500 focus:bg-teal-700 
				justify-center transition font-medium flex items-center gap-2 rounded-lg text-white p-4
				[&_svg]:size-5 md:w-auto
			`}
		>
			{children}
		</button>
	)
}

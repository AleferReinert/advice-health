import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface ButtonLinkProps extends LinkProps {
	children: ReactNode
	className?: string
}

export function ButtonLink({ children, href, className, ...rest }: ButtonLinkProps) {
	return (
		<Link
			{...rest}
			href={href}
			className={`${className ?? ''}
				bg-primary hover:bg-teal-600 focus:bg-teal-700 leading-none
				transition font-medium rounded-default text-white p-4 inline-b text-center
			`}
		>
			{children}
		</Link>
	)
}

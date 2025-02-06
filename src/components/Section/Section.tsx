import { ReactNode } from 'react'

interface SectionProps {
	title: string
	children: ReactNode
}

export function Section({ title, children }: SectionProps) {
	return (
		<section>
			<h2 className='font-extralight text-2xl border-b py-2 my-4'>{title}</h2>
			{children}
		</section>
	)
}

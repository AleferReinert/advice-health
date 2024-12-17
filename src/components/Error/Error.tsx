import Link from 'next/link'
import { ReactNode } from 'react'

interface ErrorProps {
	title?: string
	description?: ReactNode
	homepageLink?: boolean
}

export function Error({ title, description, homepageLink = false }: ErrorProps) {
	return (
		<>
			<h1 className='text-2xl font-bold'>{title || 'Oops!'}</h1>
			<p>{description || 'Parece que algo deu errado, tente atualizar a página ou volte mais tarde.'}</p>
			{homepageLink && (
				<div className='mt-3'>
					<Link href='/' className='text-blue-400 hover:underline hover:text-blue-600'>
						Voltar
					</Link>
				</div>
			)}
		</>
	)
}

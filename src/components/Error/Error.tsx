import Link from 'next/link'
import { ReactNode } from 'react'
import { Container } from '../Container/Container'

interface ErrorProps {
	title?: string
	description?: ReactNode
	homepageLink?: boolean
}

export function Error({ title, description, homepageLink = false }: ErrorProps) {
	return (
		<div>
			<Container>
				<h1 className='text-xl font-bold'>{title || 'Oops!'}</h1>
				<p>{description || 'Parece que algo deu errado, tente atualizar a página ou volte mais tarde.'}</p>
				{homepageLink && (
					<div className='mt-3'>
						<Link href='/' className='text-blue-400 hover:underline hover:text-blue-600'>
							Voltar
						</Link>
					</div>
				)}
			</Container>
		</div>
	)
}

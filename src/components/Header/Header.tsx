'use client'
import { mock } from '@/app/mock'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaUserCircle } from 'react-icons/fa'
import { Container } from '../Container/Container'

export function Header() {
	const pathname = usePathname()
	let title = mock.menu[0].title
	let description = mock.menu[0].description
	const currentMenu = mock.menu.find(item => item.url === pathname)

	if (currentMenu) {
		title = currentMenu.title
		description = currentMenu.description
	}

	return (
		<header className='py-4 border-b-teal-500 text-gray-700'>
			<Container>
				<div className='flex justify-between items-center leading-none'>
					<div>
						<h1 className='font-bold text-xl text-gray-700'>{title}</h1>
						<p>{description}</p>
					</div>
					<Link href='' className='flex flex-col gap-1 items-center'>
						<FaUserCircle size={32} role='img' />
						Alefer Reinert
					</Link>
				</div>
			</Container>
		</header>
	)
}

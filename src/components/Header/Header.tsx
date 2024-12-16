'use client'
import { mockMenu } from '@/mock/menu.mock'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaUserCircle } from 'react-icons/fa'
import { Container } from '../Container/Container'

export function Header() {
	const pathname = usePathname()
	let title = mockMenu[0].title
	let description = mockMenu[0].description
	const currentMenu = mockMenu.find(item => item.url === pathname)

	if (currentMenu) {
		title = currentMenu.title
		description = currentMenu.description
	}

	return (
		<header className='py-4 text-gray-700 border-b mb-6'>
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

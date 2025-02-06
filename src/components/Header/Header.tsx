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
		<header className='py-4 text-text border-b'>
			<Container>
				<div className='flex justify-between items-center'>
					<div>
						<h1 className='font-bold text-xl text-text mb-1'>{title}</h1>
						<p className='leading-tight'>{description}</p>
					</div>
					<Link href='' className='hidden lg:flex flex-col gap-1 items-center text-sm group'>
						<FaUserCircle size={32} role='img' className='transition group-hover:scale-95' />
						John Doe
					</Link>
				</div>
			</Container>
		</header>
	)
}

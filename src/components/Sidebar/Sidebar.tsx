'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'

export interface MenuItemProps {
	title: string
	description: string
	icon: JSX.Element
	url: string
}

interface SidebarProps {
	menu: MenuItemProps[]
}

export function Sidebar({ menu }: SidebarProps) {
	const pathname = usePathname()
	const [fullSidebar, setFullSidebar] = useState(false)
	const iconSize = 32
	const baseStyles = 'transition hover:bg-teal-500 w-full flex [&_svg]:m-4'

	return (
		<aside
			className={`${
				fullSidebar ? 'md:max-w-60' : 'md:max-w-16 '
			} bg-teal-800 overflow-hidden transition-all flex md:flex-col w-full md:sticky top-0 md:h-svh justify-between text-white`}
		>
			<div className='h-full md:grid md:grid-rows-[min-content_1fr]'>
				<button
					onClick={() => setFullSidebar(!fullSidebar)}
					title={fullSidebar ? 'Fechar menu' : 'Abrir menu'}
					className={`${baseStyles} ${fullSidebar ? 'max-w-60' : 'max-w-16'} hidden justify-end transition-all lg:flex`}
				>
					{fullSidebar ? <HiChevronDoubleLeft size={iconSize} /> : <HiChevronDoubleRight size={iconSize} />}
				</button>
				<nav className='flex w-full justify-between md:flex-col'>
					{menu.map((item, index) => (
						<Link
							key={index}
							href={item.url}
							title={item.title}
							className={`${baseStyles} ${pathname === item.url ? 'bg-primary' : ''} 
								flex justify-center md:justify-start items-center [&_svg]:text-gray-50 [&_svg]:size-8 last:mt-auto
							`}
						>
							<div>{item.icon}</div>
							<div className={`overflow-hidden whitespace-nowrap mr-4 hidden md:block`}>{item.title}</div>
						</Link>
					))}
				</nav>
			</div>
		</aside>
	)
}

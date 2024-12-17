'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'

export interface MenuItemProps {
	title: string
	description?: string
	icon: JSX.Element
	url: string
}

interface SidebarProps {
	menu: MenuItemProps[]
}

export function Sidebar({ menu }: SidebarProps) {
	const pathname = usePathname()
	const [fullSidebar, setFullSidebar] = useState(false)
	const fullSidebarStyle = fullSidebar ? '' : ''
	const iconSize = 32
	const baseStyles = 'transition hover:bg-teal-500 w-full flex [&_svg]:m-4'

	return (
		<aside
			className={`${
				fullSidebar ? 'max-w-60' : 'max-w-16'
			} bg-teal-800 overflow-hidden transition-all flex flex-col sticky top-0 h-svh justify-between text-white`}
		>
			<div className='h-full grid grid-rows-[min-content_1fr]'>
				<button
					onClick={() => setFullSidebar(!fullSidebar)}
					title={fullSidebar ? 'Fechar menu' : 'Abrir menu'}
					className={`${baseStyles} ${fullSidebar ? 'max-w-60' : 'max-w-16'} transition-all justify-end`}
				>
					{fullSidebar ? <HiChevronDoubleLeft size={iconSize} /> : <HiChevronDoubleRight size={iconSize} />}
				</button>
				<nav className='flex flex-col'>
					{menu.map((item, index) => (
						<Link
							key={index}
							href={item.url}
							title={item.title}
							className={`${baseStyles} ${pathname === item.url ? 'bg-primary' : ''} 
								flex items-center [&_svg]:text-gray-50 [&_svg]:size-8 last:mt-auto
							`}
						>
							<div>{item.icon}</div>
							<div className={`overflow-hidden whitespace-nowrap mr-4`}>{item.title}</div>
						</Link>
					))}
				</nav>
			</div>
		</aside>
	)
}

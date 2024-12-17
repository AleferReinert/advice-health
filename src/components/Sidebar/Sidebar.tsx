'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
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
	const fullSidebarStyle = fullSidebar ? '' : ''
	const iconSize = 32
	const baseStyles = 'p-4 transition hover:bg-teal-500'

	return (
		<aside
			className={`${fullSidebarStyle} bg-teal-800 flex flex-col h-min sticky top-0 h-svh justify-between text-white w-min`}
		>
			<div>
				<button onClick={() => setFullSidebar(!fullSidebar)} title='Abrir menu' className={baseStyles}>
					{fullSidebar ? <HiChevronDoubleLeft size={iconSize} /> : <HiChevronDoubleRight size={iconSize} />}
				</button>

				<nav className='flex flex-col'>
					{menu.map((item, index) => (
						<Link
							key={index}
							href={item.url}
							title={item.title}
							className={`${baseStyles} ${pathname === item.url ? 'bg-primary' : ''} 
							flex items-center [&_svg]:text-gray-50 [&_svg]:size-8
							`}
						>
							{item.icon}
						</Link>
					))}
				</nav>
			</div>
			<button className={baseStyles}>
				<AiOutlineLogout size={iconSize} />
			</button>
		</aside>
	)
}

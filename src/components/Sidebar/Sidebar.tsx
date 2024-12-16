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
	const fullSidebarStyle = fullSidebar ? '' : ''

	return (
		<aside className={`${fullSidebarStyle} bg-teal-800 flex flex-col text-white w-min`}>
			<button onClick={() => setFullSidebar(!fullSidebar)} className=' p-4 transition hover:bg-teal-500' title='Abrir menu'>
				{fullSidebar ? <HiChevronDoubleLeft size={32} /> : <HiChevronDoubleRight size={32} />}
			</button>

			<nav className='flex flex-col'>
				{menu.map((item, index) => (
					<Link
						key={index}
						href={item.url}
						title={item.title}
						className={`
							${pathname === item.url ? 'bg-primary' : ''} 
							flex items-center p-4 transition hover:bg-primary [&_svg]:text-gray-50 [&_svg]:size-8
						`}
					>
						{item.icon}
					</Link>
				))}
			</nav>
		</aside>
	)
}

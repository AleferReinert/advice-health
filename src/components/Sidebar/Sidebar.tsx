'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { IconType } from 'react-icons'
import { FiChevronsRight } from 'react-icons/fi'

export interface MenuItemProps {
	title: string
	description: string
	icon: IconType
	url: string
}

interface SidebarProps {
	menu: MenuItemProps[]
}

export function Sidebar({ menu }: SidebarProps) {
	const pathname = usePathname()
	const [fullSidebar, setFullSidebar] = useState(false)
	const iconSize = 24
	const baseStyles = 'transition hover:bg-teal-700 w-full flex [&_svg]:m-4'

	return (
		<aside
			className={`${fullSidebar ? 'md:max-w-60' : 'md:max-w-14'} 
				bg-teal-800 overflow-hidden transition-all flex md:flex-col w-full md:sticky top-0 md:h-svh justify-between text-white`}
		>
			<div className='size-full'>
				<nav className='flex w-full h-full justify-between md:flex-col'>
					<button
						onClick={() => setFullSidebar(!fullSidebar)}
						title={fullSidebar ? 'Recolher menu' : 'Expandir menu'}
						className={`${baseStyles} transition-all relative h-14 hidden lg:flex`}
					>
						<FiChevronsRight
							size={iconSize}
							className={`${fullSidebar ? 'rotate-180 left-[152px]' : 'left-0'} absolute transition-[left]`}
						/>
					</button>
					{menu.map((item, index) => {
						const activeStyles = pathname === item.url ? 'bg-primary hover:bg-primary' : ''

						return (
							<Link
								key={index}
								href={item.url}
								title={fullSidebar ? '' : item.title}
								className={`${baseStyles} ${activeStyles} 
								flex justify-center md:justify-start items-center last:mt-auto
							`}
							>
								<div>
									{item.icon({ 'size': iconSize, 'role': 'img', 'aria-hidden': true, 'className': 'text-secondary' })}
								</div>
								<div className={`overflow-hidden whitespace-nowrap mr-4 hidden md:block`}>{item.title}</div>
							</Link>
						)
					})}
				</nav>
			</div>
		</aside>
	)
}

import { mockMenu } from '@/mock/menu.mock'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'

interface LayoutProps {
	children: ReactNode
}

export function Layout({ children }: LayoutProps) {
	return (
		<>
			<Toaster
				richColors
				toastOptions={{
					classNames: {
						toast: 'text-base rounded-none'
					}
				}}
			/>
			<div className='md:grid md:grid-cols-[min-content_1fr] min-h-full'>
				<Sidebar menu={mockMenu} />
				<div>
					<Header />
					<main className='p-4 lg:p-8'>{children}</main>
				</div>
			</div>
		</>
	)
}

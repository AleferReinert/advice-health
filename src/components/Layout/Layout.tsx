import { mockMenu } from '@/mock/menu.mock'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'
import { Container } from '../Container/Container'
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
				<div className='flex flex-col gap-4 lg:gap-8'>
					<Header />
					<Container>
						<main className='pb-8'>{children}</main>
					</Container>
				</div>
			</div>
		</>
	)
}

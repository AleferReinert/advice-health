'use client'
import { store } from '@/app/store'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { Toaster } from 'sonner'
import { mockMenu } from '../../mock/menu.mock'
import { Container } from '../Container/Container'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'

interface LayoutProps {
	children: ReactNode
}

export function Layout({ children }: LayoutProps) {
	return (
		<Provider store={store}>
			<Toaster
				richColors
				visibleToasts={1}
				toastOptions={{
					classNames: {
						toast: 'text-base rounded-default p-5',
						closeButton: 'relative transform-none order-last ml-auto [&>svg]:size-6'
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
		</Provider>
	)
}

import { mock } from '@/app/mock'
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
			<div className='grid grid-cols-1 md:grid-cols-[min-content_1fr] min-h-full'>
				<Sidebar menu={mock.menu} />
				<div>
					<Header />
					<main>
						<Container>{children}</Container>
					</main>
				</div>
			</div>
		</>
	)
}

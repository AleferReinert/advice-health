import { Layout } from '@/components/Layout/Layout'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-poppins'
})

export async function generateMetadata(): Promise<Metadata | null> {
	return {
		title: 'Dashboard - AdviceHealth'
	}
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='pt-br'>
			<head>
				<meta name='theme-color' content='#041634' />
			</head>
			<body className={`${poppins.variable} bg-gray-50 text-gray-600 h-svh`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}


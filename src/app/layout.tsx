import { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import tailwindcolors from 'tailwindcss/colors'
import { Layout } from '../components/Layout/Layout'
import './globals.css'

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-poppins'
})

const metaTitle = 'AdviceHealth'
const metaDescription = 'Gerenciamento de consultório médico.'
const metaSocialSharing = '/social-sharing.webp'

export async function generateMetadata(): Promise<Metadata | null> {
	return {
		title: {
			default: 'AdviceHealth - Área de trabalho',
			template: 'AdviceHealth - %s'
		},
		description: metaDescription,
		openGraph: {
			title: metaTitle,
			description: metaDescription,
			images: metaSocialSharing,
			siteName: metaTitle,
			type: 'website',
			url: 'https://advicehealth.vercel.app'
		},
		twitter: {
			card: 'summary_large_image',
			title: metaTitle,
			description: metaDescription,
			images: metaSocialSharing
		}
	}
}

export const viewport: Viewport = {
	themeColor: tailwindcolors.teal[600],
	initialScale: 1,
	width: 'device-width'
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='pt-BR'>
			<body className={`${poppins.className} bg-secondary text-text h-svh`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}


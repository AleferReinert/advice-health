import { Layout } from '@/components/Layout/Layout'
import { mockMenu } from '@/mock/menu.mock'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import tailwindcolors from 'tailwindcss/colors'
import './globals.css'

const poppins = Poppins({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-poppins'
})

const metaTitle = 'AdviceHealth'
const metaDescription = 'Gerenciamento de consultório médico.'
const metaSocialSharing = '/social-sharing.webp'

export async function generateMetadata(): Promise<Metadata | null> {
	return {
		title: `AdviceHealth - ${mockMenu[0].title}`
	}
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='pt-br'>
			<head>
				<meta name='theme-color' content={tailwindcolors.teal[600]} />

				{/* Visualização de compartilhamento em redes sociais */}
				<meta property='twitter:title' content={metaTitle} />
				<meta property='twitter:description' content={metaDescription} />
				<meta property='twitter:image' content={metaSocialSharing} />
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='og:title' content={metaTitle} />
				<meta property='og:site_name' content={metaTitle} />
				<meta property='og:description' content={metaDescription} />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://advicehealth.vercel.app' />
				<meta property='og:image' content={metaSocialSharing} />
				<meta property='og:image:alt' content={metaTitle} />
				<meta property='og:image:width' content='1200' />
				<meta property='og:image:height' content='630' />
			</head>
			<body className={`${poppins.className} bg-gray-100 text-gray-600 h-svh`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}


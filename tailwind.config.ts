import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'
import { Config } from 'tailwindcss/types/config'

export default {
	content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				primary: colors.teal[700],
				secondary: colors.gray[50],
				text: colors.gray[700]
			},
			borderRadius: {
				default: defaultTheme.borderRadius.lg
			},
			boxShadow: {
				default: defaultTheme.boxShadow.md
			}
		}
	},
	plugins: []
} satisfies Config


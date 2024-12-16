import colors from 'tailwindcss/colors'
import { Config } from 'tailwindcss/types/config'

export default {
	content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				primary: colors.teal[600],
				secondary: '#041634'
			}
		}
	},
	plugins: []
} satisfies Config


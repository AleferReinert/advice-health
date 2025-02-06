import { ReactNode } from 'react'

interface HeadingProps {
	children: ReactNode
	align?: 'left' | 'center' | 'right'
	theme?: 'section' | 'box'
}

export function Heading({ children, align, theme = 'section' }: HeadingProps) {
	const alignStyles = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : ''
	const themeBox = 'text-text text-lg font-medium p-4 pb-0'
	const themeSection = 'font-extralight text-2xl border-b py-2 my-4'
	const themeStyles = theme === 'box' ? themeBox : themeSection

	return <h2 className={`${alignStyles} ${themeStyles} leading-none`}>{children}</h2>
}

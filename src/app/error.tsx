'use client'
import { useEffect } from 'react'
import { Error } from '../components/Error/Error'

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		console.error(`src/app/error.tsx: ${error}`)
	}, [error])

	return <Error />
}

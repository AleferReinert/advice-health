import { formatDate } from './formatDate'

export const getDateOffset = (offset: number) => {
	const today = new Date()
	const date = new Date(today)
	date.setDate(today.getDate() + offset)
	return formatDate(date)
}

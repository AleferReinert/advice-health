export function formatPhoneNumber(number: string) {
	const digitsOnly = number.replace(/\D/g, '')

	if (!digitsOnly.startsWith('55') || (digitsOnly.length !== 13 && digitsOnly.length !== 12)) {
		throw new Error('Número inválido. Deve conter DDI 55 e total de 12 ou 13 dígitos.')
	}

	const localNumber = digitsOnly.slice(2)

	const ddd = localNumber.slice(0, 2)
	const phone = localNumber.slice(2)

	const hasNineDigit = phone.length === 9
	const part1 = hasNineDigit ? phone.slice(0, 5) : phone.slice(0, 4)
	const part2 = phone.slice(-4)

	return `(${ddd}) ${part1}-${part2}`
}

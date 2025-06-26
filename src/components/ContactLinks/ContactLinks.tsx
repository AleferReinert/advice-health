import { FaRegEnvelope, FaWhatsapp } from 'react-icons/fa6'

interface ContactLinksProps {
	email: string
	phone: string
}

export const ContactLinks = ({ email, phone }: ContactLinksProps) => {
	return (
		<div className='flex gap-4 [&_svg]:size-5 p-4 pt-2'>
			<a title='Enviar e-mail' href={`mailto:${email}`} className='transition hover:text-primary'>
				<FaRegEnvelope role='img' aria-hidden />
			</a>
			<a
				title='Conversar no WhatsApp'
				href={`https://wa.me/55${phone.replace(/[ ()-]/g, '')}`}
				className='transition hover:text-primary'
			>
				<FaWhatsapp role='img' aria-hidden />
			</a>
		</div>
	)
}

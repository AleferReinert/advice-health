import { MenuItemProps } from '@/components/Sidebar/Sidebar'
import { AiOutlineCalendar, AiOutlineHome, AiOutlineLogout, AiOutlineTeam } from 'react-icons/ai'

export const mockMenu: MenuItemProps[] = [
	{
		title: 'Área de trabalho',
		icon: <AiOutlineHome role='img' />,
		url: '/',
		description: 'O que você tem para hoje.'
	},
	{
		title: 'Agenda médica',
		icon: <AiOutlineCalendar role='img' />,
		url: '/medicos',
		description: 'Compromissos de cada profissional.'
	},
	{
		title: 'Consulta de pacientes',
		icon: <AiOutlineTeam role='img' />,
		url: '/pacientes',
		description: 'Gestão de pacientes.'
	},
	{
		title: 'Sair',
		icon: <AiOutlineLogout role='img' />,
		url: '/logout',
		description: ''
	}
]

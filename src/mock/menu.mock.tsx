import { MenuItemProps } from '@/components/Sidebar/Sidebar'
import { AiOutlineCalendar, AiOutlineHome, AiOutlineLogout, AiOutlineTeam } from 'react-icons/ai'

export const mockMenu: MenuItemProps[] = [
	{
		title: 'Área de trabalho',
		icon: <AiOutlineHome role='img' />,
		url: '/',
		description: 'Visão gerencial do consultório para hoje.'
	},
	{
		title: 'Agenda Médica',
		icon: <AiOutlineCalendar role='img' />,
		url: '/medicos',
		description: 'Gestão dos agendamentos e disponibilidade dos médicos no consultório.'
	},
	{
		title: 'Consulta de Pacientes',
		icon: <AiOutlineTeam role='img' />,
		url: '/pacientes',
		description: 'Visualização e edição de dados de pacientes, agendamentos e cobranças.'
	},
	{
		title: 'Sair',
		icon: <AiOutlineLogout role='img' />,
		url: '/logout',
		description: ''
	}
]

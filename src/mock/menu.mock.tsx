import { FiLogOut } from 'react-icons/fi'

import { MenuItemProps } from '@/components/Sidebar/Sidebar'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { FaCalendar, FaHouse, FaUserDoctor, FaUserGroup } from 'react-icons/fa6'

export const mockMenu: MenuItemProps[] = [
	{
		title: 'Área de trabalho',
		icon: FaHouse,
		url: '/',
		description: `Cronograma para hoje, ${format(new Date(), "d 'de' MMMM 'de' yyyy", { locale: ptBR })}.`
	},
	{
		title: 'Consultas',
		icon: FaCalendar,
		url: '/consultas',
		description: 'Agendamento de consultas'
	},
	{
		title: 'Médicos',
		icon: FaUserDoctor,
		url: '/medicos',
		description: 'Gestão de médicos.'
	},
	{
		title: 'Pacientes',
		icon: FaUserGroup,
		url: '/pacientes',
		description: 'Gestão de pacientes.'
	},
	{
		title: 'Sair',
		icon: FiLogOut,
		url: '/',
		description: ''
	}
]

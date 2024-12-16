import { DoctorProps } from '@/components/DoctorList/DoctorList'
import { MenuItemProps } from '@/components/Sidebar/Sidebar'
import { add, format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { AiOutlineCalendar, AiOutlineCheckCircle, AiOutlineHome } from 'react-icons/ai'
import { AgendaProps } from './page'

const currentDate = format(new Date(), 'yyyy-MM-dd', { locale: ptBR })
const tomorrow = format(add(new Date(), { days: 1 }), 'yyyy-MM-dd', { locale: ptBR })

export const mock: { menu: MenuItemProps[]; agenda: { [key: string]: AgendaProps } } = {
	menu: [
		{ title: 'Área de trabalho', icon: <AiOutlineHome role='img' />, url: '/', description: 'Visão gerencial do consultório.' },
		{
			title: 'Agenda Médica',
			icon: <AiOutlineCalendar role='img' />,
			url: '/medicos',
			description: 'Gestão dos agendamentos e disponibilidade dos médicos no consultório.'
		},
		{
			title: 'Consulta de Pacientes',
			icon: <AiOutlineCheckCircle role='img' />,
			url: '/pacientes',
			description: 'Visualização e edição de dados de pacientes, agendamentos e cobranças.'
		}
	],
	agenda: {
		[currentDate]: {
			summary: {
				appointments: 12,
				patientsAttended: 2,
				revenue: 'R$ 596,00'
			},
			appointments: [
				{ time: '08:00', patientId: '1', doctorId: '1' },
				{ time: '10:00', patientId: '2', doctorId: '4' }
			],
			reminders: [
				{ text: 'Revisar pagamentos pendentes', status: 'Concluído', priority: 'Baixa', isCompleted: true },
				{ text: 'Atualizar horários dos médicos', status: 'Atrasado', priority: 'Alta', isCompleted: false }
			]
		},
		[tomorrow]: {
			summary: {
				appointments: 24,
				patientsAttended: 7,
				revenue: 'R$ 1.274,00'
			},
			appointments: [
				{ time: '09:00', patientId: '2', doctorId: '2' },
				{ time: '11:30', patientId: '3', doctorId: '2' }
			],
			reminders: [
				{ text: 'Enviar relatório mensal ao administrador', status: 'Pendente', priority: 'Alta', isCompleted: false },
				{ text: 'Checar estoque de material de escritório', status: 'Pendente', priority: 'Média', isCompleted: false }
			]
		}
	}
}

export const mockPatients = [
	{
		id: '1',
		name: 'João Silva'
	},
	{
		id: '2',
		name: 'Maria Clara'
	},
	{
		id: '3',
		name: 'Karine Gaion'
	}
]

export const mockDoctors: DoctorProps[] = [
	{
		name: 'Dr. Ana Souza',
		crm: '143256',
		specialty: 'Cardiologia',
		photo: '/doctors/ana-souza-143256.webp'
	},
	{
		name: 'Dr. João Lima',
		crm: '657328',
		specialty: 'Pediatria',
		photo: '/doctors/joao-lima-657328.webp'
	},
	{
		name: 'Dr. Carla Oliveira',
		crm: '789012',
		specialty: 'Ortopedia',
		photo: '/doctors/carla-oliveira-789012.webp'
	},
	{
		name: 'Dr. Marcos Pereira',
		crm: '351647',
		specialty: 'Dermatologia',
		photo: '/doctors/marcos-pereira-351647.webp'
	}
]

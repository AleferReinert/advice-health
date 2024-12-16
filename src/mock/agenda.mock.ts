import { AgendaProps } from '@/app/page'
import { add, format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

const currentDate = format(new Date(), 'yyyy-MM-dd', { locale: ptBR })
const tomorrow = format(add(new Date(), { days: 1 }), 'yyyy-MM-dd', { locale: ptBR })

export const mockAgenda: { [key: string]: AgendaProps } = {
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

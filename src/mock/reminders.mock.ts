import { ReminderProps } from '@/components/Reminders/Reminders'

export const mockReminders: ReminderProps[] = [
	{
		date: new Date(2024, 11, 20, 10, 30),
		text: 'Revisar pagamentos pendentes',
		status: 'Concluído',
		priority: 'Baixa',
		isCompleted: true
	},
	{
		date: new Date(2024, 11, 20, 10, 30),
		text: 'Atualizar horários dos médicos',
		status: 'Atrasado',
		priority: 'Alta',
		isCompleted: false
	},
	{
		date: new Date(2024, 11, 20, 10, 30),
		text: 'Enviar relatório mensal ao administrador',
		status: 'Pendente',
		priority: 'Alta',
		isCompleted: false
	},
	{
		date: new Date(2024, 11, 20, 10, 30),
		text: 'Checar estoque de material de escritório',
		status: 'Pendente',
		priority: 'Média',
		isCompleted: false
	}
]

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

export const formatDate = (date: string | Date) => format(new Date(date), 'yyyy-MM-dd', { locale: ptBR })

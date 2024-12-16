import { PatientProps } from '@/components/Agenda/Agenda'

export const mockPatients: PatientProps[] = [
	{
		id: '1',
		fullName: 'João Silva',
		dateOfBirth: '1985-03-25',
		cpf: '123.456.789-01',
		phone: '(11) 91234-5678',
		email: 'joao.silva@example.com',
		gender: 'male',
		address: {
			postalCode: '01001-000',
			street: 'Rua das Flores',
			number: '123',
			complement: 'Apto 45',
			district: 'Centro',
			city: 'São Paulo',
			state: 'SP'
		},
		emergencyContact: {
			name: 'Maria Silva',
			phone: '(11) 91234-5679',
			relation: 'Esposa'
		},
		registrationDate: '2024-12-15'
	},
	{
		id: '2',
		fullName: 'Maria Clara',
		dateOfBirth: '1990-07-14',
		cpf: '987.654.321-00',
		phone: '(21) 92345-6789',
		email: 'maria.clara@example.com',
		gender: 'female',
		address: {
			postalCode: '22011-010',
			street: 'Avenida Atlântica',
			number: '456',
			complement: 'Cobertura',
			district: 'Copacabana',
			city: 'Rio de Janeiro',
			state: 'RJ'
		},
		emergencyContact: {
			name: 'João Clara',
			phone: '(21) 91234-5678',
			relation: 'Marido'
		},
		registrationDate: '2024-12-15'
	},
	{
		id: '3',
		fullName: 'Karine Gaion',
		dateOfBirth: '1995-05-03',
		cpf: '321.654.987-22',
		phone: '(31) 93456-7890',
		email: 'karine.gaion@example.com',
		gender: 'female',
		address: {
			postalCode: '30130-010',
			street: 'Rua da Bahia',
			number: '789',
			complement: '',
			district: 'Funcionários',
			city: 'Belo Horizonte',
			state: 'MG'
		},
		emergencyContact: {
			name: 'Carlos Gaion',
			phone: '(31) 94321-0987',
			relation: 'Irmão'
		},
		registrationDate: '2024-12-15'
	},
	{
		id: '4',
		fullName: 'Lucas Oliveira',
		dateOfBirth: '2000-01-10',
		cpf: '654.321.987-44',
		phone: '(41) 99876-5432',
		email: 'lucas.oliveira@example.com',
		gender: 'male',
		address: {
			postalCode: '80010-180',
			street: 'Rua XV de Novembro',
			number: '101',
			complement: '',
			district: 'Centro',
			city: 'Curitiba',
			state: 'PR'
		},
		emergencyContact: {
			name: 'Ana Oliveira',
			phone: '(41) 99876-5431',
			relation: 'Mãe'
		},
		registrationDate: '2024-12-15'
	},
	{
		id: '5',
		fullName: 'Fernanda Costa',
		dateOfBirth: '1988-09-12',
		cpf: '741.852.963-11',
		phone: '(61) 91234-5678',
		email: 'fernanda.costa@example.com',
		gender: 'female',
		address: {
			postalCode: '70070-010',
			street: 'Esplanada dos Ministérios',
			number: '200',
			complement: 'Sala 20',
			district: 'Asa Norte',
			city: 'Brasília',
			state: 'DF'
		},
		emergencyContact: {
			name: 'Clara Costa',
			phone: '(61) 94321-5678',
			relation: 'Filha'
		},
		registrationDate: '2024-12-15'
	},
	{
		id: '6',
		fullName: 'Ricardo Almeida',
		dateOfBirth: '1980-06-08',
		cpf: '852.963.741-99',
		phone: '(71) 98765-4321',
		email: 'ricardo.almeida@example.com',
		gender: 'male',
		address: {
			postalCode: '40020-210',
			street: 'Rua Chile',
			number: '77',
			complement: '',
			district: 'Pelourinho',
			city: 'Salvador',
			state: 'BA'
		},
		emergencyContact: {
			name: 'Mariana Almeida',
			phone: '(71) 91234-5678',
			relation: 'Esposa'
		},
		registrationDate: '2024-12-15'
	},
	{
		id: '7',
		fullName: 'Gabriela Rocha',
		dateOfBirth: '1993-11-15',
		cpf: '963.258.741-33',
		phone: '(81) 94321-0987',
		email: 'gabriela.rocha@example.com',
		gender: 'female',
		address: {
			postalCode: '50030-140',
			street: 'Avenida Conde da Boa Vista',
			number: '55',
			complement: 'Bloco B',
			district: 'Boa Vista',
			city: 'Recife',
			state: 'PE'
		},
		emergencyContact: {
			name: 'Carlos Rocha',
			phone: '(81) 94321-0986',
			relation: 'Pai'
		},
		registrationDate: '2024-12-15'
	},
	{
		id: '8',
		fullName: 'Pedro Henrique',
		dateOfBirth: '1999-02-20',
		cpf: '753.159.846-77',
		phone: '(91) 91234-0987',
		email: 'pedro.henrique@example.com',
		gender: 'male',
		address: {
			postalCode: '66017-170',
			street: 'Avenida Nazaré',
			number: '999',
			complement: '',
			district: 'Cidade Velha',
			city: 'Belém',
			state: 'PA'
		},
		emergencyContact: {
			name: 'Helena Henrique',
			phone: '(91) 98765-4321',
			relation: 'Mãe'
		},
		registrationDate: '2024-12-15'
	},
	{
		id: '9',
		fullName: 'Amanda Freitas',
		dateOfBirth: '1992-08-25',
		cpf: '159.753.486-22',
		phone: '(62) 91234-5678',
		email: 'amanda.freitas@example.com',
		gender: 'female',
		address: {
			postalCode: '74083-215',
			street: 'Avenida T-63',
			number: '44',
			complement: '',
			district: 'Setor Bueno',
			city: 'Goiânia',
			state: 'GO'
		},
		emergencyContact: {
			name: 'Lucas Freitas',
			phone: '(62) 98765-4321',
			relation: 'Irmão'
		},
		registrationDate: '2024-12-15'
	},
	{
		id: '10',
		fullName: 'Victor Souza',
		dateOfBirth: '1987-04-12',
		cpf: '951.357.456-88',
		phone: '(51) 91234-5678',
		email: 'victor.souza@example.com',
		gender: 'male',
		address: {
			postalCode: '90010-280',
			street: 'Rua dos Andradas',
			number: '500',
			complement: 'Loja 2',
			district: 'Centro Histórico',
			city: 'Porto Alegre',
			state: 'RS'
		},
		emergencyContact: {
			name: 'Clara Souza',
			phone: '(51) 94321-6789',
			relation: 'Esposa'
		},
		registrationDate: '2024-12-15'
	}
]

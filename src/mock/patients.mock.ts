import { PatientState } from '@/app/features/patients/patientsSlice'

export const mockPatients: PatientState[] = [
	{
		id: '1',
		fullName: 'Constantino Alvarenga',
		slug: 'constantino-alvarenga',
		dateOfBirth: '1985-03-25',
		cpf: '123.456.789-01',
		phone: '5511912345678',
		email: 'constantino.alvarenga@gmail.com',
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
			fullName: 'Maria Alvarenga',
			phone: '5511912345679',
			relation: 'Esposa'
		},
		registrationDate: '2024-12-15'
	},
	{
		id: '2',
		fullName: 'Maria Clara',
		slug: 'maria-clara',
		dateOfBirth: '1990-07-14',
		cpf: '987.654.321-00',
		phone: '5521923456789',
		email: 'maria.clara@gmail.com',
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
			fullName: 'João Clara',
			phone: '5521912345678',
			relation: 'Marido'
		},
		registrationDate: '2024-12-15'
	},
	{
		id: '3',
		fullName: 'Karine Gaion',
		slug: 'karine-gaion',
		dateOfBirth: '1995-05-03',
		cpf: '321.654.987-22',
		phone: '5531934567890',
		email: 'karine.gaion@gmail.com',
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
			fullName: 'Carlos Gaion',
			phone: '5531943210987',
			relation: 'Irmão'
		},
		registrationDate: '2024-12-15'
	},
	{
		id: '4',
		fullName: 'Lucas Oliveira',
		slug: 'lucas-oliveira',
		dateOfBirth: '2000-01-10',
		cpf: '654.321.987-44',
		phone: '5541998765432',
		email: 'lucas.oliveira@gmail.com',
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
			fullName: 'Ana Oliveira',
			phone: '5541998765431',
			relation: 'Mãe'
		},
		registrationDate: '2024-12-15'
	},
	{
		id: '5',
		fullName: 'Fernanda Costa',
		slug: 'fernanda-costa',
		dateOfBirth: '1988-09-12',
		cpf: '741.852.963-11',
		phone: '5561912345678',
		email: 'fernanda.costa@gmail.com',
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
			fullName: 'Clara Costa',
			phone: '5561943215678',
			relation: 'Filha'
		},
		registrationDate: '2024-12-15'
	},
	{
		id: '6',
		fullName: 'Ricardo Almeida',
		slug: 'ricardo-almeida',
		dateOfBirth: '1980-06-08',
		cpf: '852.963.741-99',
		phone: '5571987654321',
		email: 'ricardo.almeida@gmail.com',
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
			fullName: 'Mariana Almeida',
			phone: '5571912345678',
			relation: 'Esposa'
		},
		registrationDate: '2024-12-15'
	},
	{
		id: '7',
		fullName: 'Gabriela Rocha',
		slug: 'gabriela-rocha',
		dateOfBirth: '1993-11-15',
		cpf: '963.258.741-33',
		phone: '5581943210987',
		email: 'gabriela.rocha@gmail.com',
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
			fullName: 'Carlos Rocha',
			phone: '5581943210986',
			relation: 'Pai'
		},
		registrationDate: '2024-12-15'
	},
	{
		id: '8',
		fullName: 'Pedro Henrique',
		slug: 'pedro-henrique',
		dateOfBirth: '1999-02-20',
		cpf: '753.159.846-77',
		phone: '5591912340987',
		email: 'pedro.henrique@gmail.com',
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
			fullName: 'Helena Henrique',
			phone: '5591987654321',
			relation: 'Mãe'
		},
		registrationDate: '2024-12-15'
	},
	{
		id: '9',
		fullName: 'Amanda Freitas',
		slug: 'amanda-freitas',
		dateOfBirth: '1992-08-25',
		cpf: '159.753.486-22',
		phone: '5562912345678',
		email: 'amanda.freitas@gmail.com',
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
			fullName: 'Lucas Freitas',
			phone: '5562987654321',
			relation: 'Irmão'
		},
		registrationDate: '2024-12-15'
	},
	{
		id: '10',
		fullName: 'Victor Souza',
		slug: 'victor-souza',
		dateOfBirth: '1987-04-12',
		cpf: '951.357.456-88',
		phone: '5551912345678',
		email: 'victor.souza@gmail.com',
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
			fullName: 'Clara Souza',
			phone: '5551943216789',
			relation: 'Esposa'
		},
		registrationDate: '2024-12-15'
	},
	{
		id: '11',
		fullName: 'Alexandre de Souza Silva',
		slug: 'alexandre-de-souza-silva',
		dateOfBirth: '1990-08-25',
		cpf: '123.456.789-01',
		phone: '5551912345678',
		email: 'alexandre.souza@gmail.com',
		gender: 'male',
		address: {
			postalCode: '90010-280',
			street: 'Avenida Brasil',
			number: '1020',
			complement: 'Apto 402',
			district: 'Centro',
			city: 'Porto Alegre',
			state: 'RS'
		},
		emergencyContact: {
			fullName: 'Maria Silva Souza',
			phone: '5551923456789',
			relation: 'Mãe'
		},
		registrationDate: '2024-11-01'
	},
	{
		id: '12',
		fullName: 'Maria Eduarda Pereira dos Santos',
		slug: 'maria-eduarda-pereira-dos-santos',
		dateOfBirth: '1995-12-30',
		cpf: '234.567.890-12',
		phone: '5551987654321',
		email: 'mariaeduarda.pereira@gmail.com',
		gender: 'female',
		address: {
			postalCode: '90210-123',
			street: 'Rua Santa Catarina',
			number: '315',
			complement: 'Casa 3',
			district: 'Vila Nova',
			city: 'São Paulo',
			state: 'SP'
		},
		emergencyContact: {
			fullName: 'José Santos Pereira',
			phone: '5511998765432',
			relation: 'Pai'
		},
		registrationDate: '2024-12-10'
	},
	{
		id: '13',
		fullName: 'João Antônio Barbosa da Silva',
		slug: 'joao-antonio-barbosa-da-silva',
		dateOfBirth: '1982-06-14',
		cpf: '345.678.901-23',
		phone: '5551976543210',
		email: 'joao.barbosa@gmail.com',
		gender: 'male',
		address: {
			postalCode: '90040-100',
			street: 'Rua Sete de Setembro',
			number: '156',
			complement: 'Sala 5',
			district: 'Centro Histórico',
			city: 'Porto Alegre',
			state: 'RS'
		},
		emergencyContact: {
			fullName: 'Ana Carla Barbosa',
			phone: '5551968743210',
			relation: 'Irmã'
		},
		registrationDate: '2024-10-20'
	},
	{
		id: '14',
		fullName: 'Gabriela Cristina Oliveira dos Reis',
		slug: 'gabriela-cristina-oliveira-dos-reis',
		dateOfBirth: '1992-03-18',
		cpf: '456.789.012-34',
		phone: '5551923456789',
		email: 'gabriela.oliveira@gmail.com',
		gender: 'female',
		address: {
			postalCode: '90510-250',
			street: 'Avenida Ipiranga',
			number: '420',
			complement: 'Bloco B, Apto 305',
			district: 'Jardim Botânico',
			city: 'Porto Alegre',
			state: 'RS'
		},
		emergencyContact: {
			fullName: 'Carlos Oliveira',
			phone: '5551961234567',
			relation: 'Pai'
		},
		registrationDate: '2024-09-05'
	},
	{
		id: '15',
		fullName: 'Francisco das Chagas Oliveira Pereira',
		slug: 'francisco-das-chagas-oliveira-pereira',
		dateOfBirth: '1988-11-02',
		cpf: '567.890.123-45',
		phone: '5551934567890',
		email: 'francisco.pereira@gmail.com',
		gender: 'male',
		address: {
			postalCode: '90020-300',
			street: 'Rua dos Andradas',
			number: '320',
			complement: 'Loja 1',
			district: 'Centro Histórico',
			city: 'Porto Alegre',
			state: 'RS'
		},
		emergencyContact: {
			fullName: 'Clarice Pereira Oliveira',
			phone: '5551922345678',
			relation: 'Esposa'
		},
		registrationDate: '2024-08-18'
	}
]

import { DoctorState } from '@/app/features/doctors/doctorsSlice'

export const mockDoctors: DoctorState[] = [
	{
		id: '1',
		createdAt: '2023-01-10T08:00:00Z',
		slug: 'joao-silva',
		personalInfo: {
			fullName: 'João Silva',
			dateOfBirth: '1985-05-15',
			cpf: '123.456.789-00',
			gender: 'male',
			profilePictureUrl: '/doctors/marcos-pereira-351647.webp',
			phone: '5547987654321',
			email: 'joao.silva@example.com'
		},
		professionalInfo: {
			crm: '123456-SP',
			specialties: ['Cardiologista'],
			phone: '5547983255344',
			email: 'joao.silva@clinic.com'
		},
		address: {
			postalCode: '12345-678',
			street: 'Rua da Saúde',
			number: '100',
			complement: 'Sala 10',
			district: 'Centro',
			city: 'São Paulo',
			state: 'SP'
		},
		systemAccess: {
			email: 'joao.silva@example.com',
			passwordHash: 'hashedpassword1'
		}
	},
	{
		id: '2',
		createdAt: '2023-02-15T09:30:00Z',
		slug: 'maria-oliveira',
		personalInfo: {
			fullName: 'Maria Oliveira',
			dateOfBirth: '1990-07-20',
			cpf: '987.654.321-00',
			gender: 'female',
			profilePictureUrl: '/doctors/carla-oliveira-789012.webp',
			phone: '5547987654322',
			email: 'maria.oliveira@example.com'
		},
		professionalInfo: {
			crm: '654321-RJ',
			specialties: ['Pediatra'],
			phone: '5547911563821',
			email: 'maria.oliveira@clinic.com'
		},
		address: {
			postalCode: '23456-789',
			street: 'Avenida das Crianças',
			number: '150',
			complement: 'Consultório 2',
			district: 'Zona Norte',
			city: 'Rio de Janeiro',
			state: 'RJ'
		},
		systemAccess: {
			email: 'maria.oliveira@example.com',
			passwordHash: 'hashedpassword2'
		}
	},
	{
		id: '3',
		createdAt: '2023-03-25T14:45:00Z',
		slug: 'carlos-almeida-dos-santos',
		personalInfo: {
			fullName: 'Carlos Almeida dos Santos',
			dateOfBirth: '1978-11-30',
			cpf: '111.222.333-44',
			gender: 'male',
			profilePictureUrl: '/doctors/joao-lima-657328.webp',
			phone: '5547987654323',
			email: 'carlos.almeida@example.com'
		},
		professionalInfo: {
			crm: '789456-MG',
			specialties: ['Ortopedista'],
			phone: '5547997554221',
			email: 'carlos.almeida@clinic.com'
		},
		address: {
			postalCode: '34567-890',
			street: 'Rua dos Médicos',
			number: '200',
			complement: 'Consultório 4',
			district: 'Jardim América',
			city: 'Belo Horizonte',
			state: 'MG'
		},
		systemAccess: {
			email: 'carlos.almeida@example.com',
			passwordHash: 'hashedpassword3'
		}
	},
	{
		id: '4',
		createdAt: '2023-04-10T10:00:00Z',
		slug: 'paulo-costa-tavarez-de-souza',
		personalInfo: {
			fullName: 'Paulo Costa Tavarez de Souza',
			dateOfBirth: '1982-02-10',
			cpf: '555.666.777-88',
			gender: 'male',
			profilePictureUrl: '/doctors/joao-lima-657328.webp',
			phone: '5547987654324',
			email: 'paulo.costa@example.com'
		},
		professionalInfo: {
			crm: '123789-BA',
			specialties: ['Neurologista'],
			phone: '5547922651125',
			email: 'paulo.costa@clinic.com'
		},
		address: {
			postalCode: '45678-901',
			street: 'Avenida Central',
			number: '300',
			complement: 'Sala 12',
			district: 'Vila Nova',
			city: 'Salvador',
			state: 'BA'
		},
		systemAccess: {
			email: 'paulo.costa@example.com',
			passwordHash: 'hashedpassword4'
		}
	},
	{
		id: '5',
		createdAt: '2023-05-05T11:15:00Z',
		slug: 'ana-souza',
		personalInfo: {
			fullName: 'Ana Souza',
			dateOfBirth: '1992-08-25',
			cpf: '222.333.444-55',
			gender: 'female',
			profilePictureUrl: '/doctors/ana-souza-143256.webp',
			phone: '5547987654325',
			email: 'ana.souza@example.com'
		},
		professionalInfo: {
			crm: '987654-ES',
			specialties: ['Ginecologista'],
			phone: '5547961653321',
			email: 'ana.souza@clinic.com'
		},
		address: {
			postalCode: '56789-012',
			street: 'Rua das Flores',
			number: '400',
			complement: 'Consultório 5',
			district: 'Centro',
			city: 'Vitória',
			state: 'ES'
		},
		systemAccess: {
			email: 'ana.souza@example.com',
			passwordHash: 'hashedpassword5'
		}
	},
	{
		id: '6',
		createdAt: '2023-06-20T15:30:00Z',
		slug: 'rafael-martins',
		personalInfo: {
			fullName: 'Rafael Martins',
			dateOfBirth: '1980-01-05',
			cpf: '333.444.555-66',
			gender: 'male',
			profilePictureUrl: '/doctors/marcos-pereira-351647.webp',
			phone: '5547987654326',
			email: 'rafael.martins@example.com'
		},
		professionalInfo: {
			crm: '246801-SP',
			specialties: ['Dermatologista'],
			phone: '5547942678322',
			email: 'rafael.martins@clinic.com'
		},
		address: {
			postalCode: '67890-123',
			street: 'Rua do Sol',
			number: '500',
			complement: 'Consultório 6',
			district: 'Vila Progresso',
			city: 'São Paulo',
			state: 'SP'
		},
		systemAccess: {
			email: 'rafael.martins@example.com',
			passwordHash: 'hashedpassword6'
		}
	},
	{
		id: '7',
		createdAt: '2023-07-15T16:45:00Z',
		slug: 'clara-braganca-lima-oliveira-de-souza',
		personalInfo: {
			fullName: 'Clara Bragança Lima Oliveira de Souza',
			dateOfBirth: '1988-06-18',
			cpf: '444.555.666-77',
			gender: 'female',
			profilePictureUrl: '/doctors/ana-souza-143256.webp',
			phone: '5547987654327',
			email: 'clara.lima@example.com'
		},
		professionalInfo: {
			crm: '987654-PR',
			specialties: ['Oftalmologista'],
			phone: '5547991652338',
			email: 'clara.lima@clinic.com'
		},
		address: {
			postalCode: '78901-234',
			street: 'Rua da Vista',
			number: '600',
			complement: 'Consultório 7',
			district: 'Zona Sul',
			city: 'Curitiba',
			state: 'PR'
		},
		systemAccess: {
			email: 'clara.lima@example.com',
			passwordHash: 'hashedpassword7'
		}
	},
	{
		id: '8',
		createdAt: '2023-08-10T17:00:00Z',
		slug: 'joao-pereira',
		personalInfo: {
			fullName: 'João Pereira',
			dateOfBirth: '1995-12-12',
			cpf: '555.666.777-88',
			gender: 'male',
			profilePictureUrl: '/doctors/joao-lima-657328.webp',
			phone: '5547987654328',
			email: 'joao.pereira@example.com'
		},
		professionalInfo: {
			crm: '789123-DF',
			specialties: ['Endocrinologista'],
			phone: '5547918766429',
			email: 'joao.pereira@clinic.com'
		},
		address: {
			postalCode: '89012-345',
			street: 'Avenida Principal',
			number: '700',
			complement: 'Consultório 8',
			district: 'Centro',
			city: 'Brasília',
			state: 'DF'
		},
		systemAccess: {
			email: 'joao.pereira@example.com',
			passwordHash: 'hashedpassword8'
		}
	},
	{
		id: '9',
		createdAt: '2023-09-12T18:30:00Z',
		slug: 'gustavo-rocha',
		personalInfo: {
			fullName: 'Gustavo Rocha',
			dateOfBirth: '1983-04-10',
			cpf: '666.777.888-99',
			gender: 'male',
			profilePictureUrl: '/doctors/marcos-pereira-351647.webp',
			phone: '5547987654329',
			email: 'gustavo.rocha@example.com'
		},
		professionalInfo: {
			crm: '123321-SC',
			specialties: ['Urologista'],
			phone: '5547985652428',
			email: 'gustavo.rocha@clinic.com'
		},
		address: {
			postalCode: '90123-456',
			street: 'Rua do Sol',
			number: '800',
			complement: 'Consultório 9',
			district: 'Zona Leste',
			city: 'Florianópolis',
			state: 'SC'
		},
		systemAccess: {
			email: 'gustavo.rocha@example.com',
			passwordHash: 'hashedpassword9'
		}
	},
	{
		id: '10',
		createdAt: '2023-10-25T19:00:00Z',
		slug: 'larissa-costa',
		personalInfo: {
			fullName: 'Larissa Costa',
			dateOfBirth: '1993-03-05',
			cpf: '777.888.999-00',
			gender: 'female',
			profilePictureUrl: '/doctors/ana-souza-143256.webp',
			phone: '5547987654330',
			email: 'larissa.costa@example.com'
		},
		professionalInfo: {
			crm: '654123-PI',
			specialties: ['Neurologista', 'Psiquiatra'],
			phone: '5547977655332',
			email: 'larissa.costa@clinic.com'
		},
		address: {
			postalCode: '12321-654',
			street: 'Rua do Bem-Estar',
			number: '900',
			complement: 'Consultório 10',
			district: 'Vila Saúde',
			city: 'Teresina',
			state: 'PI'
		},
		systemAccess: {
			email: 'larissa.costa@example.com',
			passwordHash: 'hashedpassword10'
		}
	}
]

# AdviceHealth

Aplicação web para consultório médico.

## Requisitos

### Área de Trabalho

Visão gerencial do consultório para seus usuários.

Deve apresentar os seguintes dados estáticos do dia atual:

- Número de agendamentos
- Número de pacientes atendidos
- Faturamento
- Agenda
- Avisos/lembretes

### Agendamento de Consultas

Gerenciamento das agendas dos médicos.

Funcionalidades:

- Incluir, alterar, cancelar ou transferir agendamentos
- Definir e apresentar períodos de ausência dos médicos
- Realizar o agendamento de consultas, possibilitando:
  - Coletar os seguintes dados dos pacientes:
    - Nome completo
    - CPF
    - Data de nascimento
    - Endereço
    - Outros
  - Efetuar o pagamento da consulta durante esse processo

### Consulta de Agendamentos

Informações sobre pacientes agendados e atendidos.

Deve apresentar os seguintes dados:

- Dados do paciente
- Dados do agendamento
- Dados do médico
- Valores cobrados

Funcionalidades:

- Editar dados do agendamento
- Editar dados da cobrança

## Começando

1. Clone o repositório:
   ```
   git clone github.com/AleferReinert/advice-health.git
   ```
2. Entre no diretório do projeto:
   ```
   cd advice-health
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Scripts disponíveis

| Script                   | Descrição                            |
| :----------------------- | :----------------------------------- |
| `npm run dev`            | Inicia o servidor de desenvolvimento |
| `npm run storybook`      | Inicia o Storybook                   |
| `npx tsc`                | Validação de TypeScript              |
| `npm run lint`           | Validação do Next.js                 |
| `npm run test-storybook` | Executa testes unitários             |

## Tecnologias Utilizadas

- **Chromatic:** Testes visuais e revisão de componentes de UI.
- **ESLint:** Identificação e correção de problemas em JS/TS.
- **Husky:** Configuração de hooks Git para validações automáticas.
- **Next.js:** Framework React para apps web modernas.
- **React:** Biblioteca para criação de interfaces de usuário.
- **React Icons:** Conjunto de ícones populares para uso em projetos React.
- **Redux:** Biblioteca para gerenciamento de estado previsível em aplicações JavaScript.
- **Sonner:** Biblioteca para exibição de notificações.
- **Storybook:** Ambiente para desenvolvimento de componentes isolados.
- **Tailwind CSS:** Framework utilitário para estilização com CSS.
- **Testing Library:** Ferramenta para testes unitários.
- **TypeScript:** Superset de JavaScript com tipagem estática.

## Links

Deploy: [advicehealth.vercel.app](https://advicehealth.vercel.app)

Storybook: [Visualizar no Chromatic](https://main--67620d8560ad19d1f017f00f.chromatic.com)


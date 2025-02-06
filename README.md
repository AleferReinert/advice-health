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
4. Prepare o husky:
   ```
   npm run prepare
   ```
5. Defina as variaveis de ambiente como em .env.example.
6. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```
7. Inicie o Storybook:
   ```
   npm run storybook
   ```

## Tecnologias Utilizadas

- **Chromatic:** Ferramenta para revisão visual e hospedagem do Storybook.
- **ESLint:** Ferramenta de linting para identificar e corrigir problemas em código JavaScript/TypeScript.
- **Husky:** Ferramenta para automatizar Git hooks, permitindo a execução de scripts antes de commits, push e outros eventos.
- **Next.js:** Framework React para a construção de aplicações web estáticas e dinâmicas.
- **React:** Biblioteca JavaScript para construir interfaces de usuário.
- **React Icons:** Conjunto de ícones populares para uso em projetos React.
- **Redux:** Biblioteca para gerenciamento de estado previsível em aplicações JavaScript.
- **Storybook:** Ferramenta para desenvolvimento de componentes isolados.
- **Sonner:** Biblioteca para exibição de notificações.
- **Tailwind CSS:** Framework de utilidades CSS para estilização rápida e eficiente.
- **TypeScript:** Superconjunto de JavaScript que adiciona tipagem estática ao código.
- **Vercel:** Hospedagem de projetos em Next.

## URLs do Projeto

Projeto online: [AdviceHealth](https://advicehealth.vercel.app)

Componentes e testes no Storybook: [Visualizar no Chromatic](https://main--67620d8560ad19d1f017f00f.chromatic.com)


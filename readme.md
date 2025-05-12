# Attendit

**Attendit** é um projeto desenvolvido como parte da atividade do segundo módulo do curso de Desenvolvimento Web. O objetivo é aplicar os conhecimentos adquiridos na criação de uma aplicação web funcional e intuitiva.

## Descrição

Este projeto visa o desenvolvimento de uma plataforma destinada à gerenciamento de eventos, direcionada tanto para organizadores quanto participantes.Ela oferecerá cadastramento dos eventos com dados como data, localização, descrição e a inscrição dos usuários interessados na participação. O propósito da pesquisa é disponibilizar uma ferramenta fácil e eficaz para gestão de eventos de médio e pequeno tamanhos.

##  Tecnologias Utilizadas

- **JavaScript**: Linguagem principal para o desenvolvimento do backend e frontend.
- **EJS (Embedded JavaScript Templates)**: Utilizado para renderização de páginas dinâmicas no frontend.
- **CSS**: Estilização das páginas para uma melhor apresentação visual.
- **Node.js**: Ambiente de execução para o JavaScript no servidor.
- **Express.js**: Framework web para Node.js, facilitando a criação de rotas e gerenciamento de requisições.
- **Jest**: Framework de testes para garantir a confiabilidade do código.

## Estrutura do Projeto
├── assets/ # Arquivos estáticos como imagens, fontes, etc.

├── config/ # Configurações da aplicação

├── controllers/ # Lógica de controle das rotas

├── documentos/ # Documentação e arquivos relacionados

├── models/ # Definição dos modelos de dados

├── routes/ # Definição das rotas da aplicação

├── scripts/ # Scripts auxiliares

├── services/ # Serviços utilizados pela aplicação

├── tests/ # Testes automatizados

├── views/ # Templates EJS para renderização das páginas

├── .env.example # Exemplo de arquivo de variáveis de ambiente

├── .gitignore # Arquivos e pastas ignorados pelo Git

├── jest.config.js # Configurações do Jest

├── package-lock.json # Dependências com versões fixas

├── package.json # Dependências e scripts do projeto

├── readme.md # Documentação do projeto

├── rest.http # Arquivo para testes de requisições HTTP

└── server.js # Arquivo principal para iniciar o servidor

## Como Executar o Projeto

1. Clone o repositório:
   git clone https://github.com/Kadayann/PonderadaUx.2.git

2. Navegue até o diretório do projeto:
   cd PonderadaUx.2

3. Instale as dependências:
   npm install

4. Configure as variáveis de ambiente:
   Renomeie o arquivo `.env.example` para `.env` e ajuste as variáveis conforme necessário.

5. Inicie o servidor:
   npm start

6. Acesse a aplicação:
   Abra o navegador e vá para http://localhost:3000 (ou a porta configurada).

## Testes

Para executar os testes automatizados com Jest:
   npm test

## Contribuidores

- [Kadayann](https://github.com/Kadayann)

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).



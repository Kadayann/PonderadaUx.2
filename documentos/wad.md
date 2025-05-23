# Web Application Document - Projeto Individual - Módulo 2 - Inteli

Attendit

Bruno Gabriel Giordano Guilherme Kadayan

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

O meu projeto é o desenvolvimento de uma plataforma destinada à gerenciamento de eventos, direcionada tanto para organizadores quanto participantes.Ela oferecerá cadastramento dos eventos com dados como data, localização, descrição e a inscrição dos usuários interessados na participação.

A plataforma terá duas perspectivas de utilizador: a do organizador, permitindo o usuário editar os eventos e inscrições, e a do participante que permite ver os eventos existentes, inscrever-se e cancelar inscrições.

O propósito da pesquisa é disponibilizar uma ferramenta fácil e eficaz para gestão de eventos de médio e pequeno tamanhos.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01)

<img width="603" alt="carlos alberto" src="https://github.com/user-attachments/assets/db7bafb5-a1f7-4fb3-ba95-4a9a0ffe1c4c" />


### 2.2. User Stories (Semana 01)

US01 | Como professor responsável por um workshop, quero criar e editar os detalhes do evento no sistema, para que eu possa divulgar as informações aos alunos interessados.

US02 | Como aluno da faculdade, quero me inscrever em palestras, para que eu possa ampliar meus conhecimentos.

US03 | Como coordenador do centro acadêmico, quero exportar a lista de inscritos de um evento, para que eu possa o organizar e emitir certificados de participação.

INVEST US02: I – Independente:
Pode ser desenvolvida separadamente de outras funcionalidades, como criação de eventos ou exportação de listas.

N – Negociável:
Como o aluno se inscreve pode ser ajustada conforme decisões do time.

V – Valiosa:
Permite acesso a oportunidades que poderiam não ser notadas sem o uso do sistema.

E – Estimável:
É possível estimar o esforço necessário para implementar o fluxo de inscrição.

S – Pequena:
É uma funcionalidade focada e com escopo limitado, podendo ser implementada em pouco tempo.

T – Testável:
Pode ser verificada com testes, simulando uma inscrição e checando se ela é registrada corretamente no sistema.



---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)

![Untitled (1)](https://github.com/user-attachments/assets/6b7e997a-2d7b-4ba3-a5d4-bca8be1a8755)

<img width="379" alt="Captura de tela 2025-05-09 162211" src="https://github.com/user-attachments/assets/1666bdb5-1802-4c1e-bf91-5d5a380d0b2a" />


### 3.1.1 BD e Models (Semana 5)

O sistema utiliza um banco de dados PostgreSQL hospedado no Supabase. A estrutura principal de dados é representada pela tabela tarefas, que contém os seguintes campos:

- id: Identificador único da tarefa (chave primária);
- nome: Nome da tarefa;
- descricao: Descrição detalhada da tarefa;
- status: Estado atual da tarefa (por exemplo, "pendente" ou "concluída");
- created_at: Data de criação da tarefa;
- updated_at: Data da última atualização da tarefa.

Os Models foram implementados diretamente nos arquivos dos controllers por meio de comandos SQL utilizando o pacote pg, sem o uso de ORM. Dessa forma, os próprios controllers executam operações de inserção, listagem, atualização e exclusão de tarefas diretamente no banco.

---

### 3.2 Arquitetura (Semana 5)

A arquitetura do projeto segue o padrão **MVC (Model-View-Controller)**, promovendo a separação de responsabilidades na aplicação:

- **Model**: Camada responsável por representar a estrutura dos dados e interagir com o banco. No projeto, o model está embutido nos controllers via comandos SQL.
- **View**: Interface com o usuário construída com EJS (form.ejs, listagem.ejs), permitindo exibição e inserção de tarefas.
- **Controller**: Lógica da aplicação centralizada no arquivo tarefasController.js, que manipula os dados da tabela tarefas e responde às requisições HTTP.

#### Diagrama da Arquitetura MVC

<img width="768" alt="parte2" src="https://github.com/user-attachments/assets/b1017f58-8d08-466b-b547-4c964bb404c3" />

**Fluxo de dados**:
1. O cliente acessa o sistema via navegador.
2. A view envia requisições para o controller.
3. O controller processa as informações e interage com o model.
4. O model executa operações no banco de dados (PostgreSQL via Supabase).
5. A resposta retorna ao controller, que envia o resultado de volta à view para exibição.

### 3.3. Wireframes (Semana 03)

O protótipo apresenta cinco telas principais: Login, Dashboard de eventos, Gerenciamento de eventos, Visualização do evento e Detalhes do evento. Cada tela foi desenhada com uma interface que visa permitir uma fácil navegação para todos os tipos de usuários, assim permitindo que qualquer pessoa crie ou participe de um evento sem dificuldades.

![Participante](https://github.com/user-attachments/assets/39ff8ecb-2252-4b67-a6fe-4109a6916c46)


### 3.4. Guia de estilos (Semana 05)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)

### 3.6. WebAPI e endpoints (Semana 05)

A API desenvolvida possui os seguintes endpoints relacionados à gestão de tarefas. Todos seguem o padrão RESTful e utilizam JSON como formato de entrada e saída.

| Método | Endpoint           | Descrição                          | Exemplo de corpo da requisição (JSON) |
|--------|--------------------|------------------------------------|----------------------------------------|
| POST   | `/api/tarefas`     | Cria uma nova tarefa               | `{ "nome": "Estudar", "descricao": "Cap. 1 ao 5" }` |
| GET    | `/api/tarefas`     | Lista todas as tarefas             | — |
| PUT    | `/api/tarefas/:id` | Atualiza uma tarefa pelo ID        | `{ "nome": "Estudar mais", "descricao": "Cap. 1 ao 7", "status": "concluída" }` |
| DELETE | `/api/tarefas/:id` | Remove uma tarefa pelo ID          | — |

Todos os endpoints foram testados no Postman e interagem com o banco de dados PostgreSQL via Supabase.
 

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

---
---

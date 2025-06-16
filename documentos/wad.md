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


![guiaestilos](https://github.com/user-attachments/assets/c32da1b1-2279-4e0b-86c1-b86375eeb3ac)


### 3.5. Protótipo de alta fidelidade (Semana 05)

![Log in](https://github.com/user-attachments/assets/7fd539db-97da-4b72-90a1-bc33f41e9667)

![Main](https://github.com/user-attachments/assets/03200388-54f0-4889-839b-e8db3b37ece3)

![NewEvent](https://github.com/user-attachments/assets/11458845-187f-4588-9f70-777c498d5b53)

<img width="512" alt="details 2" src="https://github.com/user-attachments/assets/91fd6e85-91f5-475c-8c15-8116cc0e005c" />

![disponiveis](https://github.com/user-attachments/assets/33dee68f-4102-46bf-b792-02f892998688)

![Eventfeedback](https://github.com/user-attachments/assets/cc2fd8dd-cda9-4cee-8bf7-929410c3487d)










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

Durante a semana 07, desenvolvi a interface do sistema web focando na exibição e manipulação de eventos cadastrados. A interface foi construída com EJS e estilizada utilizando CSS personalizado.

Páginas entregues:
Página de listagem de eventos (/eventos): mostra os eventos cadastrados com botões de edição e exclusão.

Formulário de novo evento (/eventos/novo): permite cadastrar novos eventos com nome, data e descrição.

Formulário de edição (/eventos/editar/:id): permite editar eventos existentes de forma prática.

Navegação entre páginas: disponível no cabeçalho da aplicação.

Funcionalidades da interface:
Os dados exibidos são carregados dinamicamente do banco de dados.

Botões de exclusão usam fetch() com requisição DELETE.

Edição feita com GET + formulário PUT via fetch().

Layout responsivo e limpo, com navegação acessível e rodapé fixo.

Prints de exemplo:
eventos.ejs com a listagem dos eventos cadastrados.
![image](https://github.com/user-attachments/assets/9048f7e4-12eb-40b7-b057-015f48023078)


Página de cadastro de evento.
![image](https://github.com/user-attachments/assets/b772fdc8-27dd-463e-90cd-70ed807a921e)


Estilo aplicado com CSS customizado.
![image](https://github.com/user-attachments/assets/70008410-3038-4ab5-995c-97a7c0b68d6c)
![image](https://github.com/user-attachments/assets/bea058ea-d4ed-45bf-82c4-bd002f1b996d)


## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)
https://youtu.be/UpIkkLJHl6c

![image](https://github.com/user-attachments/assets/298c7ab1-9dcc-4acd-8d5d-67ff49cb7c00)
O server.js é responsável por iniciar o servidor Node.js e configurar o Express,e as rotas. Esse código conecta as diferentes partes do projeto e inicializa a aplicação

![image](https://github.com/user-attachments/assets/0cbe53b0-2a12-472d-9c11-0031865c8015)
Esse é o arquivo de rotas específico dos eventos, seguindo o padrão MVC. Define os caminhos para listar, cadastrar, editar e excluir eventos

![image](https://github.com/user-attachments/assets/680dd216-92cf-4bb5-99c7-9af1e80395af)
Aqui é um exemplo de função do controller responsável por tratar a lógica de negócio do sistema. Essa camada isola a lógica das rotas e interage diretamente com o banco de dados.

![image](https://github.com/user-attachments/assets/81a84058-af55-42f3-805d-34366c9824f8)
O eventos.ejs gera o HTML dinâmico com os dados do sistema, onde a view é responsável por exibir as informações para o usuário.

![image](https://github.com/user-attachments/assets/ec36502d-fbe0-4a8e-abae-eb7b223f6d30)
CSS utilizado para estilização da aplicação, ele define cores, espaçamentos e layout, garantindo uma interface agradável.



### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

####  Pontos fortes do projeto
- Estrutura clara seguindo o padrão **MVC**.
- Funcionalidades principais implementadas: **cadastro, listagem, edição, exclusão** e a opção de marcar participação em eventos.
- Interface limpa e responsiva com uso de CSS básico.
- Código organizado com separação entre **rotas, controllers e views**.
- Integração eficiente entre frontend e backend com uso do **fetch** para operações como exclusão.

####  Pontos a melhorar
- Falta de **validação de dados mais robusta**, especialmente no backend como "campos obrigatórios".
- Falta de **feedback visual ao usuário** em algumas operações (ex: mensagem de sucesso ao excluir).


####  Melhorias futuras
- Permitir adição de mais informações e controle sobre os eventos.
- Adicionar **paginação** na listagem para facilitar a visualização em caso de muitos eventos cadastrados.
- Melhorar a **acessibilidade** da aplicação (ex: suporte a leitores de tela).
- Implementar **gráficos ou relatórios** com estatísticas sobre os eventos cadastrados.



## <a name="c5"></a>5. Referências

- [Sympla](https://www.sympla.com.br/)  

- [Eventbrite](https://www.eventbrite.com.br/)  


## Como iniciar este projeto

No diretório deste projeto, você pode executar:

### `npm start`

## Credenciais de Acesso:

Usuário: **tester**

Senha: **@t35t3r10**

## Preview do projeto:
![Gif apresentando o projeto](https://drive.google.com/file/d/1ln5FDyfuh0xTwsNwlLO3_6XKvdKPphXm/view?usp=sharing)

## Descrição do projeto:

### Página de login:

#### Única página disponível se não estiver logado:

Ao visualizar esta tela pela primeira vez, o usuário poderá inserir suas credenciais de acesso e visitar o dashboard de gerenciamento de dragões. As credenciais de acesso estão armazenadas em um arquivo JSON dentro do projeto.

Para que esta fosse a única tela disponível caso o usuário não estivesse logado, foi criado um componente que verifica se há dados de usuário no contexto de autenticação. Caso existam, o usuário é automaticamente redirecionado para a tela do dashboard, caso contrário, visualizará apenas a tela de login.

Para evitar que o login fosse necessário toda vez que o usuário recarregasse a página, decidi salvar suas informações em uma variável no localStorage. A existencia desta sempre será consultada quando a aplicação iniciar, será criada quando o usuário efetuar um login e será excluída quando fizer logout.

Para tornar a criação do formulário de login algo mais prático e de fácil leitura para o próximo desenvolvedor, utilizei as libs Formik e Yup. Estas proporcionam uma "simplificação" do formulário, já com schemas e errorHandlers próprios. 

##### Features:
* Form com Formik e Yup;
* Dados armazenados em LocalStorage;
* Contexto para armazenamento de dados de usuário (auth);
* Componente de verificação de autenticação de usuário (rotas);
* Componente que simula uma requisição em API, com payload e response.

#### Criar um usuário básico para acesso.

Os dados deste foram armazenados em um arquivo JSON dentro do projeto. Atualmente, existe apenas um usuário no sistema.

Credenciais de acesso no início e no fim deste documento.

### Uma página de lista de dragões:

#### Os nomes devem estar em ordem alfabética.

Nesta tela, serão exibidos, em ordem alfabética, os dragões disponíveis para modificações na API.
Utilizei a lib Axios para tornar prática a integração com APIs. 

#### A partir da lista, deverá ser possível remover e alterar as informações dos dragões.

Para cada dragão presente no array de retorno, será exibido um card, contendo sua data de criação, nome, tipo e histórias. Decidi exibir estas informações dentro de um input, facilitando a edição por parte do usuário.

#### A partir da lista, deverá ser possível remover e alterar as informações dos dragões.

No bottom do card, estão presentes três botões, sendo um para visualizar os detalhes do dragão em questão, um para concretizar as edições efetuadas nos inputs e outro para exclusão do dragão.

### Uma página com os detalhes de um dragão específico:

#### Os seguintes dados devem ser apresentados na página:
* Data de criação;
* Nome;
* Tipo.
* Uma página para cadastro de dragões:

Ao clicar no botão "Visualizar", o usuário será redirecionado para uma tela de visualização de detalhes de um dragão. Neste ambiente, estarão disponíveis apenas dados relacionados ao dragão indicado na tela anterior, através de um ID. Este foi utilizado como parâmetro em uma requisição à API, que retornou seus detalhes.

### Regras:

#### Layout responsivo;

Para tornar o design da aplicação responsivo, optei por utilizar unidades como VW e VH na definição de tamanho de tela, EM no tamanho de fontes e grid no dimencionamento de componentes, de acordo com cada breakpoint.

#### Utilizar Stencil, React, Angular 6+ ou Web Components;

Esta aplicação foi desenvolvida em ReactJS na versão 18.2.0.

#### Usar um sistema de controle de versão para entregar o teste (Github, Bitbucket, ...).

Este projeto está sendo visualizado em meu repositório público do GitHub, integrado ao meu Git local.


## Credenciais de Acesso:

Usuário: **tester**

Senha: **@t35t3r10**

### Obrigado por chegar até aqui!
![Alt Text](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)
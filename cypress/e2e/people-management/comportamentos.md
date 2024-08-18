### Cenário: Cadastrar um novo colaborador
 **Dado** que o usuário está logado com credenciais de administrador
 **Quando** o usuário preenche e submete o formulário de criação de Colaborador
 **E** o ID informado é único e não existe na base de dados
 **Então** o Colaborador é cadastrado com sucesso
 **E** o usuário é redirecionado para a tela de edição do novo Colaborador

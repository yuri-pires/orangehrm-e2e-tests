### Cenário: Cadastrar um novo colaborador
 **Dado** que o usuário está logado com credenciais de administrador

 **Quando** o usuário preenche e submete o formulário de criação de Colaborador

 **E** o ID informado é único e não existe na base de dados

 **Então** o Colaborador é cadastrado com sucesso

 **E** o usuário é redirecionado para a tela de edição do novo Colaborador

### Cenário: Editar dados adicionais de um Colaborador
  **Dado** que o usuário está logado com credenciais de administrador

  **E** acessa a tela de edição de um Colaborador cadastrado

  **Quando** preenche os campos adicionais

  **E** envia os dados respeitando os valores permitidos

  **Então** o Colaborador tem seus dados adicionais salvos com sucesso.
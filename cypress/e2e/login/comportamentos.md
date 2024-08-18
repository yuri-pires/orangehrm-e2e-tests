### Cenário: Realizar login do usuário admnistrativo com sucesso
  **Dado** que o usuário possui credenciais de admnistrador

  **Quando** o usuário faz login

  **Então** o usuário visualiza o dashboard administrativo da empresa

### Cenário: Não permitir login do usuário com Usuário/Senha inválido
  **Dado** que o usuário possui credenciais inválidas de login

  **Quando** o usuário realiza uma tentativa de login

  **Então** o usuário visualiza a mensagem de acesso negado.

### Cenário: Bloquear usuário após 3 tentativas de login sem sucesso
  **Dado** que o usuário possui credenciais inválidas de login

  **Quando** o usuário realiza 3 tentativas de login consecutivas

  **Então** o usuário tem seu acesso bloqueado.
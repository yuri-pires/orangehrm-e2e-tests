declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Cria uma sessão para um determinado usuário
     * @param options Booleano que indica se a sessão deve ser armazenada
     * @default cacheSession = true
     *
     * @default user Admin user
     * @default password Admin password
     */
    login(options?, user?: string, password?: string): any;

    gui_createEmployee(employee);
  }
}

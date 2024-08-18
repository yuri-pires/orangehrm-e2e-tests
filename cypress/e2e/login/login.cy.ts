describe("Testes do módulo de Login", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Realizar login com sucesso", () => {
    cy.visit("/");
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
  });

  it("Exibir mensagem de erro ao inserir credencial inválida", () => {
    cy.login({ cacheSession: false }, "error", "error");
    cy.contains("Invalid credentials").should("be.visible");
  });
});

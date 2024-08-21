import "./commands";
import "./gui_commands";
import "cypress-plugin-xhr-toggle";

Cypress.on("uncaught:exception", (err, runnable) => {
  // Retorne false para prevenir que a exceção interrompa o teste
  return false;
});

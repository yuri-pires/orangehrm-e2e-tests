import "./commands";
import "./gui_commands";

Cypress.on("uncaught:exception", (err, runnable) => {
  // Retorne false para prevenir que a exceção interrompa o teste
  return false;
});

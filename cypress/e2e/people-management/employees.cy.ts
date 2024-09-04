import { fakerMockEmployee } from "../../support/faker_commands";

describe("Testes do módulo de People Management", () => {
  beforeEach(() => {
    cy.login();
  });

  it.only("Cadastrar um novo Colaborador", () => {
    const employee = fakerMockEmployee();
    cy.gui_createEmployee(employee);

    cy.get("@empNumber").then((empNumber) => {
      cy.location("pathname").should(
        "equal",
        `/web/index.php/pim/viewPersonalDetails/empNumber/${empNumber}`
      );

      cy.contains("h6", `${employee.firstName} ${employee.lastName}`).should(
        "be.visible"
      );
    });
  });

  it("Editar dados adicionais de um Colaborador com sucesso", () => {
    const employee = fakerMockEmployee();
    cy.gui_createEmployee(employee);

    cy.get("@empNumber").then((empNumber) => {
      cy.location("pathname").should(
        "equal",
        `/web/index.php/pim/viewPersonalDetails/empNumber/${empNumber}`
      );
    });
  });
});

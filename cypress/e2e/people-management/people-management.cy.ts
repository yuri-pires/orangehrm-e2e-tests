import { faker } from "@faker-js/faker";

describe("Testes do módulo de People Management", () => {
  const employee = {
    firstName: faker.person.firstName(),
    middleName: faker.person.middleName(),
    lastName: faker.person.lastName(),
  };

  beforeEach(() => {
    cy.login();
  });

  it("Cadastrar um novo Colaborador com sucesso", () => {
    cy.gui_createEmployee(employee);

    cy.get("@empNumber").then((empNumber) => {
      cy.location("pathname").should(
        "equal",
        `/web/index.php/pim/viewPersonalDetails/empNumber/${empNumber}`
      );
    });

    cy.contains("h6", `${employee.firstName} ${employee.lastName}`).should(
      "be.visible"
    );
  });
});

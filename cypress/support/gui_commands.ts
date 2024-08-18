Cypress.Commands.add(
  "login",
  (
    { cacheSession = true } = {},
    user = Cypress.env("admin_user"),
    password = Cypress.env("admin_pass")
  ) => {
    const login = () => {
      cy.visit("web/index.php/auth/login");
      cy.get('input[name="username"]').type(user);
      cy.get('input[name="password"]').type(password);
      cy.get('button.orangehrm-login-button[type="submit"]').click();
    };

    const validate = () => {
      cy.visit("/web/index.php/dashboard/index");
      cy.location("pathname").should("not.equal", "/web/index.php/auth/login");
    };

    const options = {
      cacheAcrossSpecs: true,
      validate,
    };

    if (cacheSession) {
      cy.session(user, login, options);
    } else {
      login;
    }
  }
);

Cypress.Commands.add("gui_createEmployee", (employee) => {
  cy.visit("/web/index.php/pim/addEmployee");

  // Intercepta a requisição antes de enviar o formulário
  cy.intercept("POST", "**/web/index.php/api/v2/pim/employees").as(
    "createEmployee"
  );

  cy.get('input.orangehrm-firstname[name="firstName"]').type(
    employee.firstName
  );
  cy.get('input.orangehrm-middlename[name="middleName"]').type(
    employee.middleName
  );
  cy.get('input.orangehrm-lastname[name="lastName"]').type(employee.lastName);

  cy.get('button[type="submit"]').click();

  cy.wait("@createEmployee").then(({ response }) => {
    expect(response.statusCode).to.equal(200);
    let employeeId = response.body.data.employeeId;
    let empNumber = response.body.data.empNumber;


    cy.wrap(employeeId).as("employeeId");
    cy.wrap(empNumber).as("empNumber");
  });
});

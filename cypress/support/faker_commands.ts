import { faker } from "@faker-js/faker/locale/pt_BR";

export function fakerMockEmployee() {
  return {
    firstName: faker.person.firstName(),
    middleName: faker.person.middleName(),
    lastName: faker.person.lastName(),
  };
}

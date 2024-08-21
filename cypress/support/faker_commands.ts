import { faker } from "@faker-js/faker";

export function fakerMockEmployee() {
  return {
    firstName: faker.person.firstName(),
    middleName: faker.person.middleName(),
    lastName: faker.person.lastName(),
  };
}

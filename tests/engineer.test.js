const Engineer = require("../lib/Engineer");

describe("Can set GitHUb account via constructor", () => {
  const value = "GitHub";
  const employee = new Engineer("Kat", 1, "test@email.com", value);
  expect(employee.github).toBe(value);
});

describe("getRole() should return \"Engineer\"", () => {
  const value = "Engineer";
  const employee = new Engineer("Kat", 1, "test@email.com", "GitHub");
  expect(employee.getRole()).toBe(value);
});

describe("Can get GitHub username via getGithub()", () => {
  const value = "GitHub";
  const employee = new Engineer("Kat", 1, "test@email.com", value);
  expect(employee.getGithub()).toBe(value);
});
const Manager = require("../lib/Manager");

describe("Can set office number via constructor argument", () => {
  const value = 50;
  const employee = new Manager("Foo", 1, "test@email.com", value);
  expect(employee.officeNumber).toBe(value);
});

describe("getRole() should return \"Manager\"", () => {
  const value = "Manager";
  const employee = new Manager("Kat", 1, "test@email.com", 50);
  expect(employee.getRole()).toBe(value);
});

describe("Can get office number via getOfficeNum()", () => {
  const value = 200;
  const employee = new Manager("Kat", 1, "test@email.com", value);
  expect(employee.getOfficeNum()).toBe(value);
});
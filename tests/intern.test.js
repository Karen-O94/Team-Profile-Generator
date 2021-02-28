const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const value = "UoB";
  const employee = new Intern("Kat", 1, "test@email.com", value);
  expect(employee.school).toBe(value);
});

test("getRole() should return \"Intern\"", () => {
  const value = "Intern";
  const employee = new Intern("Kat", 1, "test@email.com", "UoB");
  expect(employee.getRole()).toBe(value);
});

test("Can get school via getSchool()", () => {
  const value = "UoB";
  const employee = new Intern("Kat", 1, "test@email.com", value);
  expect(employee.getSchool()).toBe(value);
});
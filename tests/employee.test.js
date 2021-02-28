const Employee = require("../lib/employee");

describe("Employee", () => {
  it("Should instantiate the Employee class", () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe('object');
  });

  it("Should set name via the constructor arguments", () => {
    const nameEg = "John";
    const employee = new Employee(nameEg);
    expect(employee.name).toBe(nameEg);
  });

  it("Should set id via the constructor arguments", () => {
    const idEg = 14;
    const employee = new Employee("John", idEg);
    expect(employee.id).toBe(idEg);
  });

  it("Should set email via the constructor arguments", () => {
    const emailEg = "test@email.com";
    const employee = new Employee("John", 4, emailEg);
    expect(employee.email).toBe(emailEg);
  });

  // getName() method Jest test
  describe('getName', () => {
    it('Should get name from getName()', () => {
      const nameEg = 'Karen';
      const employee = new Employee(nameEg);
      expect(employee.getName()).toBe(nameEg);
    });
  });

  // getId() method Jest test
  describe('getId', () => {
    it('Should get id from getId()', () => {
      const idEg = 10;
      const employee = new Employee(10, idEg);
      expect(employee.getId()).toBe(idEg);
    });
  });

  // getEmail() method
  describe('getEmail', () => {
    it('Should retreive email from getEmail()', () => {
      const emailEg = 'test@email.co.uk';
      const employee = new Employee('email', 1, emailEg);
      expect(employee.getEmail()).toBe(emailEg);
    });
  });

  // getRole() method Jest test
  describe('getRole', () => {
    it('getRole() should return \"Employee\"', () => {
      const roleEg = 'Employee';
      const employee = new Employee('role', 1, 'test@email.co.uk');
      expect(employee.getRole()).toBe(roleEg);
    });
  });

});

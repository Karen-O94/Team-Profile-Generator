const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        //Custom behaviour of Manager
        this.school = school;
    }

    getSchool() {
        return school;
    }

    getRole() {
       return "Intern";
    }
}

module.exports = Intern; 
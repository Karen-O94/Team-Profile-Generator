const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        //Custom behaviour of Manager
        this.school = school;
    }

    getSchool() {
        console.log(school);
    }

    getRole() {
        console.log(Intern);
    }
}

module.exports = Intern; 
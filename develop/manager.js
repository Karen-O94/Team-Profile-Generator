const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        //Custom behaviour of Manager
        this.officeNumber = officeNumber;
    }

    getRole() {
       console.log(Manager);
    }
}

module.exports = Manager; 
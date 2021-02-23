const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        //Custom behaviour of Manager
        this.github = github;
    }

    getGithub() {
        console.log(this.github);
    }

    getRole() {
        console.log(Engineer);
    }
}

//example
let engineer = new Engineer ("Josh", "12", "josh@email.com", "Josh94")
engineer.getGithub();
engineer.getRole();
module.exports = Engineer; 
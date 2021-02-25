// List of dependencies required for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

 //This array will be populated to employees added to team profile
 const employees = [];

//Variables holding array of questions related to a manager, engineer or intern profile
const managerQues = ["What is the team manager's name?",
    "What is the team manager's ID?",
    "What is the team manager's email?",
    "What is the team manager's office number?"];
const engineerQues = ["What is the engineer's name?",
    "What is the engineer's ID?",
    "What is the engineer's email?",
    "What is the engineer's  GitHub username?"];
const internQues = ["What is the intern's name?",
    "What is the intern's ID?",
    "What is the intern's email?", 
    "What is the intern's school?"];

//Manager questions
function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: managerQues[0],
        },
        {
            type: 'input',
            name: 'id',
            message: managerQues[1],
        },
        {
            type: 'input',
            name: 'email',
            message: managerQues[2],
        },
        {
            type: 'input',
            name: 'officeNum',
            message: managerQues[3],
        },
    ]).then( function ({name, id, email, officeNum}) {
        let manager = new Manager (name, id, email, officeNum)
        //TODO: addEmployees.push(manager)
        //TODO: pass 'manager' to card html
        newEmployees(); 
    })
}

// .then((response) => {
//     if (response.memberChoice == 'engineer') {
//         addEngineer();
//     }
//     else {
//         addIntern();
//     }
// })
//adding new members

//This function adds team members
function addEmployees() {
    inquirer.prompt([
        {
            type:'list',
            name:'memberChoice',
            message:'Would you like to add more team members? Please select choices provided',
            choices: ['engineer', 'intern', 'No I do not wish to add anymore members'],
        }
    ]).then(function({memberChoice}) {
        if (memberChoice == 'engineer') {
            addEngineer();
        }
        else if (memberChoice =='intern'){
            addIntern();
        }else {
            console.log('html page is completed') //replace with html code
        }
    })

}
//Engineer questions
function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: engineerQues[0],
        },
        {
            type: 'input',
            name: 'id',
            message: engineerQues[1],
        },
        {
            type: 'input',
            name: 'email',
            message: engineerQues[2],
        },
        {
            type: 'input',
            name: 'github',
            message: engineerQues[3],
        },
    ]).then( function ({name, id, email, github}) {
        let engineer = new Engineer (name, id, email, github)
        //TODO: employees.push(engineer)
        //TODO: pass 'engineer' to card html
        addEmployees(); 
    })
}

//Intern questions
function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: internQues[0],
        },
        {
            type: 'input',
            name: 'id',
            message: internQues[1],
        },
        {
            type: 'input',
            name: 'email',
            message: internQues[2],
        },
        {
            type: 'input',
            name: 'school',
            message: internQues[3],
        },
    ]).then( function ({name, id, email, school}) {
        let intern = new Intern (name, id, email, school)
        //TODO: employees.push(manager)
        //TODO: pass 'manager' to card html
        addEmployees(); 
    })
}

//TODO: Add function to initialise app - ie manager and generateHTML

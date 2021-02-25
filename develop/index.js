// List of packages needed for this application
const inquirer = require('inquirer');
//const fs = require('fs');

const managerQues = ["What is the team manager's name?",
    "What is the team manager's ID?",
    "What is the team manager's email?",
    "What is the team manager's office number?",
    "What type of team member would you like to add?"];
const engineerQues = ["What is the engineer's name?",
    "What is the engineer's ID?",
    "What is the engineer's email?",
    "What is the engineer's  GitHub username?",
    "What type of team member would you like to add?"];
const internQues = ["What is the intern's name?",
    "What is the intern's ID?",
    "What is the intern's email?", 
    "What is the intern's school?",
    "What type of team member would you like to add?"];

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
        {
            type: 'list',
            name: 'memberChoice',
            message: managerQues[4],
            choices: ['engineer', 'intern'],
        },
    ]).then((response) => {
        if (response.memberChoice == 'engineer') {
            addEngineer();
        }
        else {
            addIntern();
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
        {
            type: 'list',
            name: 'memberChoice2',
            message: engineerQues[4],
            choice: ['intern', 'manager'],
        },
    ]).then((response) => {
        if (response.memberChoice2 == 'intern') {
            addIntern();
        }
        else {
            addManager();
        }
    });
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
        {
            type: 'list',
            name: 'memberChoice3',
            message: internQues[4],
            choice: ['manager', 'engineer'],
        }
    ]).then((response) => {
        if (response.memberChoice3 == 'engineer') {
            addEngineer();
        }
        else {
            addManager();
        }
    });
}
addManager();


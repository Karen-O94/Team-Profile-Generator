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


//function to initialise app
function init () {
    startHTML();
    addManager();
};

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
    ]).then((data) => {
        let manager = new Manager(data.name, data.id, data.email, data.officeNum)
        employees.push(manager)
        //TODO: pass 'manager' to card html
        addCards(manager);
        addEmployees();
        
    });
}

//This function adds team members
function addEmployees() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberChoice',
            message: 'Would you like to add more team members? Please select choices provided',
            choices: ['engineer', 'intern', 'No I do not wish to add anymore members'],
        }
    ]).then(function ({ memberChoice }) {
        if (memberChoice == 'engineer') {
            addEngineer();
        }
        else if (memberChoice == 'intern') {
            addIntern();
        } else {
            endHTML(); //replace with html code
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
    ]).then((data) => {
        let engineer = new Engineer(data.name, data.id, data.email, data.github)
        employees.push(engineer);
        addCards(engineer);
        addEmployees();
       
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
    ]).then((data) => {
        let intern = new Intern(data.name, data.id, data.email, data.school)
        employees.push(intern)
        //TODO: pass 'manager' to card html
        addCards(intern);
        addEmployees();
        //writeToFile();
    });
}


// function writeToFile(fileName, data) {
//     fs.writeFileSync(fileName, generateHTML(data), (err) =>
//         err ? console.error(err) : console.log('Successfully wrote to index.html!'));
// }
//TODO: Add function to initialise app - ie manager and generateHTML
function startHTML() {
    let html =
        `<!DOCTYPE html>
 <html lang="en">
 
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
         integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
     <script src="https://kit.fontawesome.com/77e0e8fa63.js" crossorigin="anonymous"></script>
     <title>Document</title>
 </head>
 
 <body>
     <div class="jumbotron jumbotron-fluid bg-warning" style="height: 80px">
         <div class="container">
             <h1 class="display-4 text-center" style="color: white; font-weight: bold;">My Team</h1>
         </div>
     </div>
 
 
     <div class="container">
         <div class="row">`;

    fs.writeFile("./dist/index.html", html, function (err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start")
}

function addCards(colleague) {
    return new Promise(function (resolve, reject) {
        const name = colleague.getName();
        const id = colleague.getId();
        const email = colleague.getEmail();
        const role = colleague.getRole();
        let data = "";
        if (role === "Engineer") {
            const github = colleague.getGithub();
            data =
                `<div class="col-md-3 m-4">
                <div class="card border-dark">
                <div class="card-header text-white bg-warning">
                    <p style="font-size: 26px" >${name}</p>
                    <p style="font-size: 26px">
                        <i class="fas fa-glasses" style='font-size:26px;color:white'></i> Engineer
                    </p>
                </div>
                <div class="card-body">
                    <div class="card">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${github}" target="_blank">${github}</a></li>
                        </ul>
                    </div>
                </div>
             </div>
        </div>`;
        }
        else if (role === "Intern") {
            const school = colleague.getSchool();
            data =
                `<div class="col-md-3 m-4">
                <div class="card border-dark">
            <div class="card-header text-white bg-warning">
                <p style="font-size: 26px">${name}</p>
                <p style="font-size: 26px">
                    <i class="fas fa-user-graduate" style='font-size:26px;color:white'></i> Intern
                </p>
            </div>
            <div class="card-body">
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item">School: ${school}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`
        } else {
            const officeNumber = colleague.getOfficeNum();
            data =
                `<div class="col-md-3 m-4">
                <div class="card border-dark">
            <div class="card-header text-white bg-warning">
                <p style="font-size: 26px">${name}</p>
                <p style="font-size: 26px">
                    <i class='fas fa-mug-hot' style='font-size:26px;color:white'></i> Manager
                </p>
            </div>
            <div class="card-body">
                <div class="card" style="width: 14rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item"> Email:  <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item">Office Number: ${officeNumber}</li>
                    </ul>
                </div>
             </div>
           </div>
         </div>`
        }
        
    fs.appendFile("./dist/index.html", data, function (err) {
        if (err) {
            return reject(err);
        }
    });
    return resolve();
    });
}

function endHTML () {
    const htmlEnd = ` </div>
    </div>
    
    </body>
    </html>`;
    fs.appendFile("./dist/index.html", htmlEnd, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("Your team profile has been successfully generated!")
}

//Calling init function starts the app
init();
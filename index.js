// required packages
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// read in class files
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let fullTeam = [];

// inquirer prompt to get back workrole of employee and kick off class-specific inquirer prompt
function kickPrompt() {
    // return the inquirer prompt
    return inquirer.prompt([
        {
            type: "list",
            message: "Choose the employee work role",
            name: "workrole",
            choice: ["Manager", "Engineer", "Intern"]
        }
    // use .then() to to kick off the three class-specific inquirer prompts
    ]).then(response => {
        if(response.choices === "Manager") {
            kickManager();
        } else if (response.choices === "Engineer") {
            kickEngineer();
        } else 
            kickIntern();
    });
}
// class-specific inquirer prompts
// manager inquirer prompt - needs name, id, email, officeNumber
function kickManager() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Manager Name:",
            name: "name"
        },
        {
            type: "input",
            message: "Manager ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Manager Email:",
            name: "email"
        },
        {
            type: "input",
            message: "Manager Office Number:",
            name: "officeNumber"
        },
        // inquirer prompt that allows user to choose to input a new employee after they finish this one or choose none if they are done
        {
            type: "list",
            message: "Choose type of next employee",
            name: "workroleNew",
            choice: ["Manager", "Engineer", "Intern", "None"]
        }
    // create new Manager class with input information
    ]).then(response => {
        fullTeam.push(new Manager(response.name, response.id, response.email, response.officeNumber))
        // if/else statement to kick off class-specific inquirer prompts 
        if(response.workroleNew === "Manager") {
            kickManager();
        } else if(response.workroleNew === "Engineer") {
            kickEngineer();
        } else if(response.workroleNew === "Intern") {
            kickIntern();
        } else {
            // need to figure out how to prompt creation of HTML here
        }
    });
};
// engineer inquirer prompt - needs name, id, email, github
function kickEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Engineer Name:",
            name: "name"
        },
        {
            type: "input",
            message: "Engineer ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Engineer Email:",
            name: "email"
        },
        {
            type: "input",
            message: "Engineer Github Username:",
            name: "github"
        },
        // inquirer prompt that allows user to choose to input a new employee after they finish this one or choose none if they are done
        {
            type: "list",
            message: "Choose type of next employee",
            name: "workroleNew",
            choice: ["Manager", "Engineer", "Intern", "None"]
        }
    // create new Engineer class with input information
    ]).then(response => {
        fullTeam.push(new Engineer(response.name, response.id, response.email, response.github))
        if(response.workroleNew === "Manager") {
            kickManager();
        } else if(response.workroleNew === "Engineer") {
            kickEngineer();
        } else if(response.workroleNew === "Intern") {
            kickIntern();
        } else {
            // need to figure out how to prompt creation of HTML here
        }
    });
};
// intern inquirer prompt - needs name, id, email, school
function kickIntern() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Intern Name:",
            name: "name"
        },
        {
            type: "input",
            message: "Intern ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Intern Email:",
            name: "email"
        },
        {
            type: "input",
            message: "Intern School:",
            name: "school"
        },
        // inquirer prompt that allows user to choose to input a new employee after they finish this one or choose none if they are done
        {
            type: "list",
            message: "Choose type of next employee",
            name: "workroleNew",
            choice: ["Manager", "Engineer", "Intern", "None"]
        }
    // create new Intern class with input information
    ]).then(response => {
        fullTeam.push(new Intern(response.name, response.id, response.email, response.school));
        if(response.workroleNew === "Manager") {
            kickManager();
        } else if(response.workroleNew === "Engineer") {
            kickEngineer();
        } else if(response.workroleNew === "Intern") {
            kickIntern();
        } else {
            // need to figure out how to prompt creation of HTML here
        }
    })
};

// callback function to kickPrompt()
function init() {
    kickPrompt();
}

// call init() function
init();


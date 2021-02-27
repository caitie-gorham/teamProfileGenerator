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
        }
    // create new Manager class with input information
    ]).then(response => {
        let manage = new Manager(response.name, response.id, response.email, response.officeNumber)
        // need to somehow append manage to html page
        // need to somehow restart the prompts to have more user input
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
        }
    // create new Engineer class with input information
    ]).then(response => {
        let engine = new Engineer(response.name, response.id, response.email, response.github)
        // need to somehow append engine to html page
        // need to somehow restart the prompts to have more user input
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
        }
    // create new Intern class with input information
    ]).then(response => {
        let intern1 = new Intern(response.name, response.id, response.email, response.school);
        // need to somehow append intern1 to html page
        // need to somehow restart the prompts to have more user input
    })
};

// callback function to kickPrompt()
function init() {
    kickPrompt();
}

// call init() function
init();


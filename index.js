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
function kickManager();
function kickEngineer();
function kickIntern();

// function to kick off inquirer prompts
function init() {
    kickPrompt();
}

// call init() function
init();


const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // super uses inputs from employee parent class
        super(name, id, email);
        // additional parameter for engineer class = github username
        this.github = github;

    }
    
    getGithub() {
        return this.github;
    };
}



module.exports = Engineer 
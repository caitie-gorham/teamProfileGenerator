const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    
    getSchool() {
        return this.school;
    }

    // NEED TO DO: need to override the getRole method to get intern
    getRole() {
        return "Intern";
    }
}

module.exports = Intern
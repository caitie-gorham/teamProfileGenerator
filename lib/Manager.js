const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // NEED TO DO: need to override the getRole method to get engineer
    getRole() {
        return "Manager";
    }
}

module.exports = Manager
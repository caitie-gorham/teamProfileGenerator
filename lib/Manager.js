const Employee = require("./Employee")

class Manager extends Employee {
    constructor() {
        // NEED TO DO: how to write in parameters from employee class
        super()
    }

    // NEED TO DO: need to override the getRole method to get engineer
}

module.exports = Manager
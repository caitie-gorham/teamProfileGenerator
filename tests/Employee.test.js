// create variable to require the Employee.js file
const Employee = require('../lib/Employee')

describe("Employee class", () => {
    it("should have name, id and email properties", () => {
        const cait = {
            name = "cait",
            id = 1,
            email = "hello@hello.com"
        }
        const cait1 = new Employee("cait", 1, "hello@hello.com")

        expect(cait).toEqual(cait1)
    });
});
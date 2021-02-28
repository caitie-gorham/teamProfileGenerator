// create variable to require the Employee.js file and the Intern.test.js file
const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

describe("Intern class", () => {
    // test the creation of a new instance of the object - should have added property school
    it("should create a new Intern class with name, id, email and school", () => {
        const int = {
            name: "int",
            id: 3,
            email: "howdy@howdy.com",
            school: "TheSchoolOfLife"
        };
        const int1 = new Intern("int", 3, "howdy@howdy.com", "TheSchoolOfLife");

        expect(int).toEqual(int1)
        
    });

})

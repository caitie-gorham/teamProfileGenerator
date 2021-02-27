// create variable to require the Employee.js file and the Engineer.js file
const Engineer = require("../lib/Engineer");
const Employee = require('../lib/Employee');

describe("Engineer class", () => {
    // test the creation of a new instance of the object - should have added property github
    it("should have the name, id and email properties", () => {
        const engineer1 = {
            name = "eng",
            id = 2,
            email = "hey@hey.com",
            github = "@eng"
        }

        const eng1 = new Engineer("eng", 2, "hey@hey.com", "@eng");

        expect(eng).toEqual(eng1);
    });

})



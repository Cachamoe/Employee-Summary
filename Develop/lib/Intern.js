// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super.getName(name);
        super.getId(id);
        super.getEmail(email);
        super.getRole(this.role);
        this.role = "intern";
        this.school = school;
    }

    getSchool() {
        return `Intern's School: ${this.school}`
    } 
}

module.exports = Intern;
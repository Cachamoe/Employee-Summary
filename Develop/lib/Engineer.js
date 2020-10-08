// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        super.getName();
        super.getId();
        super.getEmail();
        super.getRole(this.role);
        this.role = "Engineer";
        this.gitHub = gitHub;
    }

    getGithub() {
        return `Employee Github: ${this.gitHub}`
    } 
}

module.exports = Engineer;
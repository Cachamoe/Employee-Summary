// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super.getName(name);
        super.getId(id);
        super.getEmail(email);
        super.getRole(this.role);
        this.role = "engineer";
        this.gitHub = gitHub;
    }

    getGithub() {
        return `Employee's Github: ${this.gitHub}`
    } 
}

module.exports = Engineer;
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super.getName(name);
        super.getId(id);
        super.getEmail(email);
        super.getRole(this.role);
        this.role = "manager";
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return `Manager's office number: ${this.officeNumber}`
    }
}

module.exports = Manager;
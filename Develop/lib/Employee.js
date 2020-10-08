// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    getName() {
        return `Employee Name: ${this.name}`
    }

    getId() {
        return `Employee Id: ${this.id}`
    }

    getEmail() {
        return `Employee Email: ${this.email}`
    }

    getRole() {
        return `Employee Role: ${this.role}`
    } 
}

module.exports = Employee;
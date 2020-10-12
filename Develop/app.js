const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
let employees = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

promptUser();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function promptUser() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "employeeType",
                message: "Please select one of the following",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "Exit"
                ]
            },
        ]).then(answers => {
            console.log(answers);
            if (answers.employeeType === "Manager") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the manager's name?"
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "What is the manager's id?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the manager's email?"
                    },
                    {
                        type: "input",
                        name: "officeNumber",
                        message: "What is the manager's office number?"
                    },
                ]).then(function (answers) {
                    let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
                    employees.push(manager);
                    promptUser();
                })
            }
            else if (answers.employeeType === "Engineer") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the engineer's name?"
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "What is the engineer's id?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the engineer's email?"
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "What is the engineer's github username?"
                    },
                ]).then(function (answers) {
                    let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                    employees.push(engineer);
                    promptUser();
                })
            }
            else if (answers.employeeType === "Intern") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the intern's name?"
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "What is the intern's id?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the intern's email?"
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "What is the intern's school?"
                    },
                ]).then(function (answers) {
                    let intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                    employees.push(intern);
                    promptUser();
                })
            }
            else {
                const content = render(employees)
                fs.writeFile(outputPath, content, function (err) {
                    if (err) throw err
                    console.log("Success")
                })
            }
        }).catch(error => {
            if (error) {
                console.log("Error");
            }
        })
};
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!




// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.



// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

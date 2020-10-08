const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

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
                message: "What is the employee type?",
                choices: [
                    Manager,
                    Engineer,
                    Intern,
                ]
            },
        ]).then(answers => {
            if (answers.choices === 0) {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        question: "What is the manager's name?"
                    },
                    {
                        type: "input",
                        name: "id",
                        question: "What is the manager's id?"
                    },
                    {
                        type: "input",
                        name: "email",
                        question: "What is the manager's email?"
                    },
                    {
                        type: "input",
                        name: "officeNumber",
                        question: "What is the manager's office number?"
                    },
                ])
                const manager = new manager(answers.choices[0]).push(employees);
            }
            else if (answers.choices === 1) {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        question: "What is the engineer's name?"
                    },
                    {
                        type: "input",
                        name: "id",
                        question: "What is the engineer's id?"
                    },
                    {
                        type: "input",
                        name: "email",
                        question: "What is the engineer's email?"
                    },
                    {
                        type: "input",
                        name: "github",
                        question: "What is the engineer's github username?"
                    },
                ])
                const engineer = new engineer(answers.choices[1]).push(employees);
            }
            else if (answers.choices === 2) {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        question: "What is the intern's name?"
                    },
                    {
                        type: "input",
                        name: "id",
                        question: "What is the intern's id?"
                    },
                    {
                        type: "input",
                        name: "email",
                        question: "What is the intern's email?"
                    },
                    {
                        type: "input",
                        name: "school",
                        question: "What is the intern's school?"
                    },
                ])
                const intern = new intern(answers.choices[2]).push(employees);
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


render();
let employees = [];


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

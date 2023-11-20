const express = require('express');
const { default: inquirer } = require('inquirer');


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database

);

inquirer
.prompt([
    {
        type: "list",
        name: "userChoice",
        message: "What would you like to do?",
        choices: [
            {
                name: "View all employees",
                value: "VIEW_EMPLOYEES"
            }
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
        ],

         
    }
]).then(res => {
    let choice = res.choice
    switch (choice){
        case "VIEW_EMPLOYEES":
            viewEmployees();
            break;
    }
})
function viewEmployees(){

}
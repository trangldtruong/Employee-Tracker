const { prompt } = require("inquirer");
const db = require("./db/connection.js");
require("console.table")
// Tasks

function menu() {
  prompt([
    {
      type: "list",
      name: "userChoice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View all employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "Add Employee",
          value: "ADD_EMPLOYEE",
        },
        { name: "Update Employee Role", value: "UPDATE_ROLE" },
        {
          name: "View All Roles ",
          value: "VIEW_ROLES",
        },
        {
          name: "Add a role",
          value: "ADD_ROLE",
        },
        {
          name: "View All Departments",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "Add Department",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "Quit",
          value: "QUIT",
        },
      ],
    },
  ]).then((res) => {
    let choice = res.userChoice;
    switch (choice) {
      case "VIEW_EMPLOYEES":
        viewEmployees();
        break;
      case "ADD_EMPLOYEE":
        addEmployee();
        break;
      case "UPDATE_ROLE":
        updateRole();
        break;
      case "VIEW_ROLES":
        viewRoles();
        break;
      case "ADD_ROLE":
        addRole();
        break;
      case "VIEW_DEPARTMENTS":
        viewDepartments();
        break;
      case "ADD_DEPARTMENT":
        addDepartment();
        break;
      default:
      //process.abort();
    }
  });
}

menu();

async function viewEmployees() {
  const [empData] = await db.promise().query("SELECT * FROM employee");
  console.table(empData);
  menu()
}

function addEmployee() {
  prompt([
    {
      name: "first_name",
      type: "input",
      message: "What is the employee's first name?",
    },
    {
      name: "last_name",
      type: "input",
      message: "What is the employee's last name?",
    },
    {
      name: "role",
      type: "list",
      message: "What is the employee's role?",
      choice: [
        "Accountant",
        "Legal Team Lead",
        "Lawyer",
        "Customer Service",
        "Sales Lead",
        "Salesperson",
        "Lead Engineer",
      ],
    },
    {
      name: "manager",
      type: "list",
      message: "Who is the employee's manager?",
      choices: [
        "John Doe",
        "Mike Chan",
        "Ashley Rodriguez",
        "Kevin Tupik",
        "Kunal Singh",
        "Malia Brown",
      ],
    },
  ]);
}

function updateRole() {
  prompt([
    {
      name: "employee",
      type: "list",
      message: "Which employee's role do you want to update?",
      choices: [
        "John Doe",
        "Mike Chan",
        "Ashley Rodriguez",
        "Kevin Tupik",
        "Kunal Singh",
        "Malia Brown",
        "Sarah Lourd",
        "Tom Allen",
        "Sam Kash",
      ],
    },
    {
      name: "role",
      type: "list",
      message: "Which role do you want to assign the selected employee?",
      choices: [
        "Sales Lead",
        "Salesperson",
        "Lead Engineer",
        "Software Engineer",
        "Account Manager",
        "Accountant",
        "Legal Team Lead",
      ],
    },
  ]);
}

function viewRoles() {
  db.query("SELECT * FROM role", function (err, results) {
    if (err) throw err;
    console.log(results);
  });
}

function addRole() {
  prompt([
    {
      name: "name",
      type: "input",
      message: "What is the name of the role?",
    },
    {
      name: "salary",
      type: "input",
      message: "What is the salary of the role?",
    },
    {
      name: "department",
      type: "list",
      message: "Which department does the role belong to?",
      choices: ["Engineering", "Finance", "Legal", "Sales", "Service"],
    },
  ]);
}

function viewDepartments() {
  db.query("SELECT * FROM department", function (err, results) {
    if (err) throw err;
    console.log(results);
  });
}

function addDepartment() {
  prompt([
    {
      name: "name",
      type: "input",
      message: "What is the name of the department?",
    },
  ]);
}

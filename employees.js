// dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const util = require('util');
const { init } = require('express/lib/application');

// create the connection to MySQL workbench
let connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employee_db'
});

connection.query = util.promisify(connection.query);

// Begin application after establishing connection
connection.connect(function (err) {
    if (err) throw err;
    initialAction();
})

// Give user a welcome message
console.table (
    "\n---------------Employee Trackerz---------------\n"
)

// Ask user initial action question to see what they would like to do
const initialAction = async () => {
    try {
        let answer = await inquirer.prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do today?',
            choices: [
                'View Employees',
                'View Departments',
                'View Roles',
                'Add Employees',
                'Add Departments',
                'Add Roles',
                'Update Employee Role',
                'Exit'
            ]
        });
        switch (answer.action) {
            case 'View Employees':
            employeeView();
            break;

            case 'View Departments':
                deparmentView();
                break;
            
            case 'View Roles':
                roleView();
                break; 
            
            case 'Add Employees':
                employeeAdd();
                break;

            case 'Add Departments':
                departmentAdd();
                break;
            
            case 'Add Roles':
                roleAdd();
                break;

            case 'Update Employee Role':
                employeeUpdate();
                break;
            
            case 'Exit':
                connection.end();
                break;
        };

    } catch (err) {
        console.log(err);
        initialAction();
    };
}

// Selection to view all employees
const employeeView = async () => {
    console.log('Employee View');
    try {
        let query = 'SELECT * FROM employee';
        connection.query(query, function (err,res) {
            if (err) throw err;
            let employeeArr = [];
            res.forEach(employee => employeeArr.push(employee));
            console.table(employeeArr);
            initialAction();
        });
    } catch (err) {
        console.log(err);
        initialAction();
    };
}

// Selection to view all departments
const departmentView = async () => {
    console.log('Department View');
    try {
        let query = 'SELECT * FROM department';
        connection.query(query, function (err, res) {
            if (err) throw err;
            let departmentArr = [];
            res.forEach(department => departmentArr.push(department));
            console.table(departmentArr);
            initialAction();

        });
    } catch (err) {
        console.log(err);
        initialAction();
    };
}


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

// Selection to view all of the roles
const roleView = async() => {
    console.log('Role view');
    try {
        let query = 'SELECT * FROM role';
        connection.query(query, function(err, res) {
            if (err) throw Array;
            let roleArr = [];
            res.forEach(role => roleArr.push(role));
            console.table(roleArr);
            initialAction();
        });
    } catch (err) {
        console.log(err);
        initialAction();
    };
}
// Selection to add a new employee
const employeeAdd = async () => {
    try {
        console.log('Employee Add');

        let roles = await connection.query("SELECT * FROM role");

        let managers = await connection.query("SELECT * FROM employee");

        let answer = await inquirer.prompt([
            {
                name: 'firstName',
                type: 'input',
                message: 'What is the first name of this Employee?'
            },
            {
                name: 'lastName',
                type: 'input',
                message: 'What is the last name of this Employee?'
            },
            {
                name: 'employeeRoleId',
                type: 'list',
                choices: roles.map((role) => {
                    return {
                        name: role.title,
                        value: role.id
                    }
                }),
                message: "What is this Employee's role id?"
            },
            {
                name: 'employeeManagerId',
                type: 'list',
                choices: managers.map((manager) => {
                    return {
                        name: manager.first_name + " " + manager.last_name,
                        value: manager.id
                    }
                }),
                message: "What is this Employee's Manager's Id?"
            }
        ])

        let result = await connection.query("INSERT INTO employee SET ?", {
            first_name: answer.firstName,
            last_name: answer.lastName,
            role_id: (answer.employeeRoleId),
            manager_id: (answer.employeeManagerId)

        });

        console.log(`${answer.firstName} ${answer.lastName} added successfully.\n`);
        initialAction();
    } catch (err) {
        console.log(err);
        initialAction();
    };
}

// Selection to add new department 
const departmentAdd = async () => {
    try {
        console.log('Department Add')
    let answer = await inquirer.prompt([
        {
            name: 'deptName',
            type: 'input',
            message: 'What is the name of your new department?'
        }
    ]);

    let result = await connection.query("INSERT INTO department SET ?", {
        department_name: answer.deptName
    });

    console.log(`${answer.deptName} added successfully to departments.\n`)
    initialAction();

} catch (err) {
    console.log(err);
    initialAction();
};
}



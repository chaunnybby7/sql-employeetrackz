// dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const util = require('util');

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

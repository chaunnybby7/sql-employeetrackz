# Employee Tracker 


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Top Language](https://img.shields.io/github/languages/top/chaunnybby7/sql-employeetrackz)


## Description

A command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.


## Installation ⌨️

1. Clone the repository to your local development environment.

```
git@github.com:chaunnybby7/sql-employeetrackz.git
```
2. Run `npm install` to install all dependencies. To run this application locally, run `node employees.js` in your CLI. 

3. ```Run `mysql -u root -p` on your root folder.```


4. Source the `schema.sql` and `seeds.sql` file.


## Demo

## Deployed Link 

[🦄](https://chaunnybby7.github.io/sql-employeetrackz/) ✨


[📁 Employee Tracker Github Repo](https://github.com/chaunnybby7/sql-employeetrackz)

## Code Snippets 💻

The following code explains how the Express server initialization and setup. Routes are setup in different js files.

```
// prompts user with list of options to choose from
function options() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'Welcome to our employee database! What would you like to do?',
            choices: [
                    'View all employees',
                    'View all departments',
                    'View all roles',
                    'Add an employee',
                    'Add a department',
                    'Add a role',
                    'Update employee role',
                    'Delete an employee',
                    'EXIT'
                    ]
            }).then(function (answer) {
                switch (answer.action) {
                    case 'View all employees':
                        viewEmployees();
                        break;
                    case 'View all departments':
                        viewDepartments();
                        break;
                    case 'View all roles':
                        viewRoles();
                        break;
                    case 'Add an employee':
                        addEmployee();
                        break;
                    case 'Add a department':
                        addDepartment();
                        break;
                    case 'Add a role':
                        addRole();
                        break;
                    case 'Update employee role':
                        updateRole();
                        break;
                    case 'Delete an employee':
                        deleteEmployee();
                        break;
                    case 'EXIT': 
                        exitApp();
                        break;
                    default:
                        break;
                }
        })
};

```

## Built With :
- [x] [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [x] [NodeJS:] (https://nodejs.org/)


## Authors
YiLin Ong
* [Github] (https://github.com/chaunnybby7)
* [LinkedIn] (https://www.linkedin.com/in/chauntelleong/)

## License 

MIT License

Copyright (c) [2022] [YiLin Ong]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
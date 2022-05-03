INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Bob', 'The Builder', 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Trevor', 'Noah', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Johnny', 'Depp', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Mickey', 'Thompson', 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jane', 'Doe', 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Amy', 'Winehouse', 5, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Ronny', 'Chieng', 6, null);

INSERT INTO department (department_name)
VALUES ('Management');
INSERT INTO department (department_name)
VALUES ('Sales');
INSERT INTO department (department_name)
VALUES ('Accounting');
INSERT INTO department (department_name)
VALUES ('Reception');
INSERT INTO department (department_name)
VALUES ('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES ('General Manager', 120000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ('Salesperson', 80000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ('Accountant', 100000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ('Business Administrative', 55000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ('Human Resource Manager', 800000, 5);
INSERT INTO role (title, salary, department_id)
VALUES ('CEO', 250000, null);
INSERT INTO department (name)
VALUES 
('IT'), 
('Finance & Accounting'),
('Sales & Marketing'),
('Operations');

INSERT INTO role (title, salary, department_id)
VALUES
('Full Stack Developer', 70000, 1),
('Software Engineer', 150000, 1),
('Accountant', 12000, 2),
('Data Analyst', 120000, 2),
('Marketing Analyst', 130000, 3),
('Human Resource Manager', 70000, 3),
('Business Administrative', 90000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Jane', 'Doe', 1, null),
('Mary', 'Smith', 1, 2),
('Dojacat', 'Tidale', 4, null),
('Tina', 'Chen', 3, 3),
('Lewis', 'Moore', 6, null),
('Tyler', 'Brown', 5, 5),
('Kat', 'Allen', 7, null);
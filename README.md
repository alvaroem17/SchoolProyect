# SchoolProyect

## Proyect description
Welcome to the School Administration API, a Node.js-based project designed to simplify and streamline the management of a school's administrative tasks. This API provides a robust foundation for creating, updating, and retrieving essential data related to students, teachers, courses, and more.

## Authors

- Jorge Gil de Arana Vega
- Sara Betancor León
- Álvaro Estévez Muñoz

## Technologies

- ![Node.js](https://img.shields.io/badge/Node.js-8CC84B?style=for-the-badge&logo=node.js&logoColor=white) **Node.js**
- ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) **Express**
- ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white) **Sequelize**
- ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white) **MySQL**
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) **JavaScript (JS)**

## Authorization

- Administrator Role: Administrators have full access to all functionalities. They can make requests and access all tables, including employees, students, classrooms, inventory, roles, and subjects.
- Teacher Role: Teachers have limited access. They can only view information related to students and classrooms. They do not have permissions to perform actions on other tables.
- Other Roles: All other roles do not have any access rights. They cannot view or interact with any of the tables and their data.

## Requeriments

- Nodejs
- Database(Change .env-> Dialect with the one you use)

## Installation

To get started with the School Administration API, just get into the repo and run:

``` npm i ```

## Usage

Create .env file to your own settings. To start the api server just run:

``` node index.js```

## Data structure and models

![image](https://github.com/alvaroem17/SchoolProyect/assets/57074112/6fda5e04-27ee-44ca-aaeb-7751fc8743af)

### Relations

#### Many to many
- Ref: "employees"."id" < "classroomTeacher"."teacherId"
- Ref: "classroom"."id" < "classroomTeacher"."classroomId"

#### One to many
- Ref: "roles"."id" < "employees"."rolId"
- Ref: "subjects"."id" < "employees"."subjectsId"
- Ref: "students"."classroomId" < "classroom"."id"
- Ref: "classroom"."id" < "inventory"."classroomId"

#### One to one
- Ref: "contactInfo"."id" - "students"."contactId"

## Endpoints

### Students

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /students                  | YES   | Admin,teacher | Get all users                | -                          | [{ student }]                         |
| GET    | /students/:studentId        | YES   | Admin,teacher | Get one user               | student_id                  | { student }                           |
| GET    | /students/:studentId/contactInfo       | YES   | Admin | Get one user contactInfo              | student_id                  | { student,contactInfo }                           |
| PUT    | /students/:studentId        | YES   | Admin | Update user                | student_id                  | "Student updated"                     |
| POST   | /students                  | YES   | Admin | Create one user            | req.body                   | "Student created"                     |
| DELETE | /students/:studentId        | YES   | Admin | Remove one user            | student_id                  | "Student deleted"                     |

### Employees

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /employees                  | YES   | Admin | Get all employers                | -                          | [{ employee }]                         |
| GET    | /employees/:employeeId        | YES   | Admin | Get one employee               | employee_id                  | { employee }                           |
| GET    | /employees/:employeeId/classroom        | YES   | Admin | Get one employee classroom              | employee_id                  | { employee,classroom }                           |
| PUT    | /employees/:employeeId        | YES   | Admin | Update employee                | employee_id                  | "Employee updated"                     |
| POST   | /employees                  | YES   | Admin | Create one employee            | req.body                   | "Employee created"                     |
| DELETE | /employees/:employeeId        | YES   | Admin | Remove one employee            | employee_id                  | "Employee deleted"                     |

### Classroms

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /classroom                  | YES   | Admin,teacher | Get all classrooms                | -                          | [{ classroom }]                         |
| GET    | /classrooms/:classroomId        | YES   | Admin,teacher | Get one classroom               | classroom_id                  | { classroom }                           |
| GET    | /classrooms/:classroomId/employees      | YES   | Admin | Get one classroom teacher             | classroom_id                  | { classroom,teacher }                           |
| PUT    | /classrooms/:classroomId        | YES   | Admin | Update classroom                | classroom_id                  | "Classroom updated"                     |
| POST   | /classrooms                  | YES   | Admin | Create one classroom            | req.body                   | "Classroom created"                     |
| DELETE | /classrooms/:classroomId        | YES   | Admin | Remove one classroom            | classroom_id                  | "Classroom deleted"                     |

### Subjects

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /subjects                  | YES   | Admin | Get all subjects                | -                          | [{ subject }]                         |
| GET    | /subjects/:subjectId        | YES   | Admin | Get one subject               | subject_id                  | { subject }                           |
| PUT    | /subjects/:subjectId        | YES   | Admin | Update subject                | subject_id                  | "Subject updated"                     |
| POST   | /subjects                  | YES   | Admin | Create one subject            | req.body                   | "Subject created"                     |
| DELETE | /subjects/:subjectId        | YES   | Admin | Remove one subject            | subject_id                  | "Subject deleted"                     |

### Inventory

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /inventories                  | YES   | Admin | Get all inventories                | -                          | [{ inventory }]                         |
| GET    | /inventories/:inventoryId        | YES   | Admin | Get one inventory               | inventory_id                  | { inventory }                           |
| GET    | /inventories/total       | YES   | Admin | Get total count               | -                 | total                           |
| PUT    | /inventories/:inventoryId        | YES   | Admin | Update inventory                | inventory_id                  | "Inventory updated"                     |
| POST   | /inventories                  | YES   | Admin | Create one inventory            | req.body                   | "Inventory created"                     |
| DELETE | /inventories/:inventoryId        | YES   | Admin | Remove one inventory            | inventory_id                  | "Inventory deleted"                     |

### Roles

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /roles                  | YES   | Admin | Get all roles                | -                          | [{ role }]                         |
| GET    | /roles/:roleId        | YES   | Admin | Get one role               | role_id                  | { role }                           |
| PUT    | /roles/:roleId        | YES   | Admin | Update role                | role_id                  | "Role updated"                     |
| POST   | /roles                  | YES   | Admin | Create one role            | req.body                   | "Role created"                     |
| DELETE | /roles/:roleId        | YES   | Admin | Remove one role            | role_id                  | "Role deleted"                     |

### ContactInfo

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /contactInfo                  | YES   | Admin | Get all contactInfo                | -                          | [{ contactInfo }]                         |
| GET    | /contactInfo/:contactInfoId        | YES   | Admin | Get one contactInfo               | contactInfo_id                  | { contactInfo }                           |
| GET    | /contactInfo/:contactInfoId/student       | YES   | Admin | Get one contactInfo user             | contactInfo_id                  | { student,contactInfo }                           |
| PUT    | /contactInfo/:contactInfoId        | YES   | Admin | Update contactInfo                | contactInfo_id                  | "contactInfo updated"                     |
| POST   | /contactInfo                  | YES   | Admin | Create one contactInfo            | req.body                   | "contactInfo created"                     |
| DELETE | /contactInfo/:contactInfoId        | YES   | Admin | Remove one contactInfo            | contactInfo_id                  | "contactInfo deleted"                     |

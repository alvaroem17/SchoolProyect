# SchoolProyect

## Proyect description
Welcome to the School Administration API, a Node.js-based project designed to simplify and streamline the management of a school's administrative tasks. This API provides a robust foundation for creating, updating, and retrieving essential data related to students, teachers, courses, and more.


## Requeriments

- Nodejs
- Database(Change .env-> Dialect with the one you use)

## Installation

To get started with the School Administration API, just get into the repo and run:

``` npm i ```

## Usage

Create .env file to your own settings. To start the api server just run:

``` node index.js```

## Endpoints

### Students

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /students                  | YES   | Admin,professor | Get all users                | -                          | [{ student }]                         |
| GET    | /students/:studentId        | YES   | Admin,professor | Get one user               | student_id                  | { student }                           |
| GET    | /students/:studentId/contactInfo       | YES   | Admin | Get one user contactInfo              | student_id                  | { student,contactInfo }                           |
| PUT    | /students/:studentId        | YES   | Admin | Update user                | student_id                  | "Student updated"                     |
| POST   | /students                  | YES   | Admin | Create one user            | req.body                   | "Student created"                     |
| DELETE | /students/:studentId        | YES   | Admin | Remove one user            | student_id                  | "Member deleted"                     |

### Employees

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /members                  | YES   | Admin | Get all users                | -                          | [{ member }]                         |
| GET    | /members/:memberId        | YES   | Members | Get one user               | member_id                  | { member }                           |
| PUT    | /members/:memberId        | YES   | Members | Update user                | member_id                  | "Member updated"                     |
| POST   | /members                  | YES   | Admin | Create one user            | req.body                   | "Member created"                     |
| DELETE | /members/:memberId        | YES   | Members | Remove one user            | member_id                  | "Member deleted"                     |

### Classroms

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /members                  | YES   | Admin | Get all users                | -                          | [{ member }]                         |
| GET    | /members/:memberId        | YES   | Members | Get one user               | member_id                  | { member }                           |
| PUT    | /members/:memberId        | YES   | Members | Update user                | member_id                  | "Member updated"                     |
| POST   | /members                  | YES   | Admin | Create one user            | req.body                   | "Member created"                     |
| DELETE | /members/:memberId        | YES   | Members | Remove one user            | member_id                  | "Member deleted"                     |

### Subjects

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /members                  | YES   | Admin | Get all users                | -                          | [{ member }]                         |
| GET    | /members/:memberId        | YES   | Members | Get one user               | member_id                  | { member }                           |
| PUT    | /members/:memberId        | YES   | Members | Update user                | member_id                  | "Member updated"                     |
| POST   | /members                  | YES   | Admin | Create one user            | req.body                   | "Member created"                     |
| DELETE | /members/:memberId        | YES   | Members | Remove one user            | member_id                  | "Member deleted"                     |

### Inventory

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /members                  | YES   | Admin | Get all users                | -                          | [{ member }]                         |
| GET    | /members/:memberId        | YES   | Members | Get one user               | member_id                  | { member }                           |
| PUT    | /members/:memberId        | YES   | Members | Update user                | member_id                  | "Member updated"                     |
| POST   | /members                  | YES   | Admin | Create one user            | req.body                   | "Member created"                     |
| DELETE | /members/:memberId        | YES   | Members | Remove one user            | member_id                  | "Member deleted"                     |

### Roles

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /members                  | YES   | Admin | Get all users                | -                          | [{ member }]                         |
| GET    | /members/:memberId        | YES   | Members | Get one user               | member_id                  | { member }                           |
| PUT    | /members/:memberId        | YES   | Members | Update user                | member_id                  | "Member updated"                     |
| POST   | /members                  | YES   | Admin | Create one user            | req.body                   | "Member created"                     |
| DELETE | /members/:memberId        | YES   | Members | Remove one user            | member_id                  | "Member deleted"                     |

## Data structure and models

![image](https://github.com/alvaroem17/SchoolProyect/assets/57074112/5e7322fa-3205-48cd-be89-1d961836abee)

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

## Authorization

- Administrator Role: Administrators have full access to all functionalities. They can make requests and access all tables, including employees, students, classrooms, inventory, roles, and subjects.
- Teacher Role: Teachers have limited access. They can only view information related to students and classrooms. They do not have permissions to perform actions on other tables.
- Other Roles: All other roles do not have any access rights. They cannot view or interact with any of the tables and their data.

## Technologies

- ![Node.js](https://img.shields.io/badge/Node.js-8CC84B?style=for-the-badge&logo=node.js&logoColor=white) **Node.js**
- ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) **Express**
- ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white) **Sequelize**
- ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white) **MySQL**
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) **JavaScript (JS)**


## Authors

- Jorge Gil de Arana Vega
- Sara Betancor León
- Álvaro Estévez Muñoz

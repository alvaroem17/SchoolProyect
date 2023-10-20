# SchoolProyect

# Proyect description
Welcome to the School Administration API, a Node.js-based project designed to simplify and streamline the management of a school's administrative tasks. This API provides a robust foundation for creating, updating, and retrieving essential data related to students, teachers, courses, and more.


# Requeriments



# Installation

To get started with the School Administration API, just get into the repo and :

``` npm i ```

# Usage



# Endpoints

### Students

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /members                  | YES   | Admin | Get all users                | -                          | [{ member }]                         |
| GET    | /members/:memberId        | YES   | Members | Get one user               | member_id                  | { member }                           |
| PUT    | /members/:memberId        | YES   | Members | Update user                | member_id                  | "Member updated"                     |
| POST   | /members                  | YES   | Admin | Create one user            | req.body                   | "Member created"                     |
| DELETE | /members/:memberId        | YES   | Members | Remove one user            | member_id                  | "Member deleted"                     |

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

# Data structure and models

![image](https://github.com/alvaroem17/SchoolProyect/assets/57074112/5e7322fa-3205-48cd-be89-1d961836abee)


# Authorization


# Technologies

- ![Node.js](![image](https://github.com/alvaroem17/SchoolProyect/assets/140712461/c53b0d43-b381-49a4-bffa-788e24723bde)
) Node.js
- ![Express](![image](https://github.com/alvaroem17/SchoolProyect/assets/140712461/d00f3a44-af52-4168-a975-bd2607c78629)
) Express
- ![Sequelize](![image](https://github.com/alvaroem17/SchoolProyect/assets/140712461/029868f0-fe4f-4986-bfde-1a3cfa0b2fef)
) Sequelize
- ![MySQL](![image](https://github.com/alvaroem17/SchoolProyect/assets/140712461/a5dadfeb-52a7-4230-9c9c-930d4b2b4617)
) MySQL
- ![JavaScript](![image](https://github.com/alvaroem17/SchoolProyect/assets/140712461/cf38245e-be43-49dc-b874-e7bc4a94e5fc)
) JavaScript (JS)


# Authors

- Jorge Gil de Arana Vega
- Sara Betancor León
- Álvaro Estévez Muñoz


# School Administration API

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Welcome to the School Administration API, a Node.js-based project designed to simplify and streamline the management of a school's administrative tasks. This API provides a robust foundation for creating, updating, and retrieving essential data related to students, teachers, courses, and more.

## Features

- **Student Management**: Easily add, update, or retrieve student information, including profiles, grades, and attendance records.

- **Teacher Management**: Efficiently manage teacher data, including personal information, subject expertise, and assignments.

- **Course Administration**: Create and organize courses, assign teachers, and enroll students.

- **Attendance Tracking**: Keep track of student attendance and generate reports for analysis.

- **Gradebook**: Manage and calculate student grades based on assignments, quizzes, and exams.

- **User-Friendly**: Designed with a simple and intuitive API interface, making it easy to integrate into your school's existing systems.

## Installation

To get started with the School Administration API, follow the installation steps in the [Installation Guide](docs/installation.md).

## Usage

Learn how to use the API by referring to the [API Documentation](docs/api-reference.md). It provides detailed information on available endpoints, request/response examples, and authentication.

## Contributing

We welcome contributions from the open-source community. If you'd like to contribute to this project, please review our [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or need assistance, feel free to [contact us](mailto:contact@example.com).

Thank you for choosing the School Administration API for your educational institution. We hope it simplifies your administrative processes and enhances the overall educational experience.

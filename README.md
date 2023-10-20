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
![GitHub Logo](<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"/></svg>)
)


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

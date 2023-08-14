# CRUD Web Application with Next.js, Prisma, and TailwindCSS

This project demonstrates the creation of a simple CRUD (Create, Read, Update, Delete) web application using Next.js, Prisma (a Node.js ORM for SQL databases), and TailwindCSS for styling. Through this project, you will learn how to interact with a database, implement various Next.js concepts, and style your application using TailwindCSS.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Database](#database)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The main goal of this project is to provide a hands-on experience in building a web application that performs CRUD operations. You'll create a simple application where users can interact with a database, adding, reading, updating, and deleting data.

## Features

- Create records in the database
- Read and display data from the database
- Update existing records
- Delete records from the database

## Technologies Used

- Next.js: A React framework for building server-rendered applications.
- Prisma: A modern Node.js ORM for SQL databases, simplifying database interactions.
- TailwindCSS: A utility-first CSS framework for designing responsive and stylish interfaces.

## Getting Started

1. Clone this repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Set up your database connection in the Prisma configuration file.
4. Run database migrations to create the necessary tables using `npx prisma migrate dev`.
5. Start the Next.js development server using `npm run dev`.

## Usage

Once the development server is running, open your browser and navigate to `http://localhost:3000` to access the application. You can perform CRUD operations using the provided user interface.

## API Routes

This project demonstrates the creation of API routes using Next.js. These routes handle data interaction with the database.

## Database

Prisma is used as the ORM to interact with a SQL database. Database models and relationships are defined in the Prisma schema file. Migrations are used to keep the database schema in sync with the defined models.

## Styling

TailwindCSS is utilized to style the application, providing a responsive and visually appealing interface. The utility-first approach of TailwindCSS makes it easy to create custom styles and layouts.

## Contributing

Contributions are welcome! If you find any issues or improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

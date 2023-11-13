# Assignment Three: Cleanup, Refactoring & Adding REST Endpoints

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Features](#features)
- [REST API Endpoints](#rest-api-endpoints)
- [Service Classes](#service-classes)
- [Code Quality](#code-quality)
- [Login Credentials](#login-credentials)
- [Data Source](#data-source)

## Prerequisites
Ensure you have the following installed:
- Node.js
- npm

## Installation
1. Clone this repository or download and extract the ZIP file.
2. Navigate to the project directory.
3. Install the required dependencies using npm:
    bash
    npm install express
    npm install ejs
    # Optionally, use npm i --save-dev nodemon for server auto-refresh.
    

## Running the Application
1. Start the server:
    bash
    node server.js
    # Or use npm start
    
2. Access the application via a web browser at the localhost URL.

## Features
- Authentication with login capabilities.
- List and Detail Views for users.
- CRUD operations for users and products.

## REST API Endpoints
- *Users Endpoints*:
  - `GET /api/users`: Fetch all users.
  - `GET /api/users/:id`: Fetch a single user.
  - `DELETE /api/users/:id`: Delete a user.
  - `POST /api/users`: Add a user.
- *Products Endpoints*:
  - `GET /api/products`: Fetch all products.
  - `GET /api/products/:id`: Fetch a single product.
  - `DELETE /api/products/:id`: Delete a product.
  - `POST /api/products`: Add a product.
- *Login Endpoint*:
  - `POST /api/login`: Authenticate user.

## Service Classes
- *Authentication Service*: Handles user authentication.
- *Users Service*: Manages user-related operations.
- *Products Service*: Manages product-related operations.

## Code Quality
- Adherence to clean code principles.
- Well-organized and commented code.
- Best practices for routing and middleware in Express.

## Login Credentials
- Username: admin
- Password: admin123

## Data Source
- Utilizes static JSON data for user and product information.

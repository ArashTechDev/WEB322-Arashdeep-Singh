# Assignment Four: Replace Fake Data Files with Database Calls

## Overview
This assignment involves enhancing a Node.js application by replacing static file-based data handling with database interactions. The focus is on integrating either a relational database (Postgres) or MongoDB for CRUD operations related to Users, Products, and a new class, Orders.

## Objectives
1. **Database Integration**: Replace static file-based data handling with database interactions.
2. **CRUD Operations**: Implement CRUD operations for Users, Products, and Orders.

## Requirements

### Database Setup
Choose either a Postgres or MongoDB database and set it up as per the course instructions:
- [Postgres Relational DB Instructions](https://webprogrammingtoolsandframeworks.sdds.ca/Relational-Database-Postgres/introduction-to-postgres)
- [Mongo DB Instructions](https://webprogrammingtoolsandframeworks.sdds.ca/NoSQL-Database-MongoDB/introduction-to-mongodb)

### CRUD Endpoints for Orders
Implement the following CRUD endpoints for the Orders class:
- `GET /api/orders`: Returns all orders as a JSON array.
- `GET /api/orders/:id`: Returns a single order as JSON.
- `DELETE /api/orders/:id`: Deletes a single order and returns a success JSON object.
- `POST /api/orders`: Adds an order to the orders array and returns the new order as JSON.

### Database Dependencies
Install and set up Sequelize for Postgres or appropriate dependencies for MongoDB.

### Database Connection
Establish a connection to your chosen database in your `server.js` file.

### Data Modeling
- **Sequelize**: Create Sequelize models for Users, Products, and Orders.
- **Mongo**: Create Mongo schemas for Users, Products, and Orders.

### Service Classes
Connect your service class endpoints to the corresponding database models.

### Bonuses
- **Bonus 1**: Implement relationships between Orders, Users, and Products.
- **Bonus 2**: Modify the Users class to include a list of the user's orders.

### Code Quality
Ensure your code is clean, well-organized, and well-commented. Follow best practices for routing and middleware in Express.

## Documentation
Provide instructions on how to run the application locally in this README.

## Submission
Submit your assignment through GitHub on the **main** branch. Include a link to your GitHub repository containing the code.

---
*Note: Replace the links and instructions as per your specific assignment requirements and repository structure.*

# Assignment Four: Database Integration in Node.js Application

## Overview
This project is the successful completion of an assignment where static file-based data handling in a Node.js application was replaced with database interactions using Postgres. CRUD operations have been implemented for three main entities: Users, Products, and Orders. The application runs on a server listening on port 1500.

## Features
- **Database Integration**: Replaced static file handling with Postgres database interactions.
- **CRUD Operations**: Implemented for Users, Products, and Orders entities.

## Getting Started

### Prerequisites
- Node.js installed on your machine.
- Postgres database installed and running.

### Installation and Setup
1. **Clone the Repository**
```
git clone https://github.com/ArashTechDev/WEB322-Arashdeep-Singh.git
cd WEB322-Arashdeep-Singh/Assignment04/Assignment04
```
2. **Install Dependencies**
```
npm install
```
3. **Set Up Postgres Credentials**
4. **Start the Server**

### Using the API
The server will start on port 1500. Access the API endpoints through `http://localhost:1500/api/`.
- Access various endpoints like `/api/users`, `/api/products`, and `/api/orders` for CRUD operations.

### CRUD Endpoints for Orders (I did for users,products as well) 

- `GET /api/orders`: Returns all orders as a JSON array.
- `GET /api/orders/:id`: Returns a single order as JSON.
- `DELETE /api/orders/:id`: Deletes a single order and returns a success JSON object.
- `POST /api/orders`: Adds an order to the orders array and returns the new order as JSON.








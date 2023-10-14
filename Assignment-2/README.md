# Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Features](#features)
- [Login Credentials](#login-credentials)
- [Data Source](#data-source)

## Prerequisites
Ensure you have the following installed on your local machine:
- Node.js
- npm

## Installation
1. Clone this repository or download and extract the ZIP file.
2. Navigate to the project directory.
3. Install the required dependencies using npm:
    ```bash
    npm install express
    npm install ejs
    // could also use npm i--save-dev-nodemon, also make necessary changes in script to keep server refreshing)
    ```

## Running the Application
1. Start the server using the following command:
    ```bash
    node server.js
    npm start
    ```
2. Open a web browser and navigate to the localhost URL to access the application.

## Features
- **Authentication**: Users can log in using hardcoded credentials.
- **List View**: Displays a paginated list of users.
- **Detail Page**: Showcases additional details about a selected user.

## Login Credentials
To explore the application further, use the following login credentials:
- **Name**: admin
- **Password**: admin123

A successful login will guide users to another section of the application, displaying more about the community members.

## Data Source
The application leverages static JSON data from the `data` directory to populate both the list and detail views.


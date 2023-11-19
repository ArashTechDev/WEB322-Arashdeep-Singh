# Assignment Rubric: Cleanup, Refactoring & Adding REST Endpoints to your Application

## General Information

- **Assignment Title:** Cleanup, Refactoring & Adding REST Endpoints to your Application
- **Submission Method:** Git Repository on the **main branch**

---

## Functional Requirements (70 points)

| Requirement                                                 | Points |     |
| ----------------------------------------------------------- | ------ | --- |
| Github                                                      |        |     |
| - code is on the main branch                                | 5      | 5   |
| - node_modules is not in the repository                     | 5      | 5   |
| Routes                                                      |        |     |
| - api CRUD endpoints added for users                        | 10     | 10  |
| - api CRUD endpoints added for products                     | 10     |     |
| - api login endpount added                                  | 10     | 10  |
| - routes are refactored router modules                      | 15     | 15  |
| Data                                                        |        |     |
| - user data is moved under data folder                      | 5      | 5   |
| - product data is moved under data folder                   | 5      | 5   |
| Service Classes                                             |        |     |
| - create a User Service for CRUD operations                 | 10     | 10  |
| - create a Product Service for CRUD operations              | 10     | 7   |
| - create an AuthenticationService for simple authentication | 15     | 15  |

## Total Score: 97 / 100

### Comments:

Excellent work! Only thing that kept you from getting perfect was line 1 in
product services.

`const { promiseImpl } = require("ejs");`

It's not required and causes an error on startup. When I remove that line things look great.

Well done.

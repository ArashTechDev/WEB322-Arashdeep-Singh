# Assignment Rubric: Cleanup, Refactoring & Adding REST Endpoints to your Application

## General Information

- **Assignment Title:** Cleanup, Refactoring & Adding REST Endpoints to your Application
- **Submission Method:** Git Repository on the **main branch**

---

## Functional Requirements (100 points)

| Requirement                                           | Points |     |
| ----------------------------------------------------- | ------ | --- |
| DB                                                    |        |     |
| - neondb created                                      | 10     | 10  |
| Routes                                                |        |     |
| - api CRUD endpoints added for orders                 | 10     | 10  |
| Server                                                |        |     |
| - sequelize or mongo dependencies added               | 10     | 10  |
| - successfully connect to db                          | 10     | 10  |
| Create Database Objects Definitions                   |        |     |
| - User                                                | 10     | 10  |
| - Product                                             | 10     | 10  |
| - Order                                               | 10     | 10  |
| Change your service classes use your Database objects |        |     |
| - User                                                | 10     | 10  |
| - Product                                             | 10     | 10  |
| - Order                                               | 10     | 10  |

## Total Score: 100/ 100

Great job Arashdeep!  Not much to comment on here.  One recommendation I'd have
is let Sequelize handle the primary key for you.  Nothing wrong with what you have
but let the framework do the work for you.  You can do this by simply removing the id
in the definitions.

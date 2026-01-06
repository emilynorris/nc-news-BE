# NC News

## Summary
Fully populated database with RESTful server for NC News site.

In this back end project:
1. Test and development databases will be seeded
2. A database connection file will be set up
3. Connection to test and development databases will be possible using .env files

TDD will be used. 

<!-- ## Hosted link -->

## Getting started
### Installing dependencies
1. To prevent committing broken code, this project uses Git hooks via Husky. Run ```npm install``` to enable Husky.
2. In order to safely create dynamic SQL queries, the pg-format is required. Run ```npm install pg-format``` to install.
3. Express is used for server creation and endpoint creation. Run ```npm install express``` to install.
4. In order to test API endpoints, Supertest is required. SuperTest should be installed as a dev dependency using ```npm i -D supertest```. As it is only used for testing, it will not be required for production code. It should then be required or imported at the top of the relevant .test.js file as request, along with the Express app that is being tested.

### Creating the databases
**Set up environment variables**
When accessing a single database, it is possible to store the database name in a .env file and use the dotenv package to read this file and set the environment variable of PGDATABASE to the process.env. When there are different databases to connect to depending on the environment, separate .env files are needed.

-Create .env.development file. In order to connect locally populate with *PGDATABASE = development_database_name*
-Create .env.test file. In order to connect locally populate with *PGDATABASE = test_database_name*



**Run the setup script**
-To create both databases, run ```npm run setup-dbs```

**Verify setup**
-Run ```npm run test-seed``` to test seed function
-Run ```npm run seed-dev``` to call seed function with development data
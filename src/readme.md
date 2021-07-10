# tools and framework used

1. typeorm
   opensource
   powerful querybuilder
   discussed well on stackoverflow,youtube tech channels
   good documentation support

2. database mysql
   relational database pattern preferred due to the nature of the project

3. testing
   supertest/chai mocha
   fast and reliable testing for apis
   postman

4. All the rest api endpoints are inside the routes folder.
   src/routes/index.ts aggregates routes for Author,Book, User and Authentication.
   Open the following files inside src/route to see the respective endpoints
   AuthenticationRouter.ts  
   AuthorRoute.ts  
   BookRoute.ts
   UserRoute.ts

5. the apis are directed to the respective Controllers (src/Controller)
   respective controllers take help of services (/src/service) and repositories (/src/repository) to resolve the logic.

6. the entities are modelled in src/entity
   Author.ts Book.ts User.ts

7. src/middleware takes care of validations and jwt authentication and role based authorisation

8. an admin user can be created by running the migration after starting the server (npm start)
   npm run migration:run

# project structure

.
├── config
│   └── config.ts ===================JWT secret key is added here
├── constants
│   └── Constants.ts=================ERROR CODES added as enum
├── controller
│   ├── AuthenticationController.ts====Controller handling authentication request
│   ├── AuthorController.ts============Controller handling author CRUD ops
│   ├── BookController.ts==============Controller handling user CRUD ops
│   ├── helpers========================helper functions for the Controllers
│   │   └── PrepareResponse.ts
│   └── UserController.ts==============Controller handling User CRUD ops
├── dao================================embedded objects used by entities
│   ├── Contact.ts
│   └── Name.ts
├── entity=============================entity classes modelling the database
│   ├── Author.ts
│   ├── Book.ts
│   └── User.ts
├── functionalinterfaces==============interfaces
│   ├── ContentInterface.ts
│   └── PersonInterface.ts
├── index.ts==========================server creation happens here
├── middleware========================contains validations and jwt authentication and role based authorisation
│   ├── jwt
│   │   ├── checkJwt.ts===============checks JWT key
│   │   └── checkRole.ts==============implements role based authorisation
│   └── validations===================validations for data entry
│   ├── authorValidations.ts
│   ├── bookValidations.ts
│   └── userValidations.ts
├── migration========================migration to create an ADMIN USER
│   └── createAdminUser.ts
├── readme.md
├── repository=======================to access db
│   ├── AuthorRepository.ts
│   ├── BookRepository.ts
│   └── UserRepository.ts
├── roles============================roles provided to users
│   └── accessRole.ts
├── routes===========================api endpoints are present here
│   ├── AuthenticationRouter.ts
│   ├── AuthorRoute.ts
│   ├── BookRoute.ts
│   ├── index.ts
│   └── UserRoute.ts
├── service==========================business logic impl
│   ├── AuthenticationService.ts
│   ├── AuthorService.ts
│   ├── BookService.ts
│   └── UserService.ts
└── test=============================test cases are added here
├── TestFactory.ts
└── UserTests.test.ts

# Instructions

1. npm start
2. npm run migration:run

# Sample Json for postman

1. Login
   {
   "Username":"admin",
   "Password":"admin"
   }
2. Create User

   {
   "name": {
   "first": "Ron",
   "last": "Weasley"
   },
   "contact": {
   "phone": "8884695147",
   "email": "ron@gmail.com",
   "address": "ettukuzhi"
   },
   "age": 20,
   "role": "ADMIN",
   "username": "ronald",
   "password": "ronald"
   }

3. Create Author
   "name": {
   "first": "sree",
   "last": "vidya"
   },
   "contact": {
   "phone": "8884695147",
   "email": "vidya426@gmail.com",
   "address": "ettukuzhi"
   },
   "age": 30
   }

4. Create Book
   { "name":"harrypotter",
   "description":"magic",
   "bookCopies": 2,
   "bookAuthors": [
   {
   "contact": {
   "phone": "8884695147",
   "email": "vidya426@gmail.com",
   "address": "ettukuzhi"
   },
   "name": {
   "first": "jk",
   "last": "rowling"
   },
   "age": 30
   }
   ]
   }

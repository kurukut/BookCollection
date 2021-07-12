# Instructions

## 1. Prepare Database

Run mysql in a docker container.

```
docker run --name mysql1 -p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=password \
-e MYSQL_USER=bookshelf_user \
-e MYSQL_ROOT_HOST='%' \
-e MYSQL_PASSWORD=password \
-e MYSQL_DATABASE=bookshelf \
-d mysql/mysql-server:5.6
```

## 2. Start the database and initlize the table

```
docker exec -it mysql1 mysql -uroot -p
```

## 2. Run Book Management App

1. npm install
2. npm start
3. npm run migration:run # Add an admin user

# Sample Json for postman

1. Login

```
   {
   "Username":"admin",
   "Password":"admin"
   }
```

2. Create User

```
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
```

3. Create Author

```
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
```

4. Create Book

```
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
```

# Tools and framework used

1. typeorm

   - opensource
   - powerful querybuilder
   - discussed well on stackoverflow,youtube tech channels
   - good documentation support

2. database mysql

   - relational database pattern preferred due to the nature of the project

3. testing

   - supertest/chai mocha
   - fast and reliable testing for apis
   - postman

4. All the rest api endpoints are inside the routes folder.

   - src/routes/index.ts aggregates routes for Author,Book, User and Authentication.
   - Open the following files inside src/route to see the respective endpoints
   - AuthenticationRouter.ts
   - AuthorRoute.ts
   - BookRoute.ts
   - UserRoute.ts

5. the apis are directed to the respective Controllers (src/Controller)

   - respective controllers take help of services (/src/service) and repositories (/src/repository) to resolve the logic.

6. the entities are modelled in src/entity

   - Author.ts Book.ts User.ts

7. src/middleware takes care of validations and jwt authentication and role based authorisation

8. an admin user can be created by running the migration after starting the server (npm start)

```
npm run migration:run
```

The user table looks like this post migration

```
   mysql> select \* from user;
   +----+-----+-------+----------+--------------------------------------------------------------+-----------+----------+--------------+-----------------------+---------------------+
   | id | age | role | username | password | nameFirst | nameLast | contactPhone | contactEmail | contactAddress |
   +----+-----+-------+----------+--------------------------------------------------------------+-----------+----------+--------------+-----------------------+---------------------+
   | 1 | 20 | ADMIN | admin | $2a$08$V7/5ACC2nhlgqyhC2iAlYOfclagjUjrABotNej7BtMg9yqEGC6Ese | Harry | Potter | 123456789 | HarryPotter@gmail.com | Privet Drive,London |
   +----+-----+-------+----------+--------------------------------------------------------------+-----------+----------+--------------+-----------------------+---------------------+
   1 row in set (0.00 sec)
```

# Database structure

```
1. mysql> show tables;
   +--------------------------+
   | Tables_in_bookshelf |
   +--------------------------+
   | author |
   | book |
   | book_book_authors_author |
   | user |
   +--------------------------+
   4 rows in set (0.00 sec)

2. mysql> describe author;
   +----------------+--------------+------+-----+---------+----------------+
   | Field | Type | Null | Key | Default | Extra |
   +----------------+--------------+------+-----+---------+----------------+
   | id | int | NO | PRI | NULL | auto_increment |
   | age | int | NO | | NULL | |
   | nameFirst | varchar(255) | NO | | NULL | |
   | nameLast | varchar(255) | NO | | NULL | |
   | contactPhone | varchar(255) | NO | UNI | NULL | |
   | contactEmail | varchar(255) | NO | UNI | NULL | |
   | contactAddress | varchar(255) | NO | | NULL | |
   +----------------+--------------+------+-----+---------+----------------+

3. mysql> describe book;
   +-------------+--------------+------+-----+---------+----------------+
   | Field | Type | Null | Key | Default | Extra |
   +-------------+--------------+------+-----+---------+----------------+
   | id | int | NO | PRI | NULL | auto_increment |
   | name | varchar(255) | NO | UNI | NULL | |
   | description | varchar(255) | NO | | NULL | |
   | bookCopies | int | NO | | 1 | |
   +-------------+--------------+------+-----+---------+----------------+
   4 rows in set (0.00 sec)

4. mysql> describe book_book_authors_author ;
   +----------+------+------+-----+---------+-------+
   | Field | Type | Null | Key | Default | Extra |
   +----------+------+------+-----+---------+-------+
   | bookId | int | NO | PRI | NULL | |
   | authorId | int | NO | PRI | NULL | |
   +----------+------+------+-----+---------+-------+
   2 rows in set (0.00 sec)

5. mysql> describe user;
   +----------------+--------------+------+-----+---------+----------------+
   | Field | Type | Null | Key | Default | Extra |
   +----------------+--------------+------+-----+---------+----------------+
   | id | int | NO | PRI | NULL | auto_increment |
   | age | int | NO | | NULL | |
   | role | varchar(255) | NO | | NULL | |
   | username | varchar(255) | NO | UNI | NULL | |
   | password | varchar(255) | NO | | NULL | |
   | nameFirst | varchar(255) | NO | | NULL | |
   | nameLast | varchar(255) | NO | | NULL | |
   | contactPhone | varchar(255) | NO | UNI | NULL | |
   | contactEmail | varchar(255) | NO | UNI | NULL | |
   | contactAddress | varchar(255) | NO | | NULL | |
   +----------------+--------------+------+-----+---------+----------------+
   10 rows in set (0.00 sec)
```

# Project structure

```
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
```

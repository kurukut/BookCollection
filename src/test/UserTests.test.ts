/*
added a sample test case for POST /authors
TODO
1. The production code has User entity role which is of type enum
sqljs used for testing does not support enum datatype at the moment.
for running the test enum has to be converted to a normal string

2. Right now in AuthorRoute.ts  POST authors has checkJwt and checkRole as middleware
functions.
This test does not handle validations at the moment.

*/

require("module-alias/register");

import { assert } from "chai";
import { Author } from "../entity/Author";
import { TestFactory } from "./TestFactory";
import { plainToClass } from "class-transformer";

describe("Testing author component", () => {
  // Create instances
  const factory: TestFactory = new TestFactory();

  const testAuthorJson = {
    id: 1,
    age: 30,
    name: {
      first: "sree",
      last: "vidya",
    },
    contact: {
      phone: "8884695147",
      email: "vidya426@gmail.com",
      address: "ettukuzhi",
    },
  };
  const dummyAuthor: Author = testAuthorJson as Author;
  let testAuthor = plainToClass(Author, dummyAuthor);

  before(async () => {
    await factory.init();
    console.log("created");
  });

  after(async () => {
    await factory.close();
  });

  describe("POST /authors", () => {
    it("responds with status 400", (done) => {
      factory.app
        .post("/authors")

        .send()
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(400, done);
    });

    it("responds with new author", (done) => {
      factory.app
        .post("/authors")
        .send(testAuthorJson)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end((err, res) => {
          try {
            if (err) throw err;

            const author: Author = res.body;
            assert(200 === res.status, "status does not match");

            // Assert author
            assert.isObject(author, "author should be an object");
            assert(author.id === testAuthor.id, "authorID does not match");
            //assert(author.age === testAuthor.age, "authorAge does not match");

            assert(
              author.contact.address === testAuthor.contact.address,
              "authorAddress does not match"
            );
            assert(
              author.contact.email === testAuthor.contact.email,
              "authoremail does not match"
            );
            assert(
              author.contact.phone === testAuthor.contact.phone,
              "authorphone does not match"
            );
            assert(
              author.name.first === testAuthor.name.first,
              "authorfirstname does not match"
            );
            assert(
              author.name.last === testAuthor.name.last,
              "authorlastname does not match"
            );
            return done();
          } catch (err) {
            return done(err);
          }
        });
    });
  });
});

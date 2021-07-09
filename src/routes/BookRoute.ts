import { Router, Express } from "express";

import { Book } from "../entity/Book";

import { checkJwt } from "../middleware/jwt/checkJwt";
import { checkRole } from "../middleware/jwt/checkRole";
import { bookValidations } from "../middleware/validations/bookValidations";
import BookController from "../controller/BookController";

function getBookRouter(app: Express) {
  //   const router = Router();
  //   console.log("inside routes11");
  const bookController = new BookController();

  //Get all books
  //, [checkJwt, checkRole(["ADMIN"])]
  app.get("/books", bookController.all);

  //Get book by id
  app.get("/books/:id", bookController.one);

  //create a new book
  app.post(
    "/books",
    [bookValidations, checkJwt, checkRole(["ADMIN"])],
    bookController.create
  );

  //update an existing book
  app.put(
    "/books/:id",
    [bookValidations, checkJwt, checkRole(["ADMIN"])],
    bookController.update
  );

  //delete an existing book
  app.delete(
    "/books/:id",
    [checkJwt, checkRole(["ADMIN"])],
    bookController.delete
  );
  //return router;
}

export default getBookRouter;

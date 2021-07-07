import { Router, Express } from "express";
import { BookController } from "../controller/BookController";
import { Book } from "../entity/Book";

import { checkJwt } from "../middleware/checkJwt";
import { checkRole } from "../middleware/checkRole";
import { bookValidations } from "../middleware/bookValidations";

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
  app.post("/books", [bookValidations], bookController.create);

  //update an existing book
  app.put("/books/:id", [bookValidations], bookController.update);

  //delete an existing book
  app.delete("/books/:id", bookController.delete);
  //return router;
}

export default getBookRouter;

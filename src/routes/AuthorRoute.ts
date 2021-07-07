import { Router, Express } from "express";
import { AuthorController } from "../controller/AuthorController";
import { authorValidations } from "../middleware/authorValidations";

function getAuthorRouter(app: Express) {
  //   const router = Router();
  //   console.log("inside routes11");
  const authorController = new AuthorController();

  //Get all authors
  //, [checkJwt, checkRole(["ADMIN"])]
  app.get("/authors", authorController.all);

  //Get author by id
  app.get("/authors/:id", authorController.one);

  //Get author by firstname
  app.get("/authors/name/:firstName", authorController.firstName);

  //Get author by lastname
  app.get("/authors/name/:lastName", authorController.lastName);

  //create a new author
  app.post("/authors", [authorValidations], authorController.create);

  //update an existing author
  app.put("/authors/:id", [authorValidations], authorController.update);

  //delete an existing author
  app.delete("/authors/:id", authorController.delete);
  //return router;
}

export default getAuthorRouter;

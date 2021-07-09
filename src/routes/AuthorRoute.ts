import { Express } from "express";
import AuthorController from "../controller/AuthorController";
import { checkJwt } from "../middleware/jwt/checkJwt";
import { checkRole } from "../middleware/jwt/checkRole";

import { authorValidations } from "../middleware/validations/authorValidations";

function getAuthorRouter(app: Express) {
  const authorController = new AuthorController();

  app.get("/authors", authorController.all);

  //Get author by id
  app.get("/authors/:id", authorController.one);

  //Get author by firstname
  app.get("/authors/name/:firstName", authorController.firstName);

  //Get author by lastname
  app.get("/authors/name/:lastName", authorController.lastName);

  //create a new author
  app.post(
    "/authors",
    [authorValidations, checkJwt, checkRole(["ADMIN"])],
    authorController.create
  );

  //update an existing author
  app.put(
    "/authors/:id",
    [authorValidations, checkJwt, checkRole(["ADMIN"])],
    authorController.update
  );

  //delete an existing author
  app.delete(
    "/authors/:id",
    [checkJwt, checkRole(["ADMIN"])],
    authorController.delete
  );
  //return router;
}

export default getAuthorRouter;

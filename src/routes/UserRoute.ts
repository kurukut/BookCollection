import { Express } from "express";
import UserController from "../controller/UserController";

import { checkJwt } from "../middleware/jwt/checkJwt";
import { checkRole } from "../middleware/jwt/checkRole";
import { userValidations } from "../middleware/validations/userValidations";

function getUserRouter(app: Express) {
  const userController = new UserController();

  //Get all users
  //, )
  app.get("/users", [checkJwt, checkRole(["ADMIN"])], userController.all);

  //Get user by id
  app.get("/users/:id", [checkJwt, checkRole(["ADMIN"])], userController.one);

  //Get user by firstname
  app.get(
    "/users/name/:firstName",
    [checkJwt, checkRole(["ADMIN"])],
    userController.allFirstName
  );

  //Get user by lastname
  app.get(
    "/users/name/:lastName",
    [checkJwt, checkRole(["ADMIN"])],
    userController.allLastName
  );

  //create a new user
  app.post(
    "/users",
    [checkJwt, checkRole(["ADMIN"]), userValidations],
    userController.create
  );

  //update an existing user
  app.put(
    "/users/:id",
    [checkJwt, checkRole(["ADMIN"]), userValidations],
    userController.update
  );

  //delete an existing user
  app.delete(
    "/users/:id",
    [checkJwt, checkRole(["ADMIN"])],
    userController.delete
  );
  //return router;
}

export default getUserRouter;

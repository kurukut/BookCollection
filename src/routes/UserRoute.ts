import { Router, Express } from "express";
import { UserController } from "../controller/UserController";
import { User } from "../entity/User";

import { checkJwt } from "../middleware/checkJwt";
import { checkRole } from "../middleware/checkRole";
import { userValidations } from "../middleware/userValidations";

function getUserRouter(app: Express) {
  //   const router = Router();
  //   console.log("inside routes11");
  const userController = new UserController();

  //Get all users
  //, [checkJwt, checkRole(["ADMIN"])]
  app.get("/users", userController.all);

  //Get user by id
  app.get("/users/:id", userController.one);

  //Get user by firstname
  app.get("/users/name/:firstName", userController.allFirstName);

  //Get user by lastname
  app.get("/users/name/:lastName", userController.allLastName);

  //create a new user
  app.post("/users", [userValidations], userController.create);

  //update an existing user
  app.put("/users/:id", [userValidations], userController.update);

  //delete an existing user
  app.delete("/users/:id", userController.delete);
  //return router;
}

export default getUserRouter;

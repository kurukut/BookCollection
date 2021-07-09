import { Express } from "express";
import AuthenticationController from "../controller/AuthenticationController";

function getAuthenticationRouter(app: Express) {
  const authenticationController = new AuthenticationController();
  //Login route
  app.post("/login", authenticationController.login);
}

export default getAuthenticationRouter;

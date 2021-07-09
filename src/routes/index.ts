import {  Express } from "express";
import getAuthenticationRouter from "./AuthenticationRouter";
import getAuthorRouter from "./AuthorRoute";
import getBookRouter from "./BookRoute";
import getUserRouter from "./UserRoute";

function Routes(app: Express) {
  getUserRouter(app);
  getBookRouter(app);
  getAuthorRouter(app);
  getAuthenticationRouter(app);
}

export default Routes;

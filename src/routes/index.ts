import { Router, Request, Response, Express } from "express";
import getAuthorRouter from "./AuthorRoute";
import getBookRouter from "./BookRoute";
import getUserRouter from "./UserRoute";

function Routes(app: Express) {
  getUserRouter(app);
  getBookRouter(app);
  getAuthorRouter(app);
}

export default Routes;

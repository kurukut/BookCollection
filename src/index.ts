import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";

import Routes from "./routes";



createConnection()
  .then(async (connection) => {
    // create express app
    
    const app = express();
    app.use(bodyParser.json());
    

    Routes(app);
    app.listen(3021);

    console.log(
      "Express server has started on port 3021. Open http://localhost:3021/login"
    );
    
  })
  .catch((error) => console.log(error));
 

import "reflect-metadata";
import { createConnection, getConnectionManager } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import getRoutes from "./routes";
import Routes from "./routes";
import * as cors from "cors";

// import {Request, Response} from "express";
// import {Routes} from "./routes/routess";
// import {User} from "./entity/User";

createConnection()
  .then(async (connection) => {
    // create express app
    console.log("create connec");
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    //register express routes from defined application routes
    // Routes.forEach(route => {
    //     (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
    //         const result = (new (route.controller as any))[route.action](req, res, next);
    //         if (result instanceof Promise) {
    //             result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

    //         } else if (result !== null && result !== undefined) {
    //             res.json(result);
    //         }
    //     });
    // });

    // setup express app here
    // ...

    // start express server
    Routes(app);
    app.listen(3021);

    console.log(
      "Express server has started on port 3020. Open http://localhost:3020/users to see results"
    );
    //app.use("/", getRoutes());

    // insert new users for test
    // await connection.manager.save(connection.manager.create(User, {
    //     firstName: "Timber",
    //     lastName: "Saw",
    //     age: 27
    // }));
    // await connection.manager.save(connection.manager.create(User, {
    //     firstName: "Phantom",
    //     lastName: "Assassin",
    //     age: 24
    // }));
  })
  .catch((error) => console.log(error));

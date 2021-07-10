require("module-alias/register");
import "reflect-metadata";
import "source-map-support/register";
//import "module-alias/register";

// Set env to test
process.env.NODE_ENV = "test";

// Set env variables from .env file
import { config } from "dotenv";
config();

import { createConnection, ConnectionOptions, Connection } from "typeorm";
import { createServer, Server as HttpServer } from "http";

import express = require("express");
import supertest = require("supertest");
import Routes from "../routes";
import * as bodyParser from "body-parser";

/**
 * TestFactory
 * - Loaded in each unit test
 * - Starts server and DB connection
 */

export class TestFactory {
  private _app: express.Application;
  private _connection: Connection;
  private _server: HttpServer;

  // DB connection options
  private options: ConnectionOptions = {
    type: "sqljs",
    database: new Uint8Array(),
    location: "database",
    logging: false,
    synchronize: true,

    entities: ["src/entity/**/*.ts"],
  };

  public get app(): supertest.SuperTest<supertest.Test> {
    return supertest(this._app);
  }

  public get connection(): Connection {
    return this._connection;
  }

  public get server(): HttpServer {
    return this._server;
  }

  /**
   * Connect to DB and start server
   */
  public async init(): Promise<void> {
    this._connection = await createConnection(this.options);
    //console.log("hello");
    this._app = express();
    this._app.use(bodyParser.json());

    Routes(this._app);
    this._server = createServer(this._app).listen(3021);
    //console.log(this.server);
  }

  /**
   * Close server and DB connection
   */
  public async close(): Promise<void> {
    this._server.close();
    this._connection.close();
  }
}

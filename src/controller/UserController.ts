import { isInstance } from "class-validator";
import { Request, Response } from "express";
import { User } from "../entity/User";

import { UserService } from "../service/UserService";
import prepareResponse from "./helpers/PrepareResponse";

export default class UserController {
  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  public all = async (req: Request, res: Response) => {
    const users = await this.userService.findAll();
    prepareResponse(users, res);
  };

  public one = async (req: Request, res: Response) => {
    const users = await this.userService.findOne(req.params.id);

    prepareResponse(users, res);
  };

  public allFirstName = async (req: Request, res: Response) => {
    const users = await this.userService.findFirstName(req.params.firstName);
    prepareResponse(users, res);
  };

  public allLastName = async (req: Request, res: Response) => {
    const users = await this.userService.findLastName(req.params.lastName);
    prepareResponse(users, res);
  };

  public create = async (req: Request, res: Response) => {
    const user = req["body"] as User;
    const newUser = await this.userService.create(user);

    prepareResponse(newUser, res);
  };

  public update = async (req: Request, res: Response) => {
    const user = req["body"] as User;
    const id = req["params"]["id"];
    const newUser = await this.userService.update(user, Number(id));
    prepareResponse(newUser, res);
  };

  public delete = async (req: Request, res: Response) => {
    const id = req["params"]["id"];
    const user = await this.userService.delete(Number(id));
    prepareResponse(user, res);
  };
}

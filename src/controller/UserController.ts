import {getCustomRepository, getRepository} from "typeorm";
import {NextFunction, Request, Response, Router} from "express";
import {User} from "../entity/User";
import { UserRepository } from "../repository/UserRepository";
import { UserService } from "../service/UserService";

export class UserController {

    private userService: UserService; 
    constructor(){
      this.userService = new UserService(); // Create a new instance of UserController
    
    }
  
    public all = async (req: Request, res: Response) => {
      const users = await this.userService.findAll();
      res.send(users).json();
    } 
  
    public one = async (req: Request, res: Response) => {
        const users = await this.userService.findOne(req.params.id);
        res.send(users).json();
      }

     
    public create = async (req: Request, res: Response) => {
      const user = req['body'] as User;
      const newUser = await this.userService.create(user);
      res.send(newUser);
    }
  
    public update = async (req: Request, res: Response) => {
      const user = req['body'] as User;
      const id =  req['params']['id'];
      
      res.send(this.userService.update(user, Number(id)));
    }
  
    public delete = async (req: Request, res: Response) => {
      const id =  req['params']['id'];
      res.send(this.userService.delete(Number(id)));
    } 
  
    

}
import { getCustomRepository, getRepository } from "typeorm";
import { NextFunction, Request, Response, Router } from "express";
import { Author } from "../entity/Author";
import { AuthorRepository } from "../repository/AuthorRepository";
import { AuthorService } from "../service/AuthorService";

export class AuthorController {
  private authorService: AuthorService;
  constructor() {
    this.authorService = new AuthorService(); // Create a new instance of AuthorController
  }

  public all = async (req: Request, res: Response) => {
    const authors = await this.authorService.findAll();
    res.send(authors).json();
  };

  public one = async (req: Request, res: Response) => {
    const authors = await this.authorService.findOne(req.params.id);
    res.send(authors).json();
  };

  public firstName = async (req: Request, res: Response) => {
    const authors = await this.authorService.findByFirstName(
      req.params.firstName
    );
    res.send(authors).json();
  };
  public lastName = async (req: Request, res: Response) => {
    const authors = await this.authorService.findByFirstName(
      req.params.firstName
    );
    res.send(authors).json();
  };
  public create = async (req: Request, res: Response) => {
    const author = req["body"] as Author;
    const newAuthor = await this.authorService.create(author);
    res.send(newAuthor);
  };

  public update = async (req: Request, res: Response) => {
    const author = req["body"] as Author;
    const id = req["params"]["id"];
    const newAuthor = await this.authorService.update(author, Number(id));
    res.send(newAuthor);
  };

  public delete = async (req: Request, res: Response) => {
    const id = req["params"]["id"];
    const deletedAuthor = await this.authorService.delete(Number(id));
    res.send(deletedAuthor);
  };
}

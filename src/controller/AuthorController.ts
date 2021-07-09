import { Request, Response } from "express";
import { Author } from "../entity/Author";

import { AuthorService } from "../service/AuthorService";
import prepareResponse from "./helpers/PrepareResponse";
let error = 0;
export default class AuthorController {
  private authorService: AuthorService;

  constructor() {
    this.authorService = new AuthorService(); // Create a new instance of AuthorController
  }

  public all = async (req: Request, res: Response) => {
    const authors = await this.authorService.findAll();
    prepareResponse(authors, res);
  };

  public one = async (req: Request, res: Response) => {
    const authors = await this.authorService.findOne(req.params.id);
    prepareResponse(authors, res);
  };

  public firstName = async (req: Request, res: Response) => {
    const authors = await this.authorService.findByFirstName(
      req.params.firstName
    );
    prepareResponse(authors, res);
  };
  public lastName = async (req: Request, res: Response) => {
    const authors = await this.authorService.findByFirstName(
      req.params.firstName
    );
    prepareResponse(authors, res);
  };
  public create = async (req: Request, res: Response) => {
    const author = req["body"] as Author;
    const newAuthor = await this.authorService.create(author);

    prepareResponse(newAuthor, res);
  };

  public update = async (req: Request, res: Response) => {
    const author = req["body"] as Author;
    const id = req["params"]["id"];
    const newAuthor = await this.authorService.update(author, Number(id));
    prepareResponse(newAuthor, res);
  };

  public delete = async (req: Request, res: Response) => {
    const id = req["params"]["id"];
    const deletedAuthor = await this.authorService.delete(Number(id));
    prepareResponse(deletedAuthor, res);
  };
}

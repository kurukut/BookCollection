import { Request, Response } from "express";
import { Book } from "../entity/Book";

import { BookService } from "../service/BookService";
import prepareResponse from "./helpers/PrepareResponse";

export default class BookController {
  private bookService: BookService;
  constructor() {
    this.bookService = new BookService();
  }

  public all = async (req: Request, res: Response) => {
    const books = await this.bookService.findAll();
    prepareResponse(books, res);
  };

  public one = async (req: Request, res: Response) => {
    const books = await this.bookService.findOne(req.params.id);
    prepareResponse(books, res);
  };

  public name = async (req: Request, res: Response) => {
    const books = await this.bookService.findByName(req.params.name);
    prepareResponse(books, res);
  };
  public create = async (req: Request, res: Response) => {
    const book = req["body"] as Book;
    const newBook = await this.bookService.create(book);
    prepareResponse(newBook, res);
  };

  public update = async (req: Request, res: Response) => {
    const book = req["body"] as Book;
    const id = req["params"]["id"];
    const newBook = await this.bookService.update(book, Number(id));
    prepareResponse(newBook, res);
  };

  public delete = async (req: Request, res: Response) => {
    const id = req["params"]["id"];
    const deletedBook = await this.bookService.delete(Number(id));
    prepareResponse(deletedBook, res);
  };
}

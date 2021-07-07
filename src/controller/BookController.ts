import { getCustomRepository, getRepository } from "typeorm";
import { NextFunction, Request, Response, Router } from "express";
import { Book } from "../entity/Book";
import { BookRepository } from "../repository/BookRepository";
import { BookService } from "../service/BookService";

export class BookController {
  private bookService: BookService;
  constructor() {
    this.bookService = new BookService(); // Create a new instance of BookController
  }

  public all = async (req: Request, res: Response) => {
    const books = await this.bookService.findAll();
    res.send(books).json();
  };

  public one = async (req: Request, res: Response) => {
    const books = await this.bookService.findOne(req.params.id);
    res.send(books).json();
  };

  public name = async (req: Request, res: Response) => {
    const books = await this.bookService.findByName(req.params.name);
    res.send(books).json();
  };
  public create = async (req: Request, res: Response) => {
    const book = req["body"] as Book;
    const newBook = await this.bookService.create(book);
    res.send(newBook);
  };

  public update = async (req: Request, res: Response) => {
    const book = req["body"] as Book;
    const id = req["params"]["id"];
    const newBook = await this.bookService.update(book, Number(id));
    res.send(newBook);
  };

  public delete = async (req: Request, res: Response) => {
    const id = req["params"]["id"];
    const deletedBook = await this.bookService.delete(Number(id));
    res.send(deletedBook);
  };

  /**
   * Configure the routes of controller
   */
  // public routes(){
  //   this.router.get('/books', this.index);
  //   this.router.book('/', this.create);
  //   this.router.put('/:id', this.update);
  //   this.router.delete('/:id', this.delete);
  // }
  // private bookRepository = getRepository(Book);

  // async all(request: Request, response: Response, next: NextFunction) {
  //     return this.bookRepository.find();
  // }

  // async one(request: Request, response: Response, next: NextFunction) {
  //     return this.bookRepository.findOne(request.params.id);

  // }

  // async save(request: Request, response: Response, next: NextFunction) {
  //     return this.bookRepository.save(request.body);
  // }

  // async remove(request: Request, response: Response, next: NextFunction) {
  //     let bookToRemove = await this.bookRepository.findOne(request.params.id);
  //     await this.bookRepository.remove(bookToRemove);
  // }
}

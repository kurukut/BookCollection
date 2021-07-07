import { getConnection, getCustomRepository } from "typeorm";
import { BOOK_NOT_FOUND } from "../constants/Constants";
import { Book } from "../entity/Book";
import { BookRepository } from "../repository/BookRepository";

export class BookService {
  private bookRepository: BookRepository;

  constructor() {
    this.bookRepository = getCustomRepository(BookRepository);
  }

  public findAll = async () => {
    return this.bookRepository.find();
  };

  public findOne = async (id: number) => {
    try {
      return await this.bookRepository.findOneOrFail(id);
    } catch (error) {
      return BOOK_NOT_FOUND;
    }
  };
  public findByName = async (name: string) => {
    const books = await this.bookRepository.findByName(name);
    return books;
  };

  public create = async (book: Book) => {
    const newBook = await this.bookRepository.save(book);
    return newBook;
  };

  public update = async (book: Book, id: number) => {
    try {
      await this.findOne(id);
    } catch (error) {
      return BOOK_NOT_FOUND;
    }
    return this.bookRepository.update(id, book);
  };

  public delete = async (id: number) => {
    try {
      await this.findOne(id);
    } catch (error) {
      return BOOK_NOT_FOUND;
    }
    return this.bookRepository.delete(id);
  };
}

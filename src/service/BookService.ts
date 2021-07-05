import { getConnection, getCustomRepository } from 'typeorm';
import { Book } from '../entity/Book';
import { BookRepository } from '../repository/BookRepository';


export class BookService {
  private bookRepository: BookRepository;

  constructor(){
    this.bookRepository = getCustomRepository(BookRepository);
  }

  public findAll = async () => {
    const books = await this.bookRepository.find(); 
    return books;
  } 

  public findOne = async (id:number) => {
    const books = await this.bookRepository.findOne(id);
    return books;
  } 
  public findByName = async (name:string) => {
    const books = await this.bookRepository.findByName(name);
    return books;
  } 

  public create = async (book: Book) => {
    const newBook = await this.bookRepository.save(book);
    return newBook;
  } 

  public update =  async(book: Book, id: number) => {
    const updatedBook = await this.bookRepository.update(id, book);
    return updatedBook;
  } 

  public delete = async (id: number) => {
    const deletedBook = await this.bookRepository.delete(id);
    return deletedBook;
  } 
}
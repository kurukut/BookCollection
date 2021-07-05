import { getConnection, getCustomRepository } from 'typeorm';
import { Author } from '../entity/Author';
import { AuthorRepository } from '../repository/AuthorRepository';


export class AuthorService {
  private bookRepository: AuthorRepository;

  constructor(){
    this.bookRepository = getCustomRepository(AuthorRepository);
  }

  public findAll = async () => {
    const books = await this.bookRepository.find(); 
    return books;
  } 

  public findOne = async (id:number) => {
    const books = await this.bookRepository.findOne(id);
    return books;
  } 
  

  public create = async (book: Author) => {
    const newAuthor = await this.bookRepository.save(book);
    return newAuthor;
  } 

  public update =  async(book: Author, id: number) => {
    const updatedAuthor = await this.bookRepository.update(id, book);
    return updatedAuthor;
  } 

  public delete = async (id: number) => {
    const deletedAuthor = await this.bookRepository.delete(id);
    return deletedAuthor;
  } 
}
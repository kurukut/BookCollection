import { getConnection, getCustomRepository } from "typeorm";
import { Author } from "../entity/Author";
import { AuthorRepository } from "../repository/AuthorRepository";

export class AuthorService {
  private authorRepository: AuthorRepository;

  constructor() {
    this.authorRepository = getCustomRepository(AuthorRepository);
  }

  public findAll = async () => {
    const authors = await this.authorRepository.find();
    return authors;
  };

  public findOne = async (id: number) => {
    const authors = await this.authorRepository.findOne(id);
    return authors;
  };
  public findByFirstName = async (firstName: string) => {
    return this.authorRepository.findByFirstName(firstName);
  };

  public findByLastName = async (lastName: string) => {
    return this.authorRepository.findByLastName(lastName);
  };

  public create = async (author: Author) => {
    const newAuthor = await this.authorRepository.save(author);
    return newAuthor;
  };

  public update = async (author: Author, id: number) => {
    const updatedAuthor = await this.authorRepository.update(id, author);
    return updatedAuthor;
  };

  public delete = async (id: number) => {
    const deletedAuthor = await this.authorRepository.delete(id);
    return deletedAuthor;
  };
}

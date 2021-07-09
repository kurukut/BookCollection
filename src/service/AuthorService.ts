import { getCustomRepository } from "typeorm";
import Constants from "../constants/Constants";
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
    try {
      return await this.authorRepository.findOneOrFail(id);
    } catch (error) {
      return error;
    }
  };
  public findByFirstName = async (firstName: string) => {
    return this.authorRepository.findByFirstName(firstName);
  };

  public findByLastName = async (lastName: string) => {
    return this.authorRepository.findByLastName(lastName);
  };

  public create = async (author: Author) => {
    try {
      return await this.authorRepository.save(author);
    } catch (error) {
      return error;
    }
  };

  public update = async (author: Author, id: number) => {
    try {
      await this.findOne(id);
    } catch (error) {
      return error;
    }
    return this.authorRepository.update(id, author);
  };

  public delete = async (id: number) => {
    try {
      await this.findOne(id);
    } catch (error) {
      return error;
    }
    return this.authorRepository.delete(id);
  };
}

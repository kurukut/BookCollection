import { get } from "http";
import { EntityRepository, Repository } from "typeorm";
import { Book } from "../entity/Book";

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
  async findByName(name: string) {
    return this.findOne({ name });
  }
}

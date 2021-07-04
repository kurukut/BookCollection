import {EntityRepository, Repository} from "typeorm";
import {Book} from "../entity/Book";

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {

    findByName(bookName: string) {
        return this.findOne({ bookName });
    }

}
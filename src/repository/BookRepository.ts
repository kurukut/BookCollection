
import { get } from "http";
import {EntityRepository, Repository} from "typeorm";
import { Book } from "../entity/Book";


@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
    
    findByName(name: string) {
        console.log("hello");
        return this.findOne({ name });
    }

}
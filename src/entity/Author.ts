import { type } from "os";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, ManyToMany} from "typeorm";
import { Contact } from "../dao/Contact";

import { PersonInterface } from "../functionalinterfaces/PersonInterface";
import { Book } from "./Book";


@Entity()
export class Author extends PersonInterface  {

    // @ManyToMany(type => Book, book => book.bookAuthors, {
    //     cascade: true
    // })
    @ManyToMany(type => Book, book => book.bookAuthors)
    @JoinTable()
    books: Book[];
    
}

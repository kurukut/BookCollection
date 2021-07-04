import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Book} from "./Book";

@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    authorId: number;

    @Column()
    authorName: string;

    @ManyToOne(() => Book, book => book.bookAuthors)
    book: Book;

    
}

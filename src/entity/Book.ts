import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Author} from "./Author";

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    bookId: number;

    @Column()
    bookName: string;

    @Column()
    bookCopies: string;

    @OneToMany(() => Author, author => author.book)
    bookAuthors: Author[];

}

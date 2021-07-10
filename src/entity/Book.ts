import { Entity, Column, JoinTable, ManyToMany } from "typeorm";
import { ContentInterface } from "../functionalinterfaces/ContentInterface";

import { Author } from "./Author";

@Entity()
export class Book extends ContentInterface {
  @Column({ default: 1 })
  bookCopies: number;
  /*
  many to many relation is used coz one book can have multiple authors and
  1 author can have multiple books
  the ORM creates a join table during sync to store the bookid and the authorid
  the join table maintains a composite key (bookid,authorid) as its primary key
  */
  @ManyToMany((type) => Author, {
    cascade: true,
    nullable: false,
  })
  @JoinTable()
  bookAuthors: Author[];
}

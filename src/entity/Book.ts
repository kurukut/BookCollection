import { arrayNotEmpty, isNotEmpty, isNotEmptyObject } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany,
} from "typeorm";
import { ContentInterface } from "../functionalinterfaces/ContentInterface";

import { Author } from "./Author";

@Entity()
export class Book extends ContentInterface {
  @Column({ default: 1 })
  bookCopies: number;

  @ManyToMany((type) => Author, {
    cascade: true,
    nullable: false,

  })
  @JoinTable()
  @man
  bookAuthors: Author[];
}

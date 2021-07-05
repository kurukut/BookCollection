import {Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany} from "typeorm";
import { ContentInterface } from "../functionalinterfaces/ContentInterface";

import {Author} from "./Author";

@Entity()
export class Book extends ContentInterface {

    @Column()
    bookCopies: number;

    @ManyToMany(type => Author,  {
        cascade: true,
        nullable:false
    })
    @JoinTable()
    bookAuthors: Author[];

}

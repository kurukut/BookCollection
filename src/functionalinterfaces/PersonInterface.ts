import { PrimaryGeneratedColumn, Column } from "typeorm";
import { Contact } from "../dao/Contact";
import { Name } from "../dao/Name";

export abstract class PersonInterface {

    @PrimaryGeneratedColumn()
    id : number;

    @Column(type => Name)
    name: Name;

    @Column(type => Contact)
    contact : Contact;

    @Column()
    age : number;

}
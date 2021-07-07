import { IsNotEmpty, ValidateNested } from "class-validator";
import { PrimaryGeneratedColumn, Column } from "typeorm";
import { Contact } from "../dao/Contact";
import { Name } from "../dao/Name";

export abstract class PersonInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @ValidateNested()
  @IsNotEmpty()
  @Column((type) => Name)
  name: Name;

  @ValidateNested()
  @Column((type) => Contact)
  contact: Contact;

  @Column()
  age: number;
}

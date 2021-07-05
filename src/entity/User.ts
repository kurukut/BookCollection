import { Entity, Column, Unique } from "typeorm";

import { Length, IsNotEmpty } from "class-validator";
import { PersonInterface } from "../functionalinterfaces/PersonInterface";
import { accessRole } from "../roles/accessRole";

@Entity()
export class User extends PersonInterface {
  @Column({
    type: "enum",
    enum: accessRole,
  })
  @IsNotEmpty()
  role: accessRole;

  @Column()
  @Length(4, 20)
  @Unique(["username"])
  username: string;

  @Column()
  @Length(4, 100)
  password: string;
}

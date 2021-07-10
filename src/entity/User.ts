import { Entity, Column, Unique, Index } from "typeorm";

import * as bcrypt from "bcryptjs";
import { Length, IsNotEmpty } from "class-validator";
import { PersonInterface } from "../functionalinterfaces/PersonInterface";
import { accessRole } from "../roles/accessRole";
import { Exclude, Expose } from "class-transformer";

@Entity()
export class User extends PersonInterface {
  // @Column({
  //   type: "enum",
  //   enum: accessRole,
  // })
  @Column()
  @IsNotEmpty()
  role: string;

  @Column()
  @Length(4, 20)
  @Index({ unique: true })
  username: string;

  @Column({ select: false })
  @Length(4, 100)
  password: string;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}

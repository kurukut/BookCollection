import { Entity, Column, Unique } from "typeorm";
import { NextFunction, Request, Response, Router } from "express";
import * as bcrypt from "bcryptjs";
import { Length, IsNotEmpty } from "class-validator";
import { PersonInterface } from "../functionalinterfaces/PersonInterface";
import { accessRole } from "../roles/accessRole";

@Entity()
export class User extends PersonInterface {
  // constructor(user) {
  //   super(user);
  //   this.role = user.role;
  //   this.username = user.username;
  //   this.password = user.password;
  // }
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

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}

import { IsEmail } from "class-validator";
import { Column, Index } from "typeorm";
import Constants from "../constants/Constants";

export class Contact {
  @Column()
  @Index({ unique: true })
  phone: string;

  @Column()
  @IsEmail(undefined, {
    message: Constants.EMAIL_ERROR,
  })
  @Index({ unique: true })
  email: string;

  @Column()
  address: string;
}

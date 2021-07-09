import { IsEmail, IsPhoneNumber } from "class-validator";
import { Column, Index, Unique } from "typeorm";
import Constants from "../constants/Constants";

export class Contact {
  //@Column({ unique: true })
  //@Unique(["phone"])
  // @IsPhoneNumber(undefined, {
  //   message: Constants.PHONE_ERROR,
  // })
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

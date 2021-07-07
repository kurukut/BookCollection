import { IsEmail, isMobilePhone, isPhoneNumber, length } from "class-validator";
import { PrimaryGeneratedColumn, Column } from "typeorm";

export class Contact {
  // constructor(contact) {
  //   this.address = contact.address;
  //   this.email = contact.email;
  //   this.phone = contact.phone;
  // }
  @Column()
  phone: string;

  @Column()
  @IsEmail(undefined, {
    message: "Email address must be an email address.",
  })
  email: string;

  @Column()
  address: string;
}

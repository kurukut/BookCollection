import { User } from "../../entity/User";

import { validate } from "class-validator";

import { NextFunction, Request, Response, Router } from "express";
import { Name } from "../../dao/Name";
import { Contact } from "../../dao/Contact";
import { plainToClass } from "class-transformer";

export const userValidations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req["body"] as User;

  let dummyUser = plainToClass(User, user);
  const errors = await validate(dummyUser);

  if (errors.length > 0) {
    res.status(400).send(errors);
    return;
  }
  next();
};

function copyUserContents(user: User, dummyUser: User) {
  dummyUser.role = user.role;
  dummyUser.username = user.username;
  dummyUser.password = user.password;
  dummyUser.name = new Name();
  dummyUser.name.first = user.name.first;
  dummyUser.name.last = user.name.last;
  dummyUser.contact = new Contact();
  dummyUser.contact.address = user.contact.address;
  dummyUser.contact.email = user.contact.email;
  dummyUser.contact.phone = user.contact.phone;
}

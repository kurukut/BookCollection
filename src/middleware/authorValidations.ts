import { Author } from "../entity/Author";

import { validate } from "class-validator";

import { NextFunction, Request, Response, Router } from "express";
import { Name } from "../dao/Name";
import { Contact } from "../dao/Contact";

export const authorValidations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const author = req["body"] as Author;
  let dummyAuthor = new Author();

  dummyAuthor = <Author>author;
  console.log(typeof dummyAuthor);
  copyAuthorContents(author, dummyAuthor);
  const errors = await validate(dummyAuthor);

  if (errors.length > 0) {
    res.status(400).send(errors);
    return;
  }
  next();
};

function copyAuthorContents(author: Author, dummyAuthor: Author) {
  dummyAuthor.name = new Name();
  dummyAuthor.name.first = author.name.first;
  dummyAuthor.name.last = author.name.last;
  dummyAuthor.contact = new Contact();
  dummyAuthor.contact.address = author.contact.address;
  dummyAuthor.contact.email = author.contact.email;
  dummyAuthor.contact.phone = author.contact.phone;
}

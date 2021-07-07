import { Book } from "../entity/Book";

import { validate } from "class-validator";

import { NextFunction, Request, Response, Router } from "express";
import { Name } from "../dao/Name";
import { Contact } from "../dao/Contact";

export const bookValidations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const book = req["body"] as Book;
  let dummyBook = new Book();
  dummyBook = book;

  copyBookContents(book, dummyBook);
  const errors = await validate(dummyBook);

  if (errors.length > 0) {
    res.status(400).send(errors);
    return;
  }
  next();
};

function copyBookContents(book: Book, dummyBook: Book) {
  dummyBook.id = book.id;
  dummyBook.name = book.name;
  dummyBook.description = book.description;
  dummyBook.bookCopies = book.bookCopies;
}

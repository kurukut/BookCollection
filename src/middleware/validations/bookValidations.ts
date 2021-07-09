import { Book } from "../../entity/Book";

import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { NextFunction, Request, Response } from "express";

export const bookValidations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const book = req["body"] as Book;
  let dummyBook = plainToClass(Book, book);
  const errors = await validate(dummyBook);

  if (errors.length > 0) {
    res.status(400).send(errors);
    return;
  }
  next();
};

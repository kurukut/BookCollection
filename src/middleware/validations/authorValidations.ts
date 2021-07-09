import { Author } from "../../entity/Author";

import { validate } from "class-validator";
import { plainToClass } from 'class-transformer';
import { NextFunction, Request, Response } from "express";


export const authorValidations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const author = req["body"] as Author;
  let dummyAuthor = plainToClass(Author, author);
  const errors = await validate(dummyAuthor);

  if (errors.length > 0) {
    res.status(400).send(errors);
    return;
  }
  next();
};


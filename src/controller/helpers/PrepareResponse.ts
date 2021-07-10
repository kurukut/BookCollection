import { Request, Response } from "express";
export default function prepareResponse(response, res: Response) {
  if ("code" in response) {
    res.status(400).send(response);
    return;
  } else {
    res.send(response);
  }
}

import { Request, Response } from "express";
export default function prepareResponse(response, res: Response) {
  if (response.code != "") {
    res.status(400).send(response);
    return;
  } else {
    res.send(response);
  }
}

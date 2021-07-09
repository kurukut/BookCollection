import { Request, Response } from "express";
import { AuthenticationService } from "../service/AuthenticationService";
import Constants from "../constants/Constants";

class AuthenticationController {
  private authenticationService: AuthenticationService;
  constructor() {
    this.authenticationService = new AuthenticationService();
  }
  login = async (req: Request, res: Response) => {
    let { Username, Password } = req.body;

    const result = await this.authenticationService.authenticateUser(
      Username,
      Password
    );
    switch (result) {
      case Constants.CREDENTIALS_ABSENT:
        res.status(400).send(Constants.CREDENTIALS_ABSENT);
        return;
      case Constants.USERNAME_NOT_FOUND:
        res.status(401).send(Constants.USERNAME_NOT_FOUND);
        return;
      case Constants.WRONG_PASSWORD:
        res.status(401).send(Constants.WRONG_PASSWORD);
        return;
    }
    res.send(result);
  };
}
export default AuthenticationController;

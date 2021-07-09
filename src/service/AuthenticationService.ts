
import { getCustomRepository } from "typeorm";
import { User } from "../entity/User";
import { UserRepository } from "../repository/UserRepository";
import * as jwt from "jsonwebtoken";
import config from "../config/config";
import Constants from "../constants/Constants";

export class AuthenticationService {
  private authenticationRepository: UserRepository;

  constructor() {
    this.authenticationRepository = getCustomRepository(UserRepository);
  }

  public authenticateUser = async (username: string, password: string) => {
    if (!(username && password)) {
      //res.status(400).send("enter credentials");
      return Constants.CREDENTIALS_ABSENT;
    }
    let user: User;
    //confirm username
    try {
      user = await this.authenticationRepository.findOneOrFail({
        select: ["id", "username", "password"],
        where: { username },
      });
    } catch (error) {
      return Constants.USERNAME_NOT_FOUND;
    }
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      return Constants.WRONG_PASSWORD;
    }
    //Sing JWT, valid for 1 hour
    const token = jwt.sign(
      {
        authenticationId: user.id,
        authenticationname: user.username,
      },
      config.jwtSecret,
      { expiresIn: "1h" }
    );

    //Send the jwt in the response
    return token;
  };
}

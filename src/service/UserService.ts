import { getCustomRepository } from "typeorm";

import { User } from "../entity/User";
import { UserRepository } from "../repository/UserRepository";
import { plainToClass } from "class-transformer";
import Constants from "../constants/Constants";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }
  //functions are async coz I want to return a promise
  public findAll = async () => {
    return this.userRepository.find();
  };

  public findOne = async (id: number) => {
    // return this.userRepository.findOneOrFail(id).catch((error) => {
    //   return USER_NOT_FOUND;
    // });

    try {
      return await this.userRepository.findOneOrFail(id);
    } catch (error) {
      return error;
    }
  };

  /*
  no need to use await coz there are no following lines of code
  */
  public findFirstName = async (firstName: string) => {
    return this.userRepository.findByFirstName(firstName);
  };

  public findLastName = async (lastName: string) => {
    return this.userRepository.findByLastName(lastName);
  };

  public create = async (user: User) => {
    user = plainToClass(User, user);
    user.hashPassword();
    try {
      return await this.userRepository.save(user);
    } catch (error) {
      return error;
    }
  };

  public update = async (user: User, id: number) => {
    try {
      await this.findOne(id);
      return this.userRepository.update(id, user);
    } catch (error) {
      return error;
    }
  };

  public delete = async (id: number) => {
    try {
      await this.findOne(id);
      return this.userRepository.delete(id);
    } catch (error) {
      return error;
    }
  };
}

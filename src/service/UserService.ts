import { validate } from "class-validator";
import {
  getConnection,
  getConnectionManager,
  getCustomRepository,
} from "typeorm";
import { USER_NOT_FOUND } from "../constants/Constants";
import { User } from "../entity/User";
import { UserRepository } from "../repository/UserRepository";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    console.log(getConnectionManager().connections);
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
      return USER_NOT_FOUND;
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
    return this.userRepository.save(user);
  };

  public update = async (user: User, id: number) => {
    try {
      await this.findOne(id);
    } catch (error) {
      return USER_NOT_FOUND;
    }
    return this.userRepository.update(id, user);
  };

  public delete = async (id: number) => {
    try {
      await this.findOne(id);
    } catch (error) {
      return USER_NOT_FOUND;
    }
    return this.userRepository.delete(id);
  };
}

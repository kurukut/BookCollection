import { EntityRepository, Repository } from "typeorm";
import { User } from "../entity/User";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  //no need to use await  as we have a single line of code
  async findByFirstName(firstName: string) {
    return this.find({
      where: {
        name: {
          first: firstName,
        },
      },
    });
  }

  async findByLastName(lastName: string) {
    return this.find({
      where: {
        name: {
          last: lastName,
        },
      },
    });
  }
}

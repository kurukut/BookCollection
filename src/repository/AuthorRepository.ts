
import { EntityRepository, Repository } from "typeorm";
import { Author } from "../entity/Author";

@EntityRepository(Author)
export class AuthorRepository extends Repository<Author> {
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

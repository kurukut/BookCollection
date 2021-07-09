import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { Contact } from "../dao/Contact";
import { Name } from "../dao/Name";
import { User } from "../entity/User";
import { accessRole } from "../roles/accessRole";
import { createDatabase } from "typeorm-extension";

export class CreateAdminUser1547919837483 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    // await createDatabase({"bookshelf",true});
    let user = new User();
    user.username = "admin";
    user.password = "admin";
    user.hashPassword();
    user.role = accessRole.ADMIN;
    let name = new Name();
    name.first = "Harry";
    name.last = "Potter";
    user.name = name;
    let contact = new Contact();
    contact.address = "Privet Drive,London";
    contact.email = "HarryPotter@gmail.com";
    contact.phone = "123456789";
    user.contact = contact;
    user.age = 20;
    const userRepository = getRepository(User);
    await userRepository.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}

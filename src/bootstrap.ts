import { getRepository } from "typeorm";
import { User } from "./entity/User";

export const Bootstrap = async () => {
  const userRepo = getRepository(User);
  const user = userRepo.create({
    firstName: "Alex",
    lastName: "Brooks",
    age: 22,
  });
  await userRepo.save(user).catch((err) => {
    console.log("Error: ", err);
  });
  console.log("New User Saved", user);
};

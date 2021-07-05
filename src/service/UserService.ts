import { getConnection, getCustomRepository } from 'typeorm';
import { User } from '../entity/User';
import { UserRepository } from '../repository/UserRepository';



export class UserService {
  private userRepository: UserRepository;

  constructor(){
    this.userRepository = getCustomRepository(UserRepository);
  }

  public findAll = async () => {
    const users = await this.userRepository.find(); 
    return users;
  } 

  public findOne = async (id:number) => {
    const users = await this.userRepository.findOne(id);
    return users;
  } 
  

  public create = async (user: User) => {
    const newUser = await this.userRepository.save(user);
    return newUser;
  } 

  public update =  async(user: User, id: number) => {
    const updatedUser = await this.userRepository.update(id, user);
    return updatedUser;
  } 

  public delete = async (id: number) => {
    const deletedUser = await this.userRepository.delete(id);
    return deletedUser;
  } 
}
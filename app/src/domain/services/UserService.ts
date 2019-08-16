import UserRepository from '../repositories/UserRepository';
import User from '../entities/User';
import Service from './Service';
import UID from '../../infra/database/UID';

export default class UserService extends Service<User> {
  constructor() {
    super(new UserRepository());
  }

  async getAllUsers(): Promise<Array<User>> {
    const users = await this.repository.find();
    return users;
  }

  async registerUser(user: User): Promise<User|null> {
    user.id = (new UID()).generate();
    const userCreated = this.repository.insert(user);
    return userCreated;
  }
}

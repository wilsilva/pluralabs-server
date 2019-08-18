import UserRepository from '../repositories/UserRepository';
import User from '../entities/User';
import Service from './Service';
import HttpNotFoundException from '../../cmd/http/exceptions/HttpNotFoundException';

export default class UserService extends Service<User> {
  constructor() {
    super(new UserRepository());
  }

  async getAllUsers(): Promise<Array<User>> {
    const users = await this.repository.find();
    return users;
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new HttpNotFoundException('User not found.');
    }

    return user;
  }

  async registerUser(user: User): Promise<User|null> {
    const userCreated = this.repository.insert(user);
    return userCreated;
  }
}

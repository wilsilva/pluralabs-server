import UserRepository from '../../infra/database/repositories/user-repository';
import User from '../entities/user';
import Service from './service';
import HttpNotFoundException from '../../cmd/http/exceptions/http-not-found-exception';

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

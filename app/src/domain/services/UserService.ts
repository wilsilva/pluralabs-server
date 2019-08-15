import UserRepository from '../repositories/UserRepository';
import User from '../entities/User';
import Service from './Service';

export default class UserService extends Service<User> {
  constructor() {
    super(new UserRepository());
  }

  async getAllUsers(): Promise<Array<User>> {
    const users = await this.repository.find();
    return users;
  }
}

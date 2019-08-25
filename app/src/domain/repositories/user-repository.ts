import RepositoryApplication from './repository-application';
import User from '../entities/user';

export default class UserRepository extends RepositoryApplication<User> {
  constructor() {
    super('users');
  }

  async find(): Promise<User[]> {
    const users = await this.dao.find();
    return users;
  }

  async findById(identify: string): Promise<User|null> {
    const user = await this.dao.findById(identify);
    return user;
  }

  async insert(data: User): Promise<User|null> {
    const user = await this.dao.insert(data);
    return user;
  }

  async update(identify: string, data: User): Promise<User|null> {
    const user = await this.dao.update(identify, data);
    return user;
  }

  async delete(identify: string): Promise<boolean> {
    const isDeleted = await this.dao.delete(identify);
    return isDeleted;
  }
}

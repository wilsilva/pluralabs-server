import Repository from './Repository';
import User from '../entities/User';
import Mongo from '../../infra/database/mongodb/Mongo';

export default class UserRepository implements Repository<User> {
    private static dao: Repository<User> = new Mongo<User>('users');

    async find(): Promise<User[]> {
      const users = await UserRepository.dao.find();
      return users;
    }

    async findById(identify: string): Promise<User | null> {
      const user = await UserRepository.dao.findById(identify);
      return user;
    }

    async insert(data: User): Promise<User | null> {
      const user = await UserRepository.dao.insert(data);
      return user;
    }

    async update(identify: string, data: User): Promise<User | null> {
      const user = await UserRepository.dao.update(identify, data);
      return user;
    }

    async delete(identify: string): Promise<boolean> {
      const isDeleted = await UserRepository.dao.delete(identify);
      return isDeleted;
    }
}

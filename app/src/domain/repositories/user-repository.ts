import RepositoryApplication from './repository-application';
import User from '../entities/user';

export default class UserRepository extends RepositoryApplication<User> {
  constructor() {
    super('users');
  }
}

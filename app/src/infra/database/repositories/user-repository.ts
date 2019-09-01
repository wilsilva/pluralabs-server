import RepositoryApplication from './repository-application';
import User from '../../../domain/entities/user';

export default class UserRepository extends RepositoryApplication<User> {
  constructor() {
    super('users');
  }
}

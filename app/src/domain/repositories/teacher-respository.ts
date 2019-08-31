import RepositoryApplication from './repository-application';
import Teacher from '../entities/Teacher';

export default class TeacherRepository extends RepositoryApplication<Teacher> {
  constructor() {
    super('teachers');
  }
}

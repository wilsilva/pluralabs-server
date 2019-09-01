import RepositoryApplication from './repository-application';
import Teacher from '../../../domain/entities/Teacher';

export default class TeacherRepository extends RepositoryApplication<Teacher> {
  constructor() {
    super('teachers');
  }
}

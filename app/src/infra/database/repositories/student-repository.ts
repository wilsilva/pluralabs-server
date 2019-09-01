import RepositoryApplication from './repository-application';
import Student from '../../../domain/entities/student';

export default class StudentRepositoy extends RepositoryApplication<Student> {
  constructor() {
    super('students');
  }
}

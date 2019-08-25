import RepositoryApplication from './repository-application';
import Course from '../entities/Course';
import Teacher from '../entities/Teacher';

export default class CourseRepository extends RepositoryApplication<Course> {
  constructor() {
    super('courses');
  }

  async getCoursesByTeacher(teacher: Teacher): Promise<Course[]> {
    // eslint-disable-next-line @typescript-eslint/camelcase
    const courses = await this.dao.findByQuery({ author: teacher._id }, { created_at: -1 });
    return courses;
  }
}
